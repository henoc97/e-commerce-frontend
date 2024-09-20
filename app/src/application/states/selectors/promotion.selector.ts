import { RootState } from '../store/store';

export const selectPromotions = (state: RootState) =>
    state.promotion.promotions;
export const selectPromotionLoading = (state: RootState) =>
    state.promotion.loading;
export const selectPromotionSuccess = (state: RootState) =>
    state.promotion.success;
export const selectPromotionError = (state: RootState) => state.promotion.error;
