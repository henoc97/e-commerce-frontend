import { PayloadAction } from '@reduxjs/toolkit';
import { getByProductPromotion } from '../../thunks/promotion.thunks/get-by-product-promotion.thunk';

import { Promotion } from '../../../../domain/entities/promotion.entity';

/**
 * getByProductPromotionExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'getByProductPromotion'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'getByProductPromotion' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'getByProductPromotion' thunk successfully resolves. It receives an action
 *    containing an array of 'Promotion' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'getByProductPromotion' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'getByProductPromotion' thunk.
 *
 * @thunk getByProductPromotion - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.promotions - An array that stores Promotion fetched by the fulfilled case.
 */
export const getByProductPromotionExtraReducers = (builder: any) => {
    builder
        .addCase(getByProductPromotion.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            getByProductPromotion.fulfilled,
            (state: any, action: PayloadAction<Promotion[]>) => {
                state.loading = false;
                state.success = true;
                state.promotions.push(action.payload);
            }
        )
        .addCase(
            getByProductPromotion.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing getByProductPromotion in extra-reducer state';
            }
        );
};
