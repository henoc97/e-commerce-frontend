import { PayloadAction } from '@reduxjs/toolkit';
import { deleteProductVariant } from '../../thunks/product-variant.thunks/delete-product-variant.thunk';

import { ProductVariant } from '../../../../domain/entities/product-variant.entity';

/**
 * deleteProductVariantExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'deleteProductVariant'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'deleteProductVariant' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'deleteProductVariant' thunk successfully resolves. It receives an action
 *    containing an array of 'ProductVariant' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'deleteProductVariant' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'deleteProductVariant' thunk.
 *
 * @thunk deleteProductVariant - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.productVariants - An array that stores ProductVariant fetched by the fulfilled case.
 */
export const deleteProductVariantExtraReducers = (builder: any) => {
    builder
        .addCase(deleteProductVariant.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            deleteProductVariant.fulfilled,
            (state: any, action: PayloadAction<number>) => {
                state.loading = false;
                state.success = true;
                state.productVariants = state.productVariants.filter(
                    (productVariant: ProductVariant) =>
                        productVariant.id !== action.payload
                );
            }
        )
        .addCase(
            deleteProductVariant.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing deleteProductVariant in extra-reducer state';
            }
        );
};
