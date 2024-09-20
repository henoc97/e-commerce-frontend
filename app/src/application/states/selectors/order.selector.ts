import { RootState } from '../store/store';

export const selectOrders = (state: RootState) => state.order.orders;
export const selectOrderLoading = (state: RootState) => state.order.loading;
export const selectOrderSuccess = (state: RootState) => state.order.success;
export const selectOrderError = (state: RootState) => state.order.error;
