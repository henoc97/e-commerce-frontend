# Path to the services directory
$servicesPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\app\src\application\services"

# Path to the PowerShell script `create-injection-decorator-conatainer.ps1`
$scriptPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\powershell\create-injection-decorator-container-config.ps1"

# Get all *.service.ts files in the services directory
$serviceFiles = Get-ChildItem -Path $servicesPath -Filter "*.service.ts"

function ConvertTo-PascalCase([Parameter(ValueFromPipeline)] [string] $text) {
    ($text -split '-' | ForEach-Object {
        "$($_.ToCharArray()[0].ToString().ToUpper())$($_.Substring(1))" }) -join ''
}

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
function Create-UseCasesDirectory {
    param (
        [string]$dirPath
    )
    $kebabCaseName = ConvertTo-KebabCase $dirPath
    if (-not (Test-Path -Path $kebabCaseName)) {
        New-Item -Path $kebabCaseName -ItemType Directory
    }
}

# Create the use-cases directory if it doesn't exist
Create-UseCasesDirectory -dirPath "others"

$containerIndexContent = ""
# Iterate through each service file and execute the create-injection-decorator-conatainer.ps1 script
foreach ($file in $serviceFiles) {
    # Extract the service name (remove the .service.ts extension)
    $serviceName = $file.BaseName -replace '\.service$', ''

    $entityName = ConvertTo-PascalCase $serviceName

    $serviceFile = "../../../application/services/$($file.Name)"

    $containerIndexContent += "export * from './others/$(ConvertTo-KebabCase $entityName).container';`r`n"

    # Execute the create-injection-decorator-conatainer.ps1 script for each service
    Write-Host "Executing for $entityName."

    & $scriptPath -serviceFilePath $serviceFile
}

Set-Content -Path "index.container.ts" -Value $containerIndexContent
