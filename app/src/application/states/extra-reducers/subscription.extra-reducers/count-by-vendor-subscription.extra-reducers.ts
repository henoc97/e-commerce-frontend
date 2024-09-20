import { PayloadAction } from '@reduxjs/toolkit';
import { countByVendorSubscription } from '../../thunks/subscription.thunks/count-by-vendor-subscription.thunk';

import { Subscription } from '../../../../domain/entities/subscription.entity';

/**
 * countByVendorSubscriptionExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'countByVendorSubscription'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'countByVendorSubscription' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'countByVendorSubscription' thunk successfully resolves. It receives an action
 *    containing an array of 'Subscription' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'countByVendorSubscription' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'countByVendorSubscription' thunk.
 *
 * @thunk countByVendorSubscription - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.subscriptions - An array that stores Subscription fetched by the fulfilled case.
 */
export const countByVendorSubscriptionExtraReducers = (builder: any) => {
    builder
        .addCase(countByVendorSubscription.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            countByVendorSubscription.fulfilled,
            (state: any, action: PayloadAction<number>) => {
                state.loading = false;
                state.success = true;
                state.subscriptions.push(action.payload);
            }
        )
        .addCase(
            countByVendorSubscription.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing countByVendorSubscription in extra-reducer state';
            }
        );
};
