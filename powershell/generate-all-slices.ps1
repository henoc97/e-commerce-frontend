# Path to the extra-reducers directory
$extraReducersPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\app\src\application\states\extra-reducers"

# Path to the PowerShell script `create-slice.ps1`
$scriptPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\powershell\create-slice.ps1"


function ConvertTo-PascalCase([Parameter(ValueFromPipeline)] [string] $text) {
    ($text -split '-' | ForEach-Object {
        "$($_.ToCharArray()[0].ToString().ToUpper())$($_.Substring(1))" }) -join ''
}
# Get all *.extra-reducers folders in the extra-reducers directory
$extraReducersFolders = Get-ChildItem -Path $extraReducersPath -Filter "*.extra-reducers"

try {
    # Iterate through each extra-reducers file and execute the extra-slice.ps1 script
    foreach ($folder in $extraReducersFolders) {

        $withoutExtension = $folder.Name -split '\.' | Select-Object -First 1

        # Build the relative path of the service interface
        $extraReducersPath = "../extra-reducers/$($folder.Name)"

        # Execute the create-services.ps1 script for each service
        Write-Host "Executing for $withoutExtension with interface $extraReducersPath"

        & $scriptPath -extraReducersPath $extraReducersPath -EntityName $(ConvertTo-PascalCase $withoutExtension)
    }
}
catch {
    Write-Host "Error: $_"
}