import { RootState } from '../store/store';

export const selectOrderItems = (state: RootState) =>
    state.orderItem.orderItems;
export const selectOrderItemLoading = (state: RootState) =>
    state.orderItem.loading;
export const selectOrderItemSuccess = (state: RootState) =>
    state.orderItem.success;
export const selectOrderItemError = (state: RootState) => state.orderItem.error;
