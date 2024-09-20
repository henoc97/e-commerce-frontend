import { createSlice } from '@reduxjs/toolkit';

import { Shop } from '../../../domain/entities/shop.entity';

import { addCategoryShopExtraReducers } from '../extra-reducers/shop.extra-reducers/add-category-shop.extra-reducers';
import { addOrderShopExtraReducers } from '../extra-reducers/shop.extra-reducers/add-order-shop.extra-reducers';
import { addProductShopExtraReducers } from '../extra-reducers/shop.extra-reducers/add-product-shop.extra-reducers';
import { associateMarketplaceShopExtraReducers } from '../extra-reducers/shop.extra-reducers/associate-marketplace-shop.extra-reducers';
import { createShopExtraReducers } from '../extra-reducers/shop.extra-reducers/create-shop.extra-reducers';
import { deleteShopExtraReducers } from '../extra-reducers/shop.extra-reducers/delete-shop.extra-reducers';
import { getByIdShopExtraReducers } from '../extra-reducers/shop.extra-reducers/get-by-id-shop.extra-reducers';
import { getMarketplaceShopExtraReducers } from '../extra-reducers/shop.extra-reducers/get-marketplace-shop.extra-reducers';
import { getMostRecentShopExtraReducers } from '../extra-reducers/shop.extra-reducers/get-most-recent-shop.extra-reducers';
import { getOrderReportShopExtraReducers } from '../extra-reducers/shop.extra-reducers/get-order-report-shop.extra-reducers';
import { getTopProductShopExtraReducers } from '../extra-reducers/shop.extra-reducers/get-top-product-shop.extra-reducers';
import { getTotalSalesShopExtraReducers } from '../extra-reducers/shop.extra-reducers/get-total-sales-shop.extra-reducers';
import { listByVendorShopExtraReducers } from '../extra-reducers/shop.extra-reducers/list-by-vendor-shop.extra-reducers';
import { listCategoriesShopExtraReducers } from '../extra-reducers/shop.extra-reducers/list-categories-shop.extra-reducers';
import { listOrdersShopExtraReducers } from '../extra-reducers/shop.extra-reducers/list-orders-shop.extra-reducers';
import { listProductsShopExtraReducers } from '../extra-reducers/shop.extra-reducers/list-products-shop.extra-reducers';
import { removeCategoryShopExtraReducers } from '../extra-reducers/shop.extra-reducers/remove-category-shop.extra-reducers';
import { removeProductShopExtraReducers } from '../extra-reducers/shop.extra-reducers/remove-product-shop.extra-reducers';
import { searchByNameShopExtraReducers } from '../extra-reducers/shop.extra-reducers/search-by-name-shop.extra-reducers';
import { updateShopExtraReducers } from '../extra-reducers/shop.extra-reducers/update-shop.extra-reducers';

interface ShopState {
    shops: Shop[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: ShopState = {
    shops: [],
    loading: false,
    success: false,
    error: null,
};

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        resetshopState: (state) => {
            (state.shops = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        addCategoryShopExtraReducers(builder);
        addOrderShopExtraReducers(builder);
        addProductShopExtraReducers(builder);
        associateMarketplaceShopExtraReducers(builder);
        createShopExtraReducers(builder);
        deleteShopExtraReducers(builder);
        getByIdShopExtraReducers(builder);
        getMarketplaceShopExtraReducers(builder);
        getMostRecentShopExtraReducers(builder);
        getOrderReportShopExtraReducers(builder);
        getTopProductShopExtraReducers(builder);
        getTotalSalesShopExtraReducers(builder);
        listByVendorShopExtraReducers(builder);
        listCategoriesShopExtraReducers(builder);
        listOrdersShopExtraReducers(builder);
        listProductsShopExtraReducers(builder);
        removeCategoryShopExtraReducers(builder);
        removeProductShopExtraReducers(builder);
        searchByNameShopExtraReducers(builder);
        updateShopExtraReducers(builder);
    },
});

export const { resetshopState } = shopSlice.actions;

export default shopSlice.reducer;
