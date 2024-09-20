import { PayloadAction } from '@reduxjs/toolkit';
import { listCategoriesShop } from '../../thunks/shop.thunks/list-categories-shop.thunk';

import { Shop } from '../../../../domain/entities/shop.entity';

/**
 * listCategoriesShopExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'listCategoriesShop'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'listCategoriesShop' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'listCategoriesShop' thunk successfully resolves. It receives an action
 *    containing an array of 'Shop' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'listCategoriesShop' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'listCategoriesShop' thunk.
 *
 * @thunk listCategoriesShop - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.shops - An array that stores Shop fetched by the fulfilled case.
 */
export const listCategoriesShopExtraReducers = (builder: any) => {
    builder
        .addCase(listCategoriesShop.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            listCategoriesShop.fulfilled,
            (state: any, action: PayloadAction<Category[]>) => {
                state.loading = false;
                state.success = true;
                state.shops.push(action.payload);
            }
        )
        .addCase(
            listCategoriesShop.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing listCategoriesShop in extra-reducer state';
            }
        );
};
