import { PayloadAction } from '@reduxjs/toolkit';
import { calculateCartTotalCartItem } from '../../thunks/cart-item.thunks/calculate-cart-total-cart-item.thunk';

import { CartItem } from '../../../../domain/entities/cart-item.entity';

/**
 * calculateCartTotalCartItemExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'calculateCartTotalCartItem'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'calculateCartTotalCartItem' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'calculateCartTotalCartItem' thunk successfully resolves. It receives an action
 *    containing an array of 'CartItem' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'calculateCartTotalCartItem' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'calculateCartTotalCartItem' thunk.
 *
 * @thunk calculateCartTotalCartItem - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.cartItems - An array that stores CartItem fetched by the fulfilled case.
 */
export const calculateCartTotalCartItemExtraReducers = (builder: any) => {
    builder
        .addCase(calculateCartTotalCartItem.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            calculateCartTotalCartItem.fulfilled,
            (state: any, action: PayloadAction<number>) => {
                state.loading = false;
                state.success = true;
                state.cartItems.push(action.payload);
            }
        )
        .addCase(
            calculateCartTotalCartItem.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing calculateCartTotalCartItem in extra-reducer state';
            }
        );
};
