import { PayloadAction } from '@reduxjs/toolkit';
import { updateCategory } from '../../thunks/category.thunks/update-category.thunk';

import { Category } from '../../../../domain/entities/category.entity';

/**
 * updateCategoryExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateCategory'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateCategory' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateCategory' thunk successfully resolves. It receives an action
 *    containing an array of 'Category' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateCategory' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateCategory' thunk.
 *
 * @thunk updateCategory - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.categorys - An array that stores Category fetched by the fulfilled case.
 */
export const updateCategoryExtraReducers = (builder: any) => {
    builder
        .addCase(updateCategory.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateCategory.fulfilled,
            (state: any, action: PayloadAction<Category>) => {
                state.loading = false;
                state.success = true;
                const index = state.categorys.findIndex(
                    (category: Category) => category.id === action.payload.id
                );
                if (index !== -1) {
                    state.categorys[index] = action.payload;
                }
            }
        )
        .addCase(
            updateCategory.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateCategory in extra-reducer state';
            }
        );
};
