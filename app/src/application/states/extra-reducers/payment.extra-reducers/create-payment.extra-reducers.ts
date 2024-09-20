import { PayloadAction } from '@reduxjs/toolkit';
import { createPayment } from '../../thunks/payment.thunks/create-payment.thunk';

import { Payment } from '../../../../domain/entities/payment.entity';

/**
 * createPaymentExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'createPayment'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'createPayment' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'createPayment' thunk successfully resolves. It receives an action
 *    containing an array of 'Payment' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'createPayment' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'createPayment' thunk.
 *
 * @thunk createPayment - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.payments - An array that stores Payment fetched by the fulfilled case.
 */
export const createPaymentExtraReducers = (builder: any) => {
    builder
        .addCase(createPayment.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            createPayment.fulfilled,
            (state: any, action: PayloadAction<Payment>) => {
                state.loading = false;
                state.success = true;
                state.payments.push(action.payload);
            }
        )
        .addCase(
            createPayment.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing createPayment in extra-reducer state';
            }
        );
};
