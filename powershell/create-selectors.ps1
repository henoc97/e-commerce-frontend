param (
    [Parameter (Mandatory = $true)]
    [string]$EntityName
)

# Function to convert a PascalCase or camelCase string to kebab-case
function ConvertTo-KebabCase {
    param (
        [string]$Name
    )

    if ($Name -eq $null) {
        return $null
    }

    $parts = @()   # Array to hold parts of the kebab-case string
    $part = ""     # Temporary string to accumulate characters

    # Loop through each character in the input name
    for ($i = 0; $i -lt $Name.Length; $i++) {
        # Check if the current character is uppercase and there is already accumulated text
        if ([char]::IsUpper($Name[$i]) -and $part.Length -gt 0) {
            $parts += $part.ToLower()  # Add the accumulated text as lowercase
            $part = ""                 # Reset the temporary string
        }

        # Append the current character to the temporary string
        $part += $Name[$i]
    }

    # Add the last part to the array if there's any remaining text
    if ($part.Length) {
        $parts += $part.ToLower()
    }

    # Join the parts with hyphens to create kebab-case
    [string]::Join("-", $parts)
}

# Function to convert a string to camelCase
function ConvertTo-camelCase {
    param (
        [string]$EntityName
    )
    # Convert the first character to lowercase and append the rest of the string
    $result = ($EntityName.Substring(0,1).ToLower()) + ($EntityName.Substring(1))
    return $result
}

# Function to create the content of the selector file
function Create-SelectorContent {
    param (
        [string]$EntityName
    )
    # Convert the entity name to camelCase for use in the selector functions
    $EntityNameInCamelCase = (ConvertTo-camelCase $EntityName)
    
    # Generate the TypeScript content for the Redux selector file
    return @"
import { RootState } from '../store/store';

export const select${EntityName}s = (state: RootState) => state.${EntityNameInCamelCase}.${EntityNameInCamelCase}s;
export const select${EntityName}Loading = (state: RootState) => state.${EntityNameInCamelCase}.loading;
export const select${EntityName}Success = (state: RootState) => state.${EntityNameInCamelCase}.success;
export const select${EntityName}Error = (state: RootState) => state.${EntityNameInCamelCase}.error;
"@
}

# Function to create the selector file with the specified name and content
function Create-SelectorFile {
    param (
        [string]$fileName,
        [string]$content
    )
    Set-Content -Path $fileName -Value $content
}

try {
    # Generate the file name in kebab-case with the .selector.ts extension
    $fileNameKebabCase = "./$(ConvertTo-KebabCase $EntityName).selector.ts"

    # Generate the content for the selector file
    $fileContent = Create-SelectorContent -EntityName $EntityName

    # Create the selector file with the specified name and content
    Create-SelectorFile -fileName $fileNameKebabCase -content $fileContent

    Write-Host "Redux selector file created successfully."
}
catch {
    # Output an error message if something goes wrong
    Write-Host "Error: $_"
}
