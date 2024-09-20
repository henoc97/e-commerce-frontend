import { PayloadAction } from '@reduxjs/toolkit';
import { updateShop } from '../../thunks/shop.thunks/update-shop.thunk';

import { Shop } from '../../../../domain/entities/shop.entity';

/**
 * updateShopExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateShop'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateShop' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateShop' thunk successfully resolves. It receives an action
 *    containing an array of 'Shop' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateShop' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateShop' thunk.
 *
 * @thunk updateShop - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.shops - An array that stores Shop fetched by the fulfilled case.
 */
export const updateShopExtraReducers = (builder: any) => {
    builder
        .addCase(updateShop.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateShop.fulfilled,
            (state: any, action: PayloadAction<Shop>) => {
                state.loading = false;
                state.success = true;
                const index = state.shops.findIndex(
                    (shop: Shop) => shop.id === action.payload.id
                );
                if (index !== -1) {
                    state.shops[index] = action.payload;
                }
            }
        )
        .addCase(
            updateShop.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateShop in extra-reducer state';
            }
        );
};
