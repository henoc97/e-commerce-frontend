
param(
    [string]$extraReducersPath,
    [string]$entityName
)

Write-Host "extraReducersPath : $extraReducersPath"
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

function Create-SliceContent {
    param (
        [string]$EntityName,
        [string]$extraReducers,
        [string]$extraReducersImports
    )
    # Convert the entity name to camelCase for use in the slice functions
    $EntityNameInCamelCase = (ConvertTo-camelCase $EntityName)
    
    # Generate the TypeScript content for the Redux slice file
    return @"
import { createSlice } from '@reduxjs/toolkit';

import { $EntityName } from '../../../domain/entities/$(ConvertTo-KebabCase $EntityName).entity';`r`n
$extraReducersImports

interface $($EntityName)State {
  $($EntityNameInCamelCase)s: $($EntityName)[];
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: $($EntityName)State = {
    $($EntityNameInCamelCase)s: [],
    loading: false,
    success: false,
    error: null,
};

const $($EntityNameInCamelCase)Slice = createSlice({
  name: '$($EntityNameInCamelCase)',
  initialState,
  reducers: {
    reset$($EntityNameInCamelCase)State: (state) => {
        state.$($EntityNameInCamelCase)s = [],
        state.loading = false;
        state.success = false;
        state.error = null;
    }
  },
  extraReducers: (builder: any) => {
    $($($extraReducers))(builder);
  },
});

export const { reset$($EntityNameInCamelCase)State } = $($EntityNameInCamelCase)Slice.actions;

export default $($EntityNameInCamelCase)Slice.reducer;
"@
}

function Create-SliceFile {
    param (
        [string]$fileName,
        [string]$content
    )
    Set-Content -Path $fileName -Value $content
}

try {

    # Get all *.extra-reducer.ts files in the .extra-reducers directory
    $extraReducersfiles = Get-ChildItem -Path $extraReducersPath -Filter "*.extra-reducers.ts"

    $entityNameKebab = (ConvertTo-KebabCase $entityName)
    $reducersNames = @()
    $importList = @()
    $extraReducers = ""
    $extraReducersImports = ""
    foreach ($file in $extraReducersFiles) {
        $fileName = $($file.Name -split '\.' | Select-Object -First 1)
        $reducers = "$(ConvertTo-camelCase $(ConvertTo-PascalCase $fileName))ExtraReducers"
        $reducersNames += $reducers
        $importList += "import { $reducers } from '../extra-reducers/$($entityNameKebab).extra-reducers/$($fileName).extra-reducers';"
    }
    $extraReducers = [string]::Join("(builder);`r`n    ", $reducersNames)
    $extraReducersImports = [string]::Join("`r`n", $importList)

    $content = Create-SliceContent -EntityName $entityName -extraReducers $extraReducers -extraReducersImports $extraReducersImports

    $fileName = "$($entityNameKebab).slice.ts"

    Create-SliceFile -fileName $fileName -content $content
    Write-Host "File Created Successfully."
}
catch {
    Write-Host "Error: $_"

}