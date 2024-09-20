import { RootState } from '../store/store';

export const selectShops = (state: RootState) => state.shop.shops;
export const selectShopLoading = (state: RootState) => state.shop.loading;
export const selectShopSuccess = (state: RootState) => state.shop.success;
export const selectShopError = (state: RootState) => state.shop.error;
