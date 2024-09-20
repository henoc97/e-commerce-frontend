import { PayloadAction } from '@reduxjs/toolkit';
import { updatePasswordUser } from '../../thunks/user.thunks/update-password-user.thunk';

import { User } from '../../../../domain/entities/user.entity';

/**
 * updatePasswordUserExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'updatePasswordUser'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'updatePasswordUser' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'updatePasswordUser' thunk successfully resolves. It receives an action
 *    containing an array of 'User' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'updatePasswordUser' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'updatePasswordUser' thunk.
 *
 * @thunk updatePasswordUser - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.users - An array that stores User fetched by the fulfilled case.
 */
export const updatePasswordUserExtraReducers = (builder: any) => {
    builder
        .addCase(updatePasswordUser.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            updatePasswordUser.fulfilled,
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
            updatePasswordUser.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing updatePasswordUser in extra-reducer state';
            }
        );
};
