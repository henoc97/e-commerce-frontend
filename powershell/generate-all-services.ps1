# Path to the repositories directory
$repositoriesPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\app\src\domain\repositories"

# Path to the PowerShell script `create-services.ps1`
$scriptPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\powershell\create-services.ps1"

# Get all *.repository.ts files in the repositories directory
$repositoryFiles = Get-ChildItem -Path $repositoriesPath -Filter "*.repository.ts"

function ConvertTo-PascalCase([Parameter(ValueFromPipeline)] [string] $text) {
    ($text -split '-' | ForEach-Object {
        "$($_.ToCharArray()[0].ToString().ToUpper())$($_.Substring(1))" }) -join ''
}

# Iterate through each repository file and execute the create-services.ps1 script
foreach ($file in $repositoryFiles) {
    # Extract the repository name (remove the .repository.ts extension)
    $repositoryName = $file.BaseName -replace '\.repository$', ''

    $repositoryName = ConvertTo-PascalCase $repositoryName

    # Build the relative path of the repository interface
    $repositoryInterfacePath = "../../domain/repositories/$($file.Name)"

    # Execute the create-services.ps1 script for each repository
    Write-Host "Executing for $repositoryName with interface $repositoryInterfacePath"

    & $scriptPath -RepositoryName $repositoryName -RepositoryInterfacePath $repositoryInterfacePath
}
