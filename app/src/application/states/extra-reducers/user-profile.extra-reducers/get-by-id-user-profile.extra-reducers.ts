import { PayloadAction } from '@reduxjs/toolkit';
import { getByIdUserProfile } from '../../thunks/user-profile.thunks/get-by-id-user-profile.thunk';

import { UserProfile } from '../../../../domain/entities/user-profile.entity';

/**
 * getByIdUserProfileExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'getByIdUserProfile'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'getByIdUserProfile' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'getByIdUserProfile' thunk successfully resolves. It receives an action
 *    containing an array of 'UserProfile' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'getByIdUserProfile' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'getByIdUserProfile' thunk.
 *
 * @thunk getByIdUserProfile - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.userProfiles - An array that stores UserProfile fetched by the fulfilled case.
 */
export const getByIdUserProfileExtraReducers = (builder: any) => {
    builder
        .addCase(getByIdUserProfile.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            getByIdUserProfile.fulfilled,
            (state: any, action: PayloadAction<UserProfile | null>) => {
                state.loading = false;
                state.success = true;
                state.userProfiles.push(action.payload);
            }
        )
        .addCase(
            getByIdUserProfile.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing getByIdUserProfile in extra-reducer state';
            }
        );
};
