
param(
    [string]$useCasesPath,
    [string]$entityName
)

Write-Host "useCasesPath : $useCasesPath"
Write-Host "entityName : $entityName"

function ConvertTo-camelCase {
    param (
        [string]$Name
    )
    # Convert the first character to lowercase and append the rest of the string
    return ($Name.Substring(0,1).ToLower()) + ($Name.Substring(1))
}

# Function to convert a string to kebab-case
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

    [string]::Join("-", $parts)
}

function ConvertTo-PascalCase([Parameter(ValueFromPipeline)] [string] $text) {
    ($text -split '-' | ForEach-Object {
        "$($_.ToCharArray()[0].ToString().ToUpper())$($_.Substring(1))" }) -join ''
}

# Function to extract method details, including return types, from the service content
function Get-MethodDetails {
    param (
        [string]$content
    )
    # Adjusted regex to capture method details
    return [regex]::Matches($content, "(\w+)\s*\(([^)]*)\)\s*:\s*(\w+<.*>|[\w]+)")
}


# Function to read the content of the use-case file
function Get-UseCaseContent {
    param (
        [string]$path
    )
    return Get-Content -Path $path -Raw
}


function Create-HookContent {
    param (
        [string]$EntityName,
        [string]$hookThunks,
        [string]$thunkImports,
        [string]$returns

    )
    # Convert the entity name to camelCase for use in the Hook functions
    $EntityNameInCamelCase = (ConvertTo-camelCase $EntityName)
    $items = "$($EntityNameInCamelCase)s"
    
    # Generate the TypeScript content for the Redux Hook file
    return @"
import { useAppDispatch, useAppSelector } from '../index.hook';

import { $EntityName } from '../../../domain/entities/$(ConvertTo-KebabCase $EntityName).entity';`r`n
$thunksImports

export const use$($EntityName): any = () => {
    const dispatch = useAppDispatch();
    const $items = useAppSelector((state: any) => state.$($items));
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    $hookThunks

    return {
        ...$items,
        loading,
        success,
        error,
        $returns
    }
}
"@
}

function Create-HookFile {
    param (
        [string]$fileName,
        [string]$content
    )
    Set-Content -Path $fileName -Value $content
}

try {

    # Get all *.use-case.ts files in the .use-cases directory
    $useCasesfiles = Get-ChildItem -Path $useCasesPath -Filter "*.use-case.ts"

    $entityNameKebab = (ConvertTo-KebabCase $entityName)
    $EntityNameInCamel = (ConvertTo-camelCase $entityName)
    $hookThunkList = @()
    $importList = @()
    $returnList = @()
    $returns = ""
    $hookThunks = ""
    $thunksImports = ""
    foreach ($file in $useCasesfiles) {

        # Read the content of the useCase file
        $useCaseContent = Get-useCaseContent -path "$useCasesPath/$($file.Name)"
        Write-Host "useCaseContent Content Read Successfully."

        # Extract method details from the useCase content
        $methodMatches = Get-MethodDetails -content $useCaseContent
        Write-Host "Method Matches Found: $($methodMatches.Count)"

        $thunkName = (ConvertTo-camelCase $(ConvertTo-PascalCase $file.Name)) -split '\.' | Select-Object -First 1
        $handleThunk = "handle$($thunkName.Substring(0, 1).ToUpper() + $thunkName.Substring(1))"
        foreach ($methodMatch in $methodMatches) {
            $parameters = $methodMatch.Groups[2].Value.Trim()
            $formattedParameters = ($parameters -replace ':\s*\w+', '' -replace '<[^>]*>', '' -replace '\[\]', '' -replace '\{\}', '').Trim()
    
            $importList += @"
import { $thunkName } from '../../states/thunks/$($entityNameKebab).thunks/$(ConvertTo-KebabCase $thunkName).thunk';
"@
            $hookThunkList += @"
const $handleThunk = ($parameters) => {
        dispatch($thunkName({ $formattedParameters }));
    };
"@    
        }
        $returnList += $handleThunk
    }
    
    $hookThunks = [string]::Join("`r`n`r`n", $hookThunkList)
    $thunksImports = [string]::Join("`r`n", $importList)
    $returns = [string]::Join(",`r`n", $returnList)

    $content = Create-HookContent -EntityName $entityName -hookThunks $hookThunks -thunkImports $thunksImports -returns $returns

    $fileName = "others.hooks/$($entityNameKebab).hook.ts"

    Create-HookFile -fileName $fileName -content $content
    Write-Host "File Created Successfully."
}
catch {
    Write-Host "Error: $_"

}