import { RootState } from '../store/store';

export const selectPayments = (state: RootState) => state.payment.payments;
export const selectPaymentLoading = (state: RootState) => state.payment.loading;
export const selectPaymentSuccess = (state: RootState) => state.payment.success;
export const selectPaymentError = (state: RootState) => state.payment.error;
