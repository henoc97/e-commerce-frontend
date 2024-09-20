import { PayloadAction } from '@reduxjs/toolkit';
import { getInactiveUsersUser } from '../../thunks/user.thunks/get-inactive-users-user.thunk';

import { User } from '../../../../domain/entities/user.entity';

/**
 * getInactiveUsersUserExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'getInactiveUsersUser'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'getInactiveUsersUser' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'getInactiveUsersUser' thunk successfully resolves. It receives an action
 *    containing an array of 'User' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'getInactiveUsersUser' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'getInactiveUsersUser' thunk.
 *
 * @thunk getInactiveUsersUser - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.users - An array that stores User fetched by the fulfilled case.
 */
export const getInactiveUsersUserExtraReducers = (builder: any) => {
    builder
        .addCase(getInactiveUsersUser.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            getInactiveUsersUser.fulfilled,
            (state: any, action: PayloadAction<User[]>) => {
                state.loading = false;
                state.success = true;
                state.users.push(action.payload);
            }
        )
        .addCase(
            getInactiveUsersUser.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing getInactiveUsersUser in extra-reducer state';
            }
        );
};
