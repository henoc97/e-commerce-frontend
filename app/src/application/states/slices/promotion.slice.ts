import { createSlice } from '@reduxjs/toolkit';

import { Promotion } from '../../../domain/entities/promotion.entity';

import { applyToProductPromotionExtraReducers } from '../extra-reducers/promotion.extra-reducers/apply-to-product-promotion.extra-reducers';
import { combinePromotionExtraReducers } from '../extra-reducers/promotion.extra-reducers/combine-promotion.extra-reducers';
import { createPromotionExtraReducers } from '../extra-reducers/promotion.extra-reducers/create-promotion.extra-reducers';
import { getActiveBetweenPromotionExtraReducers } from '../extra-reducers/promotion.extra-reducers/get-active-between-promotion.extra-reducers';
import { getActivePromotionExtraReducers } from '../extra-reducers/promotion.extra-reducers/get-active-promotion.extra-reducers';
import { getBestForProductPromotionExtraReducers } from '../extra-reducers/promotion.extra-reducers/get-best-for-product-promotion.extra-reducers';
import { getByIdPromotionExtraReducers } from '../extra-reducers/promotion.extra-reducers/get-by-id-promotion.extra-reducers';
import { getByProductPromotionExtraReducers } from '../extra-reducers/promotion.extra-reducers/get-by-product-promotion.extra-reducers';
import { modifyPromotionExtraReducers } from '../extra-reducers/promotion.extra-reducers/modify-promotion.extra-reducers';
import { removePromotionExtraReducers } from '../extra-reducers/promotion.extra-reducers/remove-promotion.extra-reducers';

interface PromotionState {
    promotions: Promotion[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: PromotionState = {
    promotions: [],
    loading: false,
    success: false,
    error: null,
};

const promotionSlice = createSlice({
    name: 'promotion',
    initialState,
    reducers: {
        resetpromotionState: (state) => {
            (state.promotions = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        applyToProductPromotionExtraReducers(builder);
        combinePromotionExtraReducers(builder);
        createPromotionExtraReducers(builder);
        getActiveBetweenPromotionExtraReducers(builder);
        getActivePromotionExtraReducers(builder);
        getBestForProductPromotionExtraReducers(builder);
        getByIdPromotionExtraReducers(builder);
        getByProductPromotionExtraReducers(builder);
        modifyPromotionExtraReducers(builder);
        removePromotionExtraReducers(builder);
    },
});

export const { resetpromotionState } = promotionSlice.actions;

export default promotionSlice.reducer;
