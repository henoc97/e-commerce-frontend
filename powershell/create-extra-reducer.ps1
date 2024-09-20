param (
    [string]$UseCasePth,     # Path to the use-case file
    [string]$EntityName      # Name of the entity
)

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

# Function to convert a string to camelCase
function ConvertTo-camelCase {
    param (
        [string]$Name
    )
    # Convert the first character to lowercase and append the rest of the string
    return ($Name.Substring(0,1).ToLower()) + ($Name.Substring(1))
}

# Function to read the content of the use-case file
function Get-UseCaseContent {
    param (
        [string]$path
    )
    return Get-Content -Path $path -Raw
}

# Function to extract the use-case class name from the content of the use-case file
function Get-UseCaseName {
    param (
        [string]$content
    )
    # Regular expression to match the class name
    if ($content -match "export\s+class\s+(\w+)") {
        return $matches[1]
    } else {
        throw "Unable to determine the entity name from the content."
    }
}

# Function to extract method details, including return types, from the service content
function Get-MethodDetails {
    param (
        [string]$content
    )
    # Adjusted regex to capture method details
    return [regex]::Matches($content, "(\w+)\s*\(([^)]*)\)\s*:\s*(\w+<.*>|[\w]+)")
}

# Function to generate the content for a use-case file
function Generate-FileContent {
    param (
        [string]$useCaseName,
        [string]$entityName,
        [string]$parameters,
        [string]$returnType
    )

    # Convert names to appropriate formats
    $thunkName = ConvertTo-camelCase $useCaseName
    $formattedReturnType = $returnType -replace '.*<([^>]+)>.*', '$1'
    
    # Prepare imports based on return type
    $typeToImports = $formattedReturnType -split ' ' | Where-Object { $_ -match '^[A-Z]' }
    $typeToImports = ($typeToImports -replace ':\s*\w+', '' -replace '<[^>]*>', '' -replace '\[\]', '' -replace '\{\}', '').Trim()
    $importList = @()
    $imports = ""
    foreach ($type in $typeToImports ) {
        if ([char]::IsUpper($type[0]) -and $type -notmatch 'Date') {
            $typeKebab = ConvertTo-KebabCase $type
            $importList += "import { $type } from '../../../../domain/entities/$typeKebab.entity';`r`n"
        }
    }
    $imports = [string]::Join("`r`n", $importList)
    
    # Create the directory for thunks if it doesn't exist
    $thunkDir = "$(ConvertTo-KebabCase $EntityName).thunks"
    $entityNameCamelCase = (ConvertTo-camelCase $entityName)

    $successedExtraReducer = ""
    $elt = ($entityNameCamelCase.Substring(0))
    if ($thunkName -match "update") { 
        $successedExtraReducer = @"
.addCase($($thunkName).fulfilled, (state: any, action: PayloadAction<$formattedReturnType>) => {
            state.loading = false;
            state.success = true;
            const index = state.$($entityNameCamelCase)s.findIndex(($($elt): $($entityName)) => $($elt).id === action.payload.id);
            if (index !== -1) {
                state.$($entityNameCamelCase)s[index] = action.payload;
            }
        })
"@
    } elseif ($thunkName -match "delete") {
        $successedExtraReducer = @"
.addCase($($thunkName).fulfilled, (state: any, action: PayloadAction<number>) => {
            state.loading = false;
            state.success = true;
            state.$($entityNameCamelCase)s = state.$($entityNameCamelCase)s.filter(($($elt): $($entityName)) => $elt.id !==  action.payload);
        })
"@
    } else {
        $successedExtraReducer = @"
.addCase($($thunkName).fulfilled, (state: any, action: PayloadAction<$formattedReturnType>) => {
            state.loading = false;
            state.success = true;
            state.$($entityNameCamelCase)s.push(action.payload);
        })
"@
    }
    return @"
import { PayloadAction } from '@reduxjs/toolkit';
import { $thunkName } from '../../thunks/$thunkDir/$(ConvertTo-KebabCase $useCaseName).thunk';

import { $entityName } from '../../../../domain/entities/$(ConvertTo-KebabCase $entityName).entity';

/**
 * $($thunkName)ExtraReducers
 * 
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * '$($thunkName)'. It defines the behavior of the Redux slice in response to three different cases:
 * 
 * 1. **Pending**: This case is triggered when the '$($thunkName)' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 * 
 * 2. **Fulfilled**: This case occurs when the '$($thunkName)' thunk successfully resolves. It receives an action
 *    containing an array of '$($entityName)' objects as its payload. The 'loading' flag is set to 'false', 
 * 
 * 3. **Rejected**: This case is triggered when the '$($thunkName)' thunk fails. The 'loading' flag is set to 'false', 
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 * 
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the '$($thunkName)' thunk.
 * 
 * @thunk $($thunkName) - An asynchronous thunk.
 * 
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.$($entityNameCamelCase)s - An array that stores $($entityName) fetched by the fulfilled case.
 */
export const $($thunkName)ExtraReducers = (builder: any) => {
    builder
        .addCase($($thunkName).pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        $successedExtraReducer
        .addCase($($thunkName).rejected, (state: any, action: PayloadAction<string | undefined>) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload || 'Error while executing $thunkName in extra-reducer state';
        });
};
"@
}

# Function to create a use-case file with the specified content
function Create-ThunkFile {
    param (
        [string]$fileName,
        [string]$content
    )
    Set-Content -Path $fileName -Value $content
}

try {
    # Read the content of the use-case file
    $useCaseContent = Get-UseCaseContent -path $UseCasePth
    Write-Host "UseCase Content Read Successfully."

    # Extract the use-case name from the content
    $useCaseName = Get-UseCaseName -content $useCaseContent
    Write-Host "UseCase Name Extracted: $useCaseName"

    # Create the directory for thunks if it doesn't exist
    $extraReductersDir = "$(ConvertTo-KebabCase $EntityName).extra-reducers"
    Write-Host "Thunk Directory: $extraReductersDir"
    if (-not (Test-Path $extraReductersDir)) {
        New-Item -Path $extraReductersDir -ItemType Directory
        Write-Host "Created Directory: $extraReductersDir"
    }

    # Extract method details from the use-case content
    $methodMatches = Get-MethodDetails -content $useCaseContent
    Write-Host "Method Matches Found: $($methodMatches.Count)"

    foreach ($methodMatch in $methodMatches) {
        $methodName = $methodMatch.Groups[1].Value
        $parameters = $methodMatch.Groups[2].Value.Trim()
        $returnType = $methodMatch.Groups[3].Value -replace 'Promise<Promise<(.+?)>>', 'Promise<$1>'

        # Define the name and content of the thunk file
        $fileName = "$extraReductersDir\$(ConvertTo-KebabCase $useCaseName).extra-reducers.ts"
        Write-Host "Creating File: $fileName"

        # Generate and create the thunk file with the content
        $fileContent = Generate-FileContent -useCaseName $useCaseName -entityName $entityName -parameters $parameters -returnType $returnType
        Create-ThunkFile -fileName $fileName -content $fileContent
        Write-Host "File Created Successfully."
    }
}
catch {
   Write-Host "Error: $_"
}





