# Path to the services directory
$servicesPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\app\src\application\services"

# Path to the PowerShell script `create-selectors.ps1`
$scriptPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\powershell\create-selectors.ps1"

# Get all *.service.ts files in the services directory
$serviceFiles = Get-ChildItem -Path $servicesPath -Filter "*.service.ts"

function ConvertTo-PascalCase([Parameter(ValueFromPipeline)] [string] $text) {
    ($text -split '-' | ForEach-Object {
        "$($_.ToCharArray()[0].ToString().ToUpper())$($_.Substring(1))" }) -join ''
}

# Iterate through each service file and execute the create-selectors.ps1 script
foreach ($file in $serviceFiles) {
    # Extract the service name (remove the .service.ts extension)
    $serviceName = $file.BaseName -replace '\.service$', ''

    $entityName = ConvertTo-PascalCase $serviceName

    # Execute the create-selectors.ps1 script for each service
    Write-Host "Executing for $entityName."

    & $scriptPath -EntityName $entityName
}
