# Script PowerShell pour modifier les fichiers .ts
# Ajoute les lignes d'importation et le décorateur @injectable

# Fonction pour modifier un fichier TypeScript
function Modify-TypescriptFile {
    param (
        [string]$filePath
    )

    # Lire le contenu du fichier
    $content = Get-Content -Path $filePath -Raw

    # Vérifier si le fichier contient "export class"
    if ($content -match 'export\s+class\s+') {
        # Déterminer si l'importation de 'tsyringe' est déjà présente
        $importTsyringe = "import { injectable } from 'tsyringe';"
        $hasTsyringeImport = $content -match [regex]::Escape($importTsyringe)

        # Ajouter les lignes d'importation au début du contenu si elles ne sont pas présentes
        if (-not $hasTsyringeImport) {
            # Créer le nouveau contenu avec les importations nécessaires
            $importStatements = "$importTsyringe`n"
            
            # Ajouter les importations existantes au nouveau contenu
            $contentWithImports = $content -replace '^((import\s+.*;)\s*)+', "$importStatements`$1"
            
            # Ajouter le décorateur @injectable() juste au-dessus de 'export class'
            $modifiedContent = $contentWithImports -replace '(export\s+class)', "@injectable()`n$1"
            
            # Écrire le contenu modifié dans le fichier
            Set-Content -Path $filePath -Value $modifiedContent -Force
            Write-Output "Modifié: $filePath"
        }
    }
}

# Parcourir les fichiers .ts dans le répertoire courant et les sous-dossiers
Get-ChildItem -Path . -Recurse -Filter *.ts | ForEach-Object {
    Modify-TypescriptFile -filePath $_.FullName
}
