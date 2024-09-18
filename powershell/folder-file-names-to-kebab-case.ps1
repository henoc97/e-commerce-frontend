# Function to convert a string to kebab-case
function ConvertTo-KebabCase {
    param (
        [string]$Name  # Input string to be converted
    )

    # Return null if the input is null
    if ($Name -eq $null) {
        return $null
    }

    $parts = @()  # Initialize an array to hold parts of the kebab-case string
    $part = ""    # Initialize a string to build each part of the kebab-case

    # Iterate over each character in the input string
    for ($i = 0; $i -lt $Name.Length; $i++) {
        # If the character is an uppercase letter and there is an existing part
        if ([char]::IsUpper($Name[$i]) -and $part.Length -gt 0) {
            $parts += $part.ToLower()  # Convert the current part to lowercase and add to parts array
            $part = ""  # Reset part to build the next section
        } 

        $part += $Name[$i]  # Append the current character to part
    }

    # Add the last part to the array if it has any length
    if ($part.Length) {
        $parts += $part.ToLower();
    }

    # Join all parts with a hyphen and return the kebab-case string
    [string]::Join("-", $parts);
}

# Function to rename files and folders to kebab-case
function Rename-FilesAndFoldersToKebabCase {
    param (
        [string]$directoryPath  # Path to the directory where files and folders will be renamed
    )

    # Check if the specified directory exists
    if (-not (Test-Path -Path $directoryPath)) {
        Write-Host "The specified directory does not exist."
        return
    }

    # Rename files to kebab-case
    Get-ChildItem -Path $directoryPath -Recurse -File | ForEach-Object {
        $originalFileName = $_.Name  # Get the original file name
        $fileBaseName = $_.BaseName  # Extract the base name of the file (without extension)
        $fileExtension = $_.Extension  # Extract the file extension
        $newFileBaseName = ConvertTo-KebabCase -Name $fileBaseName  # Convert the base name to kebab-case
        $newFileName = $newFileBaseName + $fileExtension  # Append the extension to the new file name
        $newFilePath = Join-Path $_.DirectoryName $newFileName  # Create the full path for the new file name

        # Rename the file if the new name is different from the original
        if ($originalFileName -ne $newFileName) {
            Rename-Item -Path $_.FullName -NewName $newFilePath
            Write-Host "File renamed: $originalFileName -> $newFileName"
        }
    }

    # Rename folders to kebab-case
    Get-ChildItem -Path $directoryPath -Recurse -Directory | ForEach-Object {
        $originalFolderName = $_.Name  # Get the original folder name
        $newFolderName = ConvertTo-KebabCase -Name $_.Name  # Convert the folder name to kebab-case
        $newFolderPath = Join-Path $_.Parent.FullName $newFolderName  # Create the full path for the new folder name

        # Rename the folder if the new name is different from the original
        if ($originalFolderName -ne $newFolderName) {
            Rename-Item -Path $_.FullName -NewName $newFolderPath
            Write-Host "Folder renamed: $originalFolderName -> $newFolderName"
        }
    }
}

# Example usage: specify the directory to process
$directoryPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\app\src\application\use-cases"
Rename-FilesAndFoldersToKebabCase -directoryPath $directoryPath
