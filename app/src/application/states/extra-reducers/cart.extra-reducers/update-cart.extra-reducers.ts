import { PayloadAction } from '@reduxjs/toolkit';
import { updateCart } from '../../thunks/cart.thunks/update-cart.thunk';

import { Cart } from '../../../../domain/entities/cart.entity';

/**
 * updateCartExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateCart'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateCart' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateCart' thunk successfully resolves. It receives an action
 *    containing an array of 'Cart' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateCart' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateCart' thunk.
 *
 * @thunk updateCart - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.carts - An array that stores Cart fetched by the fulfilled case.
 */
export const updateCartExtraReducers = (builder: any) => {
    builder
        .addCase(updateCart.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateCart.fulfilled,
            (state: any, action: PayloadAction<Cart>) => {
                state.loading = false;
                state.success = true;
                const index = state.carts.findIndex(
                    (cart: Cart) => cart.id === action.payload.id
                );
                if (index !== -1) {
                    state.carts[index] = action.payload;
                }
            }
        )
        .addCase(
            updateCart.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateCart in extra-reducer state';
            }
        );
};
