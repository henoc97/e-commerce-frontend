import { RootState } from '../store/store';

export const selectProducts = (state: RootState) => state.product.products;
export const selectProductLoading = (state: RootState) => state.product.loading;
export const selectProductSuccess = (state: RootState) => state.product.success;
export const selectProductError = (state: RootState) => state.product.error;
