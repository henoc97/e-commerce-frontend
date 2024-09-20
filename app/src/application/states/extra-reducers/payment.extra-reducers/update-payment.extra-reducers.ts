import { PayloadAction } from '@reduxjs/toolkit';
import { updatePayment } from '../../thunks/payment.thunks/update-payment.thunk';

import { Payment } from '../../../../domain/entities/payment.entity';

/**
 * updatePaymentExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updatePayment'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updatePayment' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updatePayment' thunk successfully resolves. It receives an action
 *    containing an array of 'Payment' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updatePayment' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updatePayment' thunk.
 *
 * @thunk updatePayment - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.payments - An array that stores Payment fetched by the fulfilled case.
 */
export const updatePaymentExtraReducers = (builder: any) => {
    builder
        .addCase(updatePayment.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updatePayment.fulfilled,
            (state: any, action: PayloadAction<Payment>) => {
                state.loading = false;
                state.success = true;
                const index = state.payments.findIndex(
                    (payment: Payment) => payment.id === action.payload.id
                );
                if (index !== -1) {
                    state.payments[index] = action.payload;
                }
            }
        )
        .addCase(
            updatePayment.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updatePayment in extra-reducer state';
            }
        );
};
