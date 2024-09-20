import { PayloadAction } from '@reduxjs/toolkit';
import { updateOrder } from '../../thunks/order.thunks/update-order.thunk';

import { Order } from '../../../../domain/entities/order.entity';

/**
 * updateOrderExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateOrder'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateOrder' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateOrder' thunk successfully resolves. It receives an action
 *    containing an array of 'Order' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateOrder' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateOrder' thunk.
 *
 * @thunk updateOrder - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.orders - An array that stores Order fetched by the fulfilled case.
 */
export const updateOrderExtraReducers = (builder: any) => {
    builder
        .addCase(updateOrder.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateOrder.fulfilled,
            (state: any, action: PayloadAction<Order>) => {
                state.loading = false;
                state.success = true;
                const index = state.orders.findIndex(
                    (order: Order) => order.id === action.payload.id
                );
                if (index !== -1) {
                    state.orders[index] = action.payload;
                }
            }
        )
        .addCase(
            updateOrder.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateOrder in extra-reducer state';
            }
        );
};
