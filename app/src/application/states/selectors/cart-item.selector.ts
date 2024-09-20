import { RootState } from '../store/store';

export const selectCartItems = (state: RootState) => state.cartItem.cartItems;
export const selectCartItemLoading = (state: RootState) =>
    state.cartItem.loading;
export const selectCartItemSuccess = (state: RootState) =>
    state.cartItem.success;
export const selectCartItemError = (state: RootState) => state.cartItem.error;
