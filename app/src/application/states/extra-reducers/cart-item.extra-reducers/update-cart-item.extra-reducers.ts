import { PayloadAction } from '@reduxjs/toolkit';
import { updateCartItem } from '../../thunks/cart-item.thunks/update-cart-item.thunk';

import { CartItem } from '../../../../domain/entities/cart-item.entity';

/**
 * updateCartItemExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateCartItem'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateCartItem' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateCartItem' thunk successfully resolves. It receives an action
 *    containing an array of 'CartItem' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateCartItem' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateCartItem' thunk.
 *
 * @thunk updateCartItem - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.cartItems - An array that stores CartItem fetched by the fulfilled case.
 */
export const updateCartItemExtraReducers = (builder: any) => {
    builder
        .addCase(updateCartItem.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateCartItem.fulfilled,
            (state: any, action: PayloadAction<CartItem>) => {
                state.loading = false;
                state.success = true;
                const index = state.cartItems.findIndex(
                    (cartItem: CartItem) => cartItem.id === action.payload.id
                );
                if (index !== -1) {
                    state.cartItems[index] = action.payload;
                }
            }
        )
        .addCase(
            updateCartItem.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateCartItem in extra-reducer state';
            }
        );
};
