

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

# Function to convert a string to camelCase
function ConvertTo-camelCase {
    param (
        [string]$Name
    )
    # Convert the first character to lowercase and append the rest of the string
    $result = ($Name.Substring(0,1).ToLower()) + ($Name.Substring(1))
    return $result
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

# Extracts method details, including return types, from the service content.
function Get-MethodDetails {
    param (
        [string]$content
    )
    return [regex]::Matches($content, "public\s+async\s+(\w+)\s*\(([^)]*)\)\s*:\s*(\w+<.*>|[\w]+)")
}

# Generates the register for a use-case.
function Generate-UserCaseRegister {
    param (
        [string]$useCaseName
    )

    return @"
container.register<$useCaseName>($useCaseName, { useClass: $useCaseName });`r`n`r`n
"@
}

# Generates the import for a use-case.
function Generate-UserCaseImport {
    param (
        [string]$entityName,
        [string]$useCaseName
    )
    $entityNameKebabCase = "$(ConvertTo-KebabCase $entityName).use-case"
    $useCaseFileName = "$(ConvertTo-KebabCase $methodName)-$entityNameKebabCase"
    return @"
import { $useCaseName } from '../../../../application/use-cases/$($entityNameKebabCase)s/$useCaseFileName';`r`n
"@
}

# Creates a use-case file with the specified content.
function Create-ConainerFile {
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

    # Extract method details and their return types from the service content
    $methodMatches = Get-MethodDetails -content $serviceContent

    $initImports = @"
import { container } from 'tsyringe';`r`n
import { I$($entityName)RepositoryToken } from '../../tokens/tokens';
import { I$($entityName)Repository } from '../../../../domain/repositories/$(ConvertTo-KebabCase $entityName).repository';
import { $($entityName)RepositoryImpl } from '../../../repositories-impls/$(ConvertTo-KebabCase $entityName).repository-impl';
import { $($entityName)Service } from '../../../../application/services/$(ConvertTo-KebabCase $entityName).service';`r`n`r`n
"@
    $initContent = @"
// Registering dependencies

/**
 * Register the $($entityName)Repository's concrete implementation
 */
container.register<I$($entityName)Repository>(I$($entityName)RepositoryToken, { useClass: $($entityName)RepositoryImpl });
container.register<$($entityName)Service>($($entityName)Service, { useClass: $($entityName)Service });`r`n`r`n
"@
    $useCasesRegisters = ""
    $useCasesImports = ""
    $footerContent = @"
// Exporting the container
export { container };
"@
    foreach ($methodMatch in $methodMatches) {
        $methodName = $methodMatch.Groups[1].Value
        
        # Name of the use-case file
        $fileName = "./others/$(ConvertTo-KebabCase $entityName).container.ts"

        $useCaseName = "$($methodName.Substring(0, 1).ToUpper())$($methodName.Substring(1))$($entityName)"

        # Generate the use-cases registers for the use-case file
        $useCasesRegisters += Generate-UserCaseRegister -useCaseName $useCaseName

        # Generate the use-cases imports for the use-case file
        $useCasesImports += Generate-UserCaseImport -entityName $entityName -useCaseName $useCaseName

    }
    
    $content = $initImports + $useCasesImports + "`r`n" + $initContent + $useCasesRegisters + "`r`n" + $footerContent
    # Create the use-case file with the generated content
    Create-ConainerFile -fileName $fileName -content $content

    Write-Host "$fileName file created successfully."
} catch {
    Write-Host "Error: $_"
}
