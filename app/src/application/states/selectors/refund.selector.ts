import { RootState } from '../store/store';

export const selectRefunds = (state: RootState) => state.refund.refunds;
export const selectRefundLoading = (state: RootState) => state.refund.loading;
export const selectRefundSuccess = (state: RootState) => state.refund.success;
export const selectRefundError = (state: RootState) => state.refund.error;
