import { PayloadAction } from '@reduxjs/toolkit';
import { getByDateRangeReview } from '../../thunks/review.thunks/get-by-date-range-review.thunk';

import { Review } from '../../../../domain/entities/review.entity';

/**
 * getByDateRangeReviewExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'getByDateRangeReview'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'getByDateRangeReview' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'getByDateRangeReview' thunk successfully resolves. It receives an action
 *    containing an array of 'Review' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'getByDateRangeReview' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'getByDateRangeReview' thunk.
 *
 * @thunk getByDateRangeReview - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.reviews - An array that stores Review fetched by the fulfilled case.
 */
export const getByDateRangeReviewExtraReducers = (builder: any) => {
    builder
        .addCase(getByDateRangeReview.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            getByDateRangeReview.fulfilled,
            (state: any, action: PayloadAction<Review[]>) => {
                state.loading = false;
                state.success = true;
                state.reviews.push(action.payload);
            }
        )
        .addCase(
            getByDateRangeReview.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing getByDateRangeReview in extra-reducer state';
            }
        );
};
