import { createSlice } from '@reduxjs/toolkit';

import { ProductImage } from '../../../domain/entities/product-image.entity';

import { countImagesByProductIdProductImageExtraReducers } from '../extra-reducers/product-image.extra-reducers/count-images-by-product-id-product-image.extra-reducers';
import { createProductImageExtraReducers } from '../extra-reducers/product-image.extra-reducers/create-product-image.extra-reducers';
import { deleteByProductIdProductImageExtraReducers } from '../extra-reducers/product-image.extra-reducers/delete-by-product-id-product-image.extra-reducers';
import { deleteProductImageExtraReducers } from '../extra-reducers/product-image.extra-reducers/delete-product-image.extra-reducers';
import { existsProductImageExtraReducers } from '../extra-reducers/product-image.extra-reducers/exists-product-image.extra-reducers';
import { getByIdProductImageExtraReducers } from '../extra-reducers/product-image.extra-reducers/get-by-id-product-image.extra-reducers';
import { getByProductIdProductImageExtraReducers } from '../extra-reducers/product-image.extra-reducers/get-by-product-id-product-image.extra-reducers';
import { getPrimaryImageProductImageExtraReducers } from '../extra-reducers/product-image.extra-reducers/get-primary-image-product-image.extra-reducers';
import { updateProductImageExtraReducers } from '../extra-reducers/product-image.extra-reducers/update-product-image.extra-reducers';
import { updateUrlProductImageExtraReducers } from '../extra-reducers/product-image.extra-reducers/update-url-product-image.extra-reducers';

interface ProductImageState {
    productImages: ProductImage[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: ProductImageState = {
    productImages: [],
    loading: false,
    success: false,
    error: null,
};

const productImageSlice = createSlice({
    name: 'productImage',
    initialState,
    reducers: {
        resetproductImageState: (state) => {
            (state.productImages = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        countImagesByProductIdProductImageExtraReducers(builder);
        createProductImageExtraReducers(builder);
        deleteByProductIdProductImageExtraReducers(builder);
        deleteProductImageExtraReducers(builder);
        existsProductImageExtraReducers(builder);
        getByIdProductImageExtraReducers(builder);
        getByProductIdProductImageExtraReducers(builder);
        getPrimaryImageProductImageExtraReducers(builder);
        updateProductImageExtraReducers(builder);
        updateUrlProductImageExtraReducers(builder);
    },
});

export const { resetproductImageState } = productImageSlice.actions;

export default productImageSlice.reducer;
