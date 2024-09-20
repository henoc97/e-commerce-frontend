# Path to the use-cases directory
$useCasesPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\app\src\application\use-cases"

# Path to the PowerShell script `create-extra-reducer.ps1`
$scriptPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\powershell\create-hook.ps1"


function ConvertTo-PascalCase([Parameter(ValueFromPipeline)] [string] $text) {
    ($text -split '-' | ForEach-Object {
        "$($_.ToCharArray()[0].ToString().ToUpper())$($_.Substring(1))" }) -join ''
}

# Create the directory for others hooks if it doesn't exist
$othersHooksDir = "others.hooks"
if (-not (Test-Path $othersHooksDir)) {
    New-Item -Path $othersHooksDir -ItemType Directory
    Write-Host "Created Directory: $othersHooksDir"
}

function Create-HookFile {
    param (
        [string]$fileName,
        [string]$content
    )
    Set-Content -Path $fileName -Value $content
}

$indexHookContent = @"
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../states/store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

"@

Create-HookFile -fileName 'index.hook.ts' -content $indexHookContent

# Get all *.use-cases folders in the use-cases directory
$useCasesFolders = Get-ChildItem -Path $useCasesPath -Filter "*.use-cases"

# Iterate through each service file and execute the create-services.ps1 script
foreach ($folder in $useCasesFolders) {

    # Build the relative path of the service interface
    $path = "../use-cases/$($folder.Name)"

    $withoutExtension = $folder.Name -split '\.' | Select-Object -First 1

    & $scriptPath -UseCasesPath $path -EntityName $(ConvertTo-PascalCase $withoutExtension)
}

