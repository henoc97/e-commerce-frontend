import { RootState } from '../store/store';

export const selectCarts = (state: RootState) => state.cart.carts;
export const selectCartLoading = (state: RootState) => state.cart.loading;
export const selectCartSuccess = (state: RootState) => state.cart.success;
export const selectCartError = (state: RootState) => state.cart.error;
