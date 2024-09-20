import { createSlice } from '@reduxjs/toolkit';

import { Product } from '../../../domain/entities/product.entity';

import { addCartItemProductExtraReducers } from '../extra-reducers/product.extra-reducers/add-cart-item-product.extra-reducers';
import { addImageProductExtraReducers } from '../extra-reducers/product.extra-reducers/add-image-product.extra-reducers';
import { addPromotionProductExtraReducers } from '../extra-reducers/product.extra-reducers/add-promotion-product.extra-reducers';
import { addReviewProductExtraReducers } from '../extra-reducers/product.extra-reducers/add-review-product.extra-reducers';
import { addVariantProductExtraReducers } from '../extra-reducers/product.extra-reducers/add-variant-product.extra-reducers';
import { createProductExtraReducers } from '../extra-reducers/product.extra-reducers/create-product.extra-reducers';
import { deleteProductExtraReducers } from '../extra-reducers/product.extra-reducers/delete-product.extra-reducers';
import { findByCategoryProductExtraReducers } from '../extra-reducers/product.extra-reducers/find-by-category-product.extra-reducers';
import { findByNameProductExtraReducers } from '../extra-reducers/product.extra-reducers/find-by-name-product.extra-reducers';
import { findByPriceRangeProductExtraReducers } from '../extra-reducers/product.extra-reducers/find-by-price-range-product.extra-reducers';
import { getByIdProductExtraReducers } from '../extra-reducers/product.extra-reducers/get-by-id-product.extra-reducers';
import { getFeaturedProductsProductExtraReducers } from '../extra-reducers/product.extra-reducers/get-featured-products-product.extra-reducers';
import { getReviewsProductExtraReducers } from '../extra-reducers/product.extra-reducers/get-reviews-product.extra-reducers';
import { removeImageProductExtraReducers } from '../extra-reducers/product.extra-reducers/remove-image-product.extra-reducers';
import { removePromotionProductExtraReducers } from '../extra-reducers/product.extra-reducers/remove-promotion-product.extra-reducers';
import { removeVariantProductExtraReducers } from '../extra-reducers/product.extra-reducers/remove-variant-product.extra-reducers';
import { updateProductExtraReducers } from '../extra-reducers/product.extra-reducers/update-product.extra-reducers';
import { updateStockProductExtraReducers } from '../extra-reducers/product.extra-reducers/update-stock-product.extra-reducers';

interface ProductState {
    products: Product[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    success: false,
    error: null,
};

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        resetproductState: (state) => {
            (state.products = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        addCartItemProductExtraReducers(builder);
        addImageProductExtraReducers(builder);
        addPromotionProductExtraReducers(builder);
        addReviewProductExtraReducers(builder);
        addVariantProductExtraReducers(builder);
        createProductExtraReducers(builder);
        deleteProductExtraReducers(builder);
        findByCategoryProductExtraReducers(builder);
        findByNameProductExtraReducers(builder);
        findByPriceRangeProductExtraReducers(builder);
        getByIdProductExtraReducers(builder);
        getFeaturedProductsProductExtraReducers(builder);
        getReviewsProductExtraReducers(builder);
        removeImageProductExtraReducers(builder);
        removePromotionProductExtraReducers(builder);
        removeVariantProductExtraReducers(builder);
        updateProductExtraReducers(builder);
        updateStockProductExtraReducers(builder);
    },
});

export const { resetproductState } = productSlice.actions;

export default productSlice.reducer;
