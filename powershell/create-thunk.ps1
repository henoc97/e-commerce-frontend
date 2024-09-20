param (
    [string]$UseCasePath,     # Path to the use-case file
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
    $formattedParameters = ($parameters -replace ':\s*\w+', '' -replace '<[^>]*>', '' -replace '\[\]', '' -replace '\{\}', '').Trim()
    $asyncParameters = "{ $formattedParameters }"
    if ($formattedParameters -eq "") { $asyncParameters = "_" }
    $formattedReturnType = $returnType -replace '.*<([^>]+)>.*', '$1'
    $entityNameKebab = ConvertTo-KebabCase $entityName
    $useCaseNameKebab = ConvertTo-KebabCase $useCaseName
    
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
    
    # Generate the content for the use-case file
    $useCaseObject = $thunkName + 'UseCase'
    $retrunProcess = $retrunProcess = @"
const response = await $useCaseObject.execute($formattedParameters);
            return response;
"@
    if ($thunkName -match "delete") {
        $formattedReturnType = "number"
        $retrunProcess = @"
const response = await $useCaseObject.execute($formattedParameters);
            return response? $formattedParameters : -1;
"@
    }
    return @"
import { createAsyncThunk } from '@reduxjs/toolkit';
import { container } from 'tsyringe';

import { $useCaseName } from '../../../use-cases/$entityNameKebab.use-cases/$useCaseNameKebab.use-case';
$imports

/**
 * Resolves an instance of the '$useCaseName' use case from the dependency injection container.
 * 
 * This line of code uses a dependency injection container to obtain an instance of the '$useCaseName'
 * class, which is a use case responsible for handling the creation of new orders. The container is
 * typically configured to manage the lifecycle of dependencies and provide instances as needed.
 * 
 * @type {$useCaseName} - The type of the resolved instance, which should match the class or
 * interface that is registered with the dependency injection container.
 * 
 * @param {Container} container - The dependency injection container that holds the registered 
 * services and use cases. The container is responsible for providing the appropriate instance 
 * of '$useCaseName' based on its configuration.
 * 
 * @returns {$useCaseName} - An instance of the '$useCaseName' use case, which can be used to 
 * perform operations related to order creation.
 */
const $($useCaseObject): $($useCaseName) = container.resolve($useCaseName);

/**
 * Creates an asynchronous thunk action for Redux Toolkit using 'createAsyncThunk'.
 * 
 * This thunk is a function that dispatches a series of Redux actions based on the 
 * execution of an asynchronous operation. It handles the asynchronous process, 
 * including success and error scenarios, and updates the state accordingly.
 * 
 * @template $formattedReturnType - The type of the data that the thunk will return on success.
 * @template $parameters - The type of the parameters that will be passed to the thunk.
 * 
 * @param {string} $thunkName - The name of the thunk action, typically in the format of 
 * 'entityName/thunkName', which will be used as the action type prefix.
 * 
 * @param {Function} $useCaseObject.execute - The asynchronous function or use case object 
 * that performs the desired operation. This function should return a promise.
 * 
 * @param {Object} $asyncParameters - The parameters to be passed to the asynchronous 
 * function when it is called.
 * 
 * @param {Object} param1 - An object containing the 'rejectWithValue' function used to handle 
 * errors. It is called with an error message if the asynchronous operation fails.
 * 
 * @returns {Promise<$formattedReturnType>} - A promise that resolves to the data returned 
 * by the asynchronous operation or rejects with a string error message.
 * 
 * @throws {string} - If the asynchronous operation fails, an error message is provided using 
 * 'rejectWithValue'. The default message is 'Error while executing $thunkName' if no specific 
 * error message is provided.
 */
export const $thunkName = createAsyncThunk<$formattedReturnType, { $parameters }, { rejectValue: string }>(
    '$(ConvertTo-camelCase $entityName)/$thunkName',
    async ($asyncParameters, { rejectWithValue }) => {
        try {
            $retrunProcess
        } catch (error: any) {
            return rejectWithValue(error.message || 'Error while executing $thunkName in thunk');
        }
    }
);
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
    $useCaseContent = Get-UseCaseContent -path $UseCasePath
    Write-Host "UseCase Content Read Successfully."

    # Extract the use-case name from the content
    $useCaseName = Get-UseCaseName -content $useCaseContent
    Write-Host "UseCase Name Extracted: $useCaseName"

    # Create the directory for thunks if it doesn't exist
    $thunkDir = "$(ConvertTo-KebabCase $EntityName).thunks"
    Write-Host "Thunk Directory: $thunkDir"
    if (-not (Test-Path $thunkDir)) {
        New-Item -Path $thunkDir -ItemType Directory
        Write-Host "Created Directory: $thunkDir"
    }

    # Extract method details from the use-case content
    $methodMatches = Get-MethodDetails -content $useCaseContent
    Write-Host "Method Matches Found: $($methodMatches.Count)"

    foreach ($methodMatch in $methodMatches) {
        $methodName = $methodMatch.Groups[1].Value
        $parameters = $methodMatch.Groups[2].Value.Trim()
        $returnType = $methodMatch.Groups[3].Value -replace 'Promise<Promise<(.+?)>>', 'Promise<$1>'

        # Define the name and content of the thunk file
        $fileName = "$thunkDir\$(ConvertTo-KebabCase $useCaseName).thunk.ts"
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

"import { useAppDispatch, useAppSelector } from './hooks';
import { addToCart, removeFromCart } from '../features/cart/cartThunks';
import { CartItem } from '../types';

export const useCart = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  const addItemToCart = (item: CartItem) => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = (itemId: number) => {
    dispatch(removeFromCart(itemId));
  };

  return {
    ...cart,
    addItemToCart,
    removeItemFromCart,
  };
};
"