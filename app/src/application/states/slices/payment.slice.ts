import { createSlice } from '@reduxjs/toolkit';

import { Payment } from '../../../domain/entities/payment.entity';

import { createPaymentExtraReducers } from '../extra-reducers/payment.extra-reducers/create-payment.extra-reducers';
import { deletePaymentExtraReducers } from '../extra-reducers/payment.extra-reducers/delete-payment.extra-reducers';
import { getByDateRangePaymentExtraReducers } from '../extra-reducers/payment.extra-reducers/get-by-date-range-payment.extra-reducers';
import { getByIdPaymentExtraReducers } from '../extra-reducers/payment.extra-reducers/get-by-id-payment.extra-reducers';
import { getByMethodPaymentExtraReducers } from '../extra-reducers/payment.extra-reducers/get-by-method-payment.extra-reducers';
import { getByOrderIdPaymentExtraReducers } from '../extra-reducers/payment.extra-reducers/get-by-order-id-payment.extra-reducers';
import { getByStatusPaymentExtraReducers } from '../extra-reducers/payment.extra-reducers/get-by-status-payment.extra-reducers';
import { getMostRecentPaymentByOrderIdPaymentExtraReducers } from '../extra-reducers/payment.extra-reducers/get-most-recent-payment-by-order-id-payment.extra-reducers';
import { getPaymentsGroupedByMethodPaymentExtraReducers } from '../extra-reducers/payment.extra-reducers/get-payments-grouped-by-method-payment.extra-reducers';
import { getTotalAmountByDateRangePaymentExtraReducers } from '../extra-reducers/payment.extra-reducers/get-total-amount-by-date-range-payment.extra-reducers';
import { updatePaymentExtraReducers } from '../extra-reducers/payment.extra-reducers/update-payment.extra-reducers';

interface PaymentState {
    payments: Payment[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: PaymentState = {
    payments: [],
    loading: false,
    success: false,
    error: null,
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        resetpaymentState: (state) => {
            (state.payments = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        createPaymentExtraReducers(builder);
        deletePaymentExtraReducers(builder);
        getByDateRangePaymentExtraReducers(builder);
        getByIdPaymentExtraReducers(builder);
        getByMethodPaymentExtraReducers(builder);
        getByOrderIdPaymentExtraReducers(builder);
        getByStatusPaymentExtraReducers(builder);
        getMostRecentPaymentByOrderIdPaymentExtraReducers(builder);
        getPaymentsGroupedByMethodPaymentExtraReducers(builder);
        getTotalAmountByDateRangePaymentExtraReducers(builder);
        updatePaymentExtraReducers(builder);
    },
});

export const { resetpaymentState } = paymentSlice.actions;

export default paymentSlice.reducer;
