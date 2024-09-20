import { createSlice } from '@reduxjs/toolkit';

import { Refund } from '../../../domain/entities/refund.entity';

import { approveRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/approve-refund.extra-reducers';
import { cancelRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/cancel-refund.extra-reducers';
import { createRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/create-refund.extra-reducers';
import { getByIdRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/get-by-id-refund.extra-reducers';
import { getByOrderRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/get-by-order-refund.extra-reducers';
import { getByStatusRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/get-by-status-refund.extra-reducers';
import { getTotalRefundedRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/get-total-refunded-refund.extra-reducers';
import { isEligibleRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/is-eligible-refund.extra-reducers';
import { issuePartialRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/issue-partial-refund.extra-reducers';
import { modifyRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/modify-refund.extra-reducers';
import { processRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/process-refund.extra-reducers';
import { removeRefundExtraReducers } from '../extra-reducers/refund.extra-reducers/remove-refund.extra-reducers';

interface RefundState {
    refunds: Refund[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: RefundState = {
    refunds: [],
    loading: false,
    success: false,
    error: null,
};

const refundSlice = createSlice({
    name: 'refund',
    initialState,
    reducers: {
        resetrefundState: (state) => {
            (state.refunds = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        approveRefundExtraReducers(builder);
        cancelRefundExtraReducers(builder);
        createRefundExtraReducers(builder);
        getByIdRefundExtraReducers(builder);
        getByOrderRefundExtraReducers(builder);
        getByStatusRefundExtraReducers(builder);
        getTotalRefundedRefundExtraReducers(builder);
        isEligibleRefundExtraReducers(builder);
        issuePartialRefundExtraReducers(builder);
        modifyRefundExtraReducers(builder);
        processRefundExtraReducers(builder);
        removeRefundExtraReducers(builder);
    },
});

export const { resetrefundState } = refundSlice.actions;

export default refundSlice.reducer;
