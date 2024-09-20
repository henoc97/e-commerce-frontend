import { PayloadAction } from '@reduxjs/toolkit';
import { calculateTotalPriceOrderItem } from '../../thunks/order-item.thunks/calculate-total-price-order-item.thunk';

import { OrderItem } from '../../../../domain/entities/order-item.entity';

/**
 * calculateTotalPriceOrderItemExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'calculateTotalPriceOrderItem'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'calculateTotalPriceOrderItem' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'calculateTotalPriceOrderItem' thunk successfully resolves. It receives an action
 *    containing an array of 'OrderItem' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'calculateTotalPriceOrderItem' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'calculateTotalPriceOrderItem' thunk.
 *
 * @thunk calculateTotalPriceOrderItem - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.orderItems - An array that stores OrderItem fetched by the fulfilled case.
 */
export const calculateTotalPriceOrderItemExtraReducers = (builder: any) => {
    builder
        .addCase(calculateTotalPriceOrderItem.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            calculateTotalPriceOrderItem.fulfilled,
            (state: any, action: PayloadAction<number>) => {
                state.loading = false;
                state.success = true;
                state.orderItems.push(action.payload);
            }
        )
        .addCase(
            calculateTotalPriceOrderItem.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing calculateTotalPriceOrderItem in extra-reducer state';
            }
        );
};