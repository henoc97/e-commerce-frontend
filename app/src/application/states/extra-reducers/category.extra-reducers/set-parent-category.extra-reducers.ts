import { PayloadAction } from '@reduxjs/toolkit';
import { setParentCategory } from '../../thunks/category.thunks/set-parent-category.thunk';

import { Category } from '../../../../domain/entities/category.entity';

/**
 * setParentCategoryExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'setParentCategory'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'setParentCategory' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'setParentCategory' thunk successfully resolves. It receives an action
 *    containing an array of 'Category' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'setParentCategory' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'setParentCategory' thunk.
 *
 * @thunk setParentCategory - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.categorys - An array that stores Category fetched by the fulfilled case.
 */
export const setParentCategoryExtraReducers = (builder: any) => {
    builder
        .addCase(setParentCategory.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            setParentCategory.fulfilled,
            (state: any, action: PayloadAction<Category>) => {
                state.loading = false;
                state.success = true;
                state.categorys.push(action.payload);
            }
        )
        .addCase(
            setParentCategory.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing setParentCategory in extra-reducer state';
            }
        );
};
