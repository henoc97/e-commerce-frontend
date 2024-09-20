import { PayloadAction } from '@reduxjs/toolkit';
import { updateUser } from '../../thunks/user.thunks/update-user.thunk';

import { User } from '../../../../domain/entities/user.entity';

/**
 * updateUserExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updateUser'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updateUser' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updateUser' thunk successfully resolves. It receives an action
 *    containing an array of 'User' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updateUser' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updateUser' thunk.
 *
 * @thunk updateUser - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.users - An array that stores User fetched by the fulfilled case.
 */
export const updateUserExtraReducers = (builder: any) => {
    builder
        .addCase(updateUser.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updateUser.fulfilled,
            (state: any, action: PayloadAction<User>) => {
                state.loading = false;
                state.success = true;
                const index = state.users.findIndex(
                    (user: User) => user.id === action.payload.id
                );
                if (index !== -1) {
                    state.users[index] = action.payload;
                }
            }
        )
        .addCase(
            updateUser.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updateUser in extra-reducer state';
            }
        );
};
