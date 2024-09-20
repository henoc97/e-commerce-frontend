import { PayloadAction } from '@reduxjs/toolkit';
import { getByProductIdProductVariant } from '../../thunks/product-variant.thunks/get-by-product-id-product-variant.thunk';

import { ProductVariant } from '../../../../domain/entities/product-variant.entity';

/**
 * getByProductIdProductVariantExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'getByProductIdProductVariant'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'getByProductIdProductVariant' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'getByProductIdProductVariant' thunk successfully resolves. It receives an action
 *    containing an array of 'ProductVariant' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'getByProductIdProductVariant' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'getByProductIdProductVariant' thunk.
 *
 * @thunk getByProductIdProductVariant - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.productVariants - An array that stores ProductVariant fetched by the fulfilled case.
 */
export const getByProductIdProductVariantExtraReducers = (builder: any) => {
    builder
        .addCase(getByProductIdProductVariant.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            getByProductIdProductVariant.fulfilled,
            (state: any, action: PayloadAction<ProductVariant[]>) => {
                state.loading = false;
                state.success = true;
                state.productVariants.push(action.payload);
            }
        )
        .addCase(
            getByProductIdProductVariant.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing getByProductIdProductVariant in extra-reducer state';
            }
        );
};
