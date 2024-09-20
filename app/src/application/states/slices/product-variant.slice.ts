import { createSlice } from '@reduxjs/toolkit';

import { ProductVariant } from '../../../domain/entities/product-variant.entity';

import { createProductVariantExtraReducers } from '../extra-reducers/product-variant.extra-reducers/create-product-variant.extra-reducers';
import { deleteByProductIdProductVariantExtraReducers } from '../extra-reducers/product-variant.extra-reducers/delete-by-product-id-product-variant.extra-reducers';
import { deleteProductVariantExtraReducers } from '../extra-reducers/product-variant.extra-reducers/delete-product-variant.extra-reducers';
import { existsProductVariantExtraReducers } from '../extra-reducers/product-variant.extra-reducers/exists-product-variant.extra-reducers';
import { getByIdProductVariantExtraReducers } from '../extra-reducers/product-variant.extra-reducers/get-by-id-product-variant.extra-reducers';
import { getByNameProductVariantExtraReducers } from '../extra-reducers/product-variant.extra-reducers/get-by-name-product-variant.extra-reducers';
import { getByProductIdProductVariantExtraReducers } from '../extra-reducers/product-variant.extra-reducers/get-by-product-id-product-variant.extra-reducers';
import { getMostPopularVariantProductVariantExtraReducers } from '../extra-reducers/product-variant.extra-reducers/get-most-popular-variant-product-variant.extra-reducers';
import { updateProductVariantExtraReducers } from '../extra-reducers/product-variant.extra-reducers/update-product-variant.extra-reducers';

interface ProductVariantState {
    productVariants: ProductVariant[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: ProductVariantState = {
    productVariants: [],
    loading: false,
    success: false,
    error: null,
};

const productVariantSlice = createSlice({
    name: 'productVariant',
    initialState,
    reducers: {
        resetproductVariantState: (state) => {
            (state.productVariants = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        createProductVariantExtraReducers(builder);
        deleteByProductIdProductVariantExtraReducers(builder);
        deleteProductVariantExtraReducers(builder);
        existsProductVariantExtraReducers(builder);
        getByIdProductVariantExtraReducers(builder);
        getByNameProductVariantExtraReducers(builder);
        getByProductIdProductVariantExtraReducers(builder);
        getMostPopularVariantProductVariantExtraReducers(builder);
        updateProductVariantExtraReducers(builder);
    },
});

export const { resetproductVariantState } = productVariantSlice.actions;

export default productVariantSlice.reducer;
