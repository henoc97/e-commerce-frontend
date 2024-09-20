<#
.SYNOPSIS
  Generates use-case files for methods in a service class in a specified directory.

.DESCRIPTION
  This script reads a TypeScript service file to extract method signatures and their return types. 
  It generates corresponding use-case files in the `use-cases` directory, following kebab-case naming conventions. 
  The generated files contain classes that encapsulate the business logic for each service method, 
  including methods to execute these use-cases with type-safe parameters and return types.

.PARAMETER serviceFilePath
  The path to the TypeScript service file that defines the service class and its methods.

.EXAMPLE
  ./GenerateUseCases.ps1 -serviceFilePath "../services/address.service.ts"
#>

param (
    [string]$serviceFilePath
)

# Converts a string from CamelCase to kebab-case.
function ConvertTo-KebabCase {
    param (
        [string]$Name
    )

    if ($Name -eq $null) {
        return $null
    }

    $parts = @()
    $part = ""
    for ($i = 0; $i -lt $Name.Length; $i++) {
        if ([char]::IsUpper($Name[$i]) -and $part.Length -gt 0) {
            $parts += $part.ToLower()
            $part = ""
        } 

        $part += $Name[$i]
    }
    if ($part.Length) {
        $parts += $part.ToLower();
    }

    [string]::Join("-", $parts);
}

# Reads the content of the service file.
function Get-ServiceContent {
    param (
        [string]$path
    )
    return Get-Content -Path $path -Raw
}

# Extracts the service class name from the content of the service file.
function Get-EntityName {
    param (
        [string]$content
    )
    if ($content -match "export\s+class\s+(\w+)Service") {
        return $matches[1]
    } else {
        throw "Unable to determine the entity name."
    }
}

# Creates the use-cases directory if it doesn't exist.
function Create-UseCasesDirectory {
    param (
        [string]$dirPath
    )
    $kebabCaseName = ConvertTo-KebabCase $dirPath
    if (-not (Test-Path -Path $kebabCaseName)) {
        New-Item -Path $kebabCaseName -ItemType Directory
    }
}

# Extracts method details, including return types, from the service content.
function Get-MethodDetails {
    param (
        [string]$content
    )
    return [regex]::Matches($content, "public\s+async\s+(\w+)\s*\(([^)]*)\)\s*:\s*(\w+<.*>|[\w]+)")
}

# Generates the content for a use-case file.
function Generate-FileContent {
    param (
        [string]$entityName,
        [string]$methodName,
        [string]$parameters,
        [string]$returnType
    )

    $paramLines = $parameters -split ',\s*'
    $paramDoc = ""
    foreach ($param in $paramLines) {
        if ($param -match '(\w+)\s*:\s*(\w+)') {
            $paramName = $matches[1]
            $paramType = $matches[2]
            $paramDoc += "`r`n     * @param $paramName - The $paramType required by the service method."
        }
    }

    $formattedParameters = ($parameters -replace ':\s*\w+', '' -replace '<[^>]*>', '' -replace '\[\]', '' -replace '\{\}', '').Trim()
    $importEntity = ""
    $returnNull = ""
    if ($returnType -match "null") {
        $returnNull = "`r`n         if (!result) return null;`r`n"
    }
    if ($returnType -match $entityName) {
        $importEntity = "import { $($entityName) } from '../../../domain/entities/$(ConvertTo-KebabCase $entityName).entity';"
    }

    return @"
import { injectable } from 'tsyringe';
import { $($entityName)Service } from '../../services/$(ConvertTo-KebabCase $entityName).service';
$importEntity

/**
 * Use case class for $($methodName).
 * This class encapsulates the business logic for $($methodName).
 * It interacts with the $($entityName) service to perform operations on the $($entityName.ToLower()) repository.
 */
@injectable()
export class $($methodName.Substring(0, 1).ToUpper())$($methodName.Substring(1))$($entityName) {
    constructor(private readonly service: $($entityName)Service) {}

    /**
     * Execute the $($methodName) use case. $paramDoc
     * @returns A promise with the service result of type $returnType.
     */
    async execute($parameters): $returnType {
        const result = await this.service.$($methodName)($formattedParameters);
        $returnNull
        return result;
    }
}
"@
}

# Creates a use-case file with the specified content.
function Create-UseCaseFile {
    param (
        [string]$fileName,
        [string]$content
    )
    Set-Content -Path $fileName -Value $content
}

# Main script
try {
    # Read the content of the service file
    $serviceContent = Get-ServiceContent -path $serviceFilePath

    # Extract the entity name (service class name) from the content
    $entityName = Get-EntityName -content $serviceContent
    $useCasesDir = "$($entityName).use-cases"

    # Create the use-cases directory if it doesn't exist
    Create-UseCasesDirectory -dirPath $useCasesDir

    # Extract method details and their return types from the service content
    $methodMatches = Get-MethodDetails -content $serviceContent

    foreach ($methodMatch in $methodMatches) {
        $methodName = $methodMatch.Groups[1].Value
        $parameters = $methodMatch.Groups[2].Value.Trim()
        $returnType = $methodMatch.Groups[3].Value -replace 'Promise<Promise<(.+?)>>', 'Promise<$1>'

        # Name of the use-case file
        $fileName = "$useCasesDir\$(ConvertTo-KebabCase $methodName)-$(ConvertTo-KebabCase $entityName).use-case.ts"

        # Generate the content for the use-case file
        $fileContent = Generate-FileContent -entityName $entityName -methodName $methodName -parameters $parameters -returnType $returnType

        # Create the use-case file with the generated content
        Create-UseCaseFile -fileName $fileName -content $fileContent
    }

    Write-Host "Directory '$useCasesDir' and use-case files created successfully."
} catch {
    Write-Host "Error: $_"
}
