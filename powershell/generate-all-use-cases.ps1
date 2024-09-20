# Path to the services directory
$servicesPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\app\src\application\services"

# Path to the PowerShell script `create-use-cases.ps1`
$scriptPath = "C:\Users\amavi\StudioProjects\ecommerce\e-commerce-frontend\powershell\create-use-cases.ps1"

# Get all *.service.ts files in the services directory
$serviceFiles = Get-ChildItem -Path $servicesPath -Filter "*.service.ts"

# Iterate through each service file and execute the create-services.ps1 script
foreach ($file in $serviceFiles) {

    # Build the relative path of the service interface
    $servicePath = "../../application/services/$($file.Name)"

    # Execute the create-services.ps1 script for each service
    Write-Host "Executing for $serviceName with interface $serviceInterfacePath"

    & $scriptPath -serviceFilePath $servicePath
}


"import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice'; // Le reducer des produits

const store = configureStore({
  reducer: {
    products: productReducer, // Ajoute le reducer des produits
  },
});

// Types pour dispatch et state
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
"