import { RootState } from '../store/store';

export const selectProductImages = (state: RootState) =>
    state.productImage.productImages;
export const selectProductImageLoading = (state: RootState) =>
    state.productImage.loading;
export const selectProductImageSuccess = (state: RootState) =>
    state.productImage.success;
export const selectProductImageError = (state: RootState) =>
    state.productImage.error;
