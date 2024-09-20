import { createSlice } from '@reduxjs/toolkit';

import { Marketplace } from '../../../domain/entities/marketplace.entity';

import { addShopMarketplaceExtraReducers } from '../extra-reducers/marketplace.extra-reducers/add-shop-marketplace.extra-reducers';
import { createMarketplaceExtraReducers } from '../extra-reducers/marketplace.extra-reducers/create-marketplace.extra-reducers';
import { deleteMarketplaceExtraReducers } from '../extra-reducers/marketplace.extra-reducers/delete-marketplace.extra-reducers';
import { getByIdMarketplaceExtraReducers } from '../extra-reducers/marketplace.extra-reducers/get-by-id-marketplace.extra-reducers';
import { getMarketplaceByShopIdMarketplaceExtraReducers } from '../extra-reducers/marketplace.extra-reducers/get-marketplace-by-shop-id-marketplace.extra-reducers';
import { getShopsMarketplaceExtraReducers } from '../extra-reducers/marketplace.extra-reducers/get-shops-marketplace.extra-reducers';
import { listMarketplaceExtraReducers } from '../extra-reducers/marketplace.extra-reducers/list-marketplace.extra-reducers';
import { removeShopMarketplaceExtraReducers } from '../extra-reducers/marketplace.extra-reducers/remove-shop-marketplace.extra-reducers';
import { updateMarketplaceExtraReducers } from '../extra-reducers/marketplace.extra-reducers/update-marketplace.extra-reducers';

interface MarketplaceState {
    marketplaces: Marketplace[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: MarketplaceState = {
    marketplaces: [],
    loading: false,
    success: false,
    error: null,
};

const marketplaceSlice = createSlice({
    name: 'marketplace',
    initialState,
    reducers: {
        resetmarketplaceState: (state) => {
            (state.marketplaces = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        addShopMarketplaceExtraReducers(builder);
        createMarketplaceExtraReducers(builder);
        deleteMarketplaceExtraReducers(builder);
        getByIdMarketplaceExtraReducers(builder);
        getMarketplaceByShopIdMarketplaceExtraReducers(builder);
        getShopsMarketplaceExtraReducers(builder);
        listMarketplaceExtraReducers(builder);
        removeShopMarketplaceExtraReducers(builder);
        updateMarketplaceExtraReducers(builder);
    },
});

export const { resetmarketplaceState } = marketplaceSlice.actions;

export default marketplaceSlice.reducer;
