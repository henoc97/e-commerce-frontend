# Path to the services directory
$servicesPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\app\src\application\services"

# Get all *.service.ts files in the services directory
$serviceFiles = Get-ChildItem -Path $servicesPath -Filter "*.service.ts"

# Initialize the repositories tokens string
$repositoriesTokens = ""

# ConvertTo-KebabCase function
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
        $parts += $part.ToLower()
    }

    [string]::Join("-", $parts)
}

# Function to generate tokens with double line breaks
function Generate-Tokens {
    param(
        [string]$entityName
    )

    return @"
/**
 * Defines a unique token for dependency injection for the 'I$($entityName)Repository' of a specific '$($entityName)'.
 * 
 * Tokens are used to uniquely identify repository instances when injecting dependencies into services or other application components. 
 * injecting dependencies into services or other application components. Each 
 * entity repository must have a distinct token to enable correct injection of 
 * dependencies via the dependency injection container.
 * 
 * Here, the `I$($entityName)RepositoryToken` token is used to register the specific 
 * specific `$($entityName)RepositoryImpl` implementation in the 'tsyringe' container, enabling the 
 * the dependency injector to resolve the correct repository instance when necessary.
 * 
 * @constant {symbol} I$($entityName)RepositoryToken - A unique symbol used as an injection key
 * for the repository 'I$($entityName)Repository' of the specified entity '$($entityName)'. This symbol is created using `Symbol.for()`. 
 * with a string representing the repository name.
 */
export const I$($entityName)RepositoryToken = Symbol.for('I$($entityName)Repository');`r`n`r`n
"@
}

# Function to convert a name to PascalCase
function ConvertTo-PascalCase {
    param([string]$text)
    ($text -split '-' | ForEach-Object {
        "$($_.Substring(0,1).ToUpper())$($_.Substring(1))"
    }) -join ''
}

# Function to create tokens file
function Create-TokensFile {
    param (
        [string]$fileName,
        [string]$content
    )
    Set-Content -Path $fileName -Value $content
}

# Iterate through each service file
foreach ($file in $serviceFiles) {
    # Extract the service name (remove the .service.ts extension)
    $serviceName = $file.BaseName -replace '\.service$', ''

    # Convert service name to PascalCase
    $entityName = ConvertTo-PascalCase $serviceName
    
    # Generate tokens for the entity with double line breaks
    $repositoriesTokens += Generate-Tokens $entityName

    Write-Host "Generating token for $entityName."
}

# Create the tokens.ts file with the generated content
Create-TokensFile -fileName 'tokens.ts' -content $repositoriesTokens

Write-Host "Tokens file generated successfully."
