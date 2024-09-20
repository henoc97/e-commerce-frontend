import { PayloadAction } from '@reduxjs/toolkit';
import { updateProduct } from '../../thunks/product.thunks/update-product.thunk';

import { Product } from '../../../../domain/entities/product.entity';

/**
 * updateProductExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateProduct'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateProduct' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateProduct' thunk successfully resolves. It receives an action
 *    containing an array of 'Product' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateProduct' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateProduct' thunk.
 *
 * @thunk updateProduct - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.products - An array that stores Product fetched by the fulfilled case.
 */
export const updateProductExtraReducers = (builder: any) => {
    builder
        .addCase(updateProduct.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateProduct.fulfilled,
            (state: any, action: PayloadAction<Product>) => {
                state.loading = false;
                state.success = true;
                const index = state.products.findIndex(
                    (product: Product) => product.id === action.payload.id
                );
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
            }
        )
        .addCase(
            updateProduct.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateProduct in extra-reducer state';
            }
        );
};
