<#
.SYNOPSIS
  Generates a service file for a specified repository in kebab-case format for frontend services with Next.js.

.DESCRIPTION
  This script creates a new service file in the current directory with the name `[repository-name].service.ts` (kebab-case).
  It extracts method signatures from the repository interface file and generates service methods that map to those.

.PARAMETER RepositoryName
  The name of the repository (PascalCase) to create the corresponding service file.

.PARAMETER RepositoryInterfacePath
  The path to the repository interface file that defines the repository methods and their signatures.

.EXAMPLE
  ./CreateNextService.ps1 -RepositoryName "Address" -RepositoryInterfacePath "../repositories/address.repository.ts"
#>

param (
    [Parameter(Mandatory = $true)]
    [string]$RepositoryName,            # PascalCase name of the repository (e.g., Address)

    [Parameter(Mandatory = $true)]
    [string]$RepositoryInterfacePath    # Path to the repository interface file
)

# ConvertTo-KebabCase function to convert PascalCase to kebab-case
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

# Extracts method signatures (including argument types) from the repository interface file
function Get-RepositoryMethods {
    param (
        [string]$FilePath    # Path to the repository interface file
    )

    $content = Get-Content -Path $FilePath
    $methods = @()

    foreach ($line in $content) {
        # Match method signatures with parameters and types, e.g., `create(entity: Entity): Promise<Entity>;`
        if ($line -match '^\s*(\w+)\s*\(([^)]*)\)\s*:\s*(\w+<.*>|[\w]+);') {
            $methodName = $matches[1]
            $parameters = $matches[2] -replace ':\s*(\w+)', ': $1'  # Keep parameter names and types
            $returnType = $matches[3] -replace 'Promise<Promise<(.+?)>>', 'Promise<$1>' # Flatten nested promises

            $methods += @(
                @{
                    Name = $methodName
                    Parameters = $parameters
                    ReturnType = $returnType
                }
            )
        }
    }

    return $methods
}

# Creates the service class content with method signatures and types
function Create-ServiceClassContent {
    param (
        [string]$ClassName,           # Name of the service class (e.g., AddressService)
        [string]$RepositoryName,      # PascalCase name of the repository and Entity (e.g., Address)
        [array]$Methods               # Array of methods with their parameters and return types
    )

    $RepositoryVAR = ($RepositoryName.Substring(0, 1).ToLower()) + ($RepositoryName.Substring(1))
    $methodsContent = ""
    $addImports = ""
    $addImportsList = @()

    foreach ($method in $Methods) {
        # Convert method name to camelCase for the service method
        $methodName = $method.Name.Substring(0, 1).ToLower() + $method.Name.Substring(1)
        $parameters = $method.Parameters
        $returnType = $method.ReturnType

        if ($returnType -notmatch $RepositoryName) {
            $formattedReturnType = $returnType -replace '.*<([\w]+).*|([\w]+)\s*\|.*', '$1$2'
            if ([char]::IsUpper($formattedReturnType[0])) {
                $importStatement = "import { $($formattedReturnType) } from '../../domain/entities/$(ConvertTo-KebabCase $formattedReturnType).entity';"
                # Add import only if it doesn't already exist
                if ($addImportsList -notcontains $importStatement) {
                    $addImportsList += $importStatement
                }
            }
        }

        # Start method documentation
        $methodDoc = @"
/**
* Service method for $methodName.
* Calls the repository's $methodName method.`r`n
"@

        # Loop over each parameter to add individual @param lines
        $paramLines = $parameters -split ',\s*'

        foreach ($param in $paramLines) {
            if ($param -match '(\w+)\s*:\s*(\w+)') {
                $paramName = $matches[1]
                $paramType = $matches[2]

                try {
                    # Check if the first character is uppercase
                    if ([char]::IsUpper($paramType[0]) -and
                        $paramType -notmatch [regex]::Escape($RepositoryName) -and
                        $paramType -notmatch 'Date' -and
                        $paramType -notmatch 'Partial') {

                        # Add import if the type is an entity (like `Entity` or `Promise<Entity>`)
                        $paramTypeKebab = ConvertTo-KebabCase $paramType -replace '<.*>', '' # Remove generics
                        $importStatement = "import { $($paramType) } from '../../domain/entities/$paramTypeKebab.entity';"

                        # Add import only if it doesn't already exist
                        if ($addImportsList -notcontains $importStatement) {
                            $addImportsList += $importStatement
                        }
                    }
                } catch {
                    Write-Host "Error processing parameter '$param': $($_.Exception.Message)"
                }

                $methodDoc += @"
* @param $paramName - The $paramType required by the repository method.`r`n
"@
            }
        }

        # Add @returns line with extra newline for better formatting
        $methodDoc += @"
* @returns $returnType - The result from the repository method.
*/
"@

        $addImports = [string]::Join("`r`n", $addImportsList)

        # Generate the method definition with proper indentation
        $formattedParameters = ($parameters -replace ':\s*\w+', '' -replace '<[^>]*>', '' -replace '\[\]', '' -replace '\{\}', '').Trim()
        $methodContent = @"
public async $methodName($parameters): $returnType {
  return await this.${RepositoryVAR}Repository.$methodName($formattedParameters);
}`r`n
"@

        # Combine documentation and method content
        $methodsContent += $methodDoc + "`r`n" + $methodContent + "`r`n"
    }

    # Return the final service class content
    return @"
import { injectable, inject } from 'tsyringe';
import type { I${RepositoryName}Repository } from '../../domain/repositories/$(ConvertTo-KebabCase $RepositoryName).repository';
import { I${RepositoryName}RepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { ${RepositoryName} } from '../../domain/entities/$(ConvertTo-KebabCase $RepositoryName).entity';
$addImports

/**
* Service class for handling $RepositoryName-related operations.
* It provides methods that call the underlying repository.
*/
@injectable()
export class $ClassName {

  /**
   * Constructor for $ClassName.
   * Injects the repository dependency.
   *
   * @param ${RepositoryVAR}Repository - The repository that handles $RepositoryName data operations.
   */
   constructor(
    @inject(I${RepositoryName}RepositoryToken) private readonly ${RepositoryVAR}Repository: I${RepositoryName}Repository
    ) {  }

  $methodsContent
}
"@
}

# Main logic

# Convert the repository name to kebab-case for file naming
$kebabCaseName = ConvertTo-KebabCase $RepositoryName
$serviceFileName = "$kebabCaseName.service.ts"
$serviceClassName = "${RepositoryName}Service"

# Extract the repository methods (with argument types and return types)
$repositoryMethods = Get-RepositoryMethods -FilePath $RepositoryInterfacePath

# Generate the service class content with method signatures
$serviceClassContent = Create-ServiceClassContent -ClassName $serviceClassName -RepositoryName $RepositoryName -Methods $repositoryMethods

# Write the generated service class content to a new file
Set-Content -Path $serviceFileName -Value $serviceClassContent

Write-Host "Service file '$serviceFileName' created successfully."
