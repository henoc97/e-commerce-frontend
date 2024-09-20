import { PayloadAction } from '@reduxjs/toolkit';
import { updateUrlProductImage } from '../../thunks/product-image.thunks/update-url-product-image.thunk';

import { ProductImage } from '../../../../domain/entities/product-image.entity';

/**
 * updateUrlProductImageExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateUrlProductImage'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateUrlProductImage' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateUrlProductImage' thunk successfully resolves. It receives an action
 *    containing an array of 'ProductImage' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateUrlProductImage' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateUrlProductImage' thunk.
 *
 * @thunk updateUrlProductImage - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.productImages - An array that stores ProductImage fetched by the fulfilled case.
 */
export const updateUrlProductImageExtraReducers = (builder: any) => {
    builder
        .addCase(updateUrlProductImage.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateUrlProductImage.fulfilled,
            (state: any, action: PayloadAction<ProductImage>) => {
                state.loading = false;
                state.success = true;
                const index = state.productImages.findIndex(
                    (productImage: ProductImage) =>
                        productImage.id === action.payload.id
                );
                if (index !== -1) {
                    state.productImages[index] = action.payload;
                }
            }
        )
        .addCase(
            updateUrlProductImage.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateUrlProductImage in extra-reducer state';
            }
        );
};
