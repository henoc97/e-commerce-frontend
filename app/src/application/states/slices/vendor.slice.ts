import { createSlice } from '@reduxjs/toolkit';

import { Vendor } from '../../../domain/entities/vendor.entity';

import { addProductVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/add-product-vendor.extra-reducers';
import { createVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/create-vendor.extra-reducers';
import { deleteVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/delete-vendor.extra-reducers';
import { findByIdVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/find-by-id-vendor.extra-reducers';
import { findByStoreNameVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/find-by-store-name-vendor.extra-reducers';
import { findBySubscriptionVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/find-by-subscription-vendor.extra-reducers';
import { findByUserVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/find-by-user-vendor.extra-reducers';
import { getLatestVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/get-latest-vendor.extra-reducers';
import { getProductsVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/get-products-vendor.extra-reducers';
import { getShopVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/get-shop-vendor.extra-reducers';
import { getSubscriptionVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/get-subscription-vendor.extra-reducers';
import { getallVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/getall-vendor.extra-reducers';
import { removeProductVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/remove-product-vendor.extra-reducers';
import { setShopVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/set-shop-vendor.extra-reducers';
import { updateVendorExtraReducers } from '../extra-reducers/vendor.extra-reducers/update-vendor.extra-reducers';

interface VendorState {
    vendors: Vendor[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: VendorState = {
    vendors: [],
    loading: false,
    success: false,
    error: null,
};

const vendorSlice = createSlice({
    name: 'vendor',
    initialState,
    reducers: {
        resetvendorState: (state) => {
            (state.vendors = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        addProductVendorExtraReducers(builder);
        createVendorExtraReducers(builder);
        deleteVendorExtraReducers(builder);
        findByIdVendorExtraReducers(builder);
        findByStoreNameVendorExtraReducers(builder);
        findBySubscriptionVendorExtraReducers(builder);
        findByUserVendorExtraReducers(builder);
        getLatestVendorExtraReducers(builder);
        getProductsVendorExtraReducers(builder);
        getShopVendorExtraReducers(builder);
        getSubscriptionVendorExtraReducers(builder);
        getallVendorExtraReducers(builder);
        removeProductVendorExtraReducers(builder);
        setShopVendorExtraReducers(builder);
        updateVendorExtraReducers(builder);
    },
});

export const { resetvendorState } = vendorSlice.actions;

export default vendorSlice.reducer;
