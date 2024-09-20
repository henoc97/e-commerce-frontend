import { PayloadAction } from '@reduxjs/toolkit';
import { createUserActivity } from '../../thunks/user-activity.thunks/create-user-activity.thunk';

import { UserActivity } from '../../../../domain/entities/user-activity.entity';

/**
 * createUserActivityExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'createUserActivity'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'createUserActivity' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'createUserActivity' thunk successfully resolves. It receives an action
 *    containing an array of 'UserActivity' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'createUserActivity' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'createUserActivity' thunk.
 *
 * @thunk createUserActivity - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.userActivitys - An array that stores UserActivity fetched by the fulfilled case.
 */
export const createUserActivityExtraReducers = (builder: any) => {
    builder
        .addCase(createUserActivity.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            createUserActivity.fulfilled,
            (state: any, action: PayloadAction<UserActivity>) => {
                state.loading = false;
                state.success = true;
                state.userActivitys.push(action.payload);
            }
        )
        .addCase(
            createUserActivity.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing createUserActivity in extra-reducer state';
            }
        );
};
