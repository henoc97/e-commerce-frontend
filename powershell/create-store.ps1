# Path to the services directory
$servicesPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\app\src\application\services"

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

function ConvertTo-PascalCase([Parameter(ValueFromPipeline)] [string] $text) {
    ($text -split '-' | ForEach-Object {
        "$($_.ToCharArray()[0].ToString().ToUpper())$($_.Substring(1))" }) -join ''
}

# Function to convert a string to camelCase
function ConvertTo-camelCase {
    param (
        [string]$name
    )
    # Convert the first character to lowercase and append the rest of the string
    $result = ($name.Substring(0,1).ToLower()) + ($name.Substring(1))
    return $result
}

# Function to create the content of the store file
function Create-StoreContent {
    param (
        [string]$imports,
        [string]$reducers
    )
    # Convert the entity name to camelCase for use in the store functions
    $EntityNameInCamelCase = (ConvertTo-camelCase $EntityName)
    
    # Generate the TypeScript content for the Redux store file
    return @"
import { configureStore } from '@reduxjs/toolkit';
$imports


const store = configureStore({
    reducer: {
      $reducers
    },
  });


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
"@
}

# Function to create the store file with the specified name and content
function Create-StoreFile {
    param (
        [string]$fileName,
        [string]$content
    )
    Set-Content -Path $fileName -Value $content
}

try {

    # Get all *.service.ts files in the services directory
    $serviceFiles = Get-ChildItem -Path $servicesPath -Filter "*.service.ts"
    
    $importList = @()
    $reducerList = @()
    $imports = ""
    $reducers = ""
    foreach ($file in $serviceFiles) {
        $withoutExtension = $file.Name -split '\.' | Select-Object -First 1
        $entityName = ConvertTo-camelCase $(ConvertTo-PascalCase $withoutExtension)
        $importList += "import $($entityName)Reducer from '../slices/$(ConvertTo-KebabCase $($entityName)).slice'"
        $reducerList += "$($entityName): $($entityName)Reducer"
    }
    $imports = [string]::Join("`r`n", $importList)
    $reducers = [string]::Join(",`r`n      ", $reducerList)

    $fileContent = Create-StoreContent -imports $imports -reducers $reducers

    # Create the store file with the specified name and content
    Create-StoreFile -fileName "store.ts" -content $fileContent

    Write-Host "Redux store file created successfully."
}
catch {
    # Output an error message if something goes wrong
    Write-Host "Error: $_"
}



