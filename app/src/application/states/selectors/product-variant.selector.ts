import { RootState } from '../store/store';

export const selectProductVariants = (state: RootState) =>
    state.productVariant.productVariants;
export const selectProductVariantLoading = (state: RootState) =>
    state.productVariant.loading;
export const selectProductVariantSuccess = (state: RootState) =>
    state.productVariant.success;
export const selectProductVariantError = (state: RootState) =>
    state.productVariant.error;
