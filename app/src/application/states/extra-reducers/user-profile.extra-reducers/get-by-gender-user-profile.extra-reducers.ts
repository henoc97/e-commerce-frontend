import { PayloadAction } from '@reduxjs/toolkit';
import { getByGenderUserProfile } from '../../thunks/user-profile.thunks/get-by-gender-user-profile.thunk';

import { UserProfile } from '../../../../domain/entities/user-profile.entity';

/**
 * getByGenderUserProfileExtraReducers
 *
 * This function adds extra reducers to handle the different states of the asynchronous thunk
 * 'getByGenderUserProfile'. It defines the behavior of the Redux slice in response to three different cases:
 *
 * 1. **Pending**: This case is triggered when the 'getByGenderUserProfile' thunk is dispatched but has not yet completed.
 *    In this state, the 'loading' flag is set to 'true', indicating that a request is in progress, and the 'error' field is reset to 'null'.
 *
 * 2. **Fulfilled**: This case occurs when the 'getByGenderUserProfile' thunk successfully resolves. It receives an action
 *    containing an array of 'UserProfile' objects as its payload. The 'loading' flag is set to 'false',
 *
 * 3. **Rejected**: This case is triggered when the 'getByGenderUserProfile' thunk fails. The 'loading' flag is set to 'false',
 *    and an error message is stored in 'state.error'. If the action's payload contains an error message, it is stored; otherwise, a default
 *    error message is set.
 *
 * @param builder - A builder object used to add cases for pending, fulfilled, and rejected states of the 'getByGenderUserProfile' thunk.
 *
 * @thunk getByGenderUserProfile - An asynchronous thunk.
 *
 * @state.loading - A boolean flag that indicates whether a request is currently in progress.
 * @state.success - A boolean flag that indicates whether a request is successed.
 * @state.error - A field that stores any error messages resulting from the thunk's execution.
 * @state.userProfiles - An array that stores UserProfile fetched by the fulfilled case.
 */
export const getByGenderUserProfileExtraReducers = (builder: any) => {
    builder
        .addCase(getByGenderUserProfile.pending, (state: any) => {
            state.loading = true;
            state.success = false;
            state.error = null;
        })
        .addCase(
            getByGenderUserProfile.fulfilled,
            (state: any, action: PayloadAction<UserProfile[]>) => {
                state.loading = false;
                state.success = true;
                state.userProfiles.push(action.payload);
            }
        )
        .addCase(
            getByGenderUserProfile.rejected,
            (state: any, action: PayloadAction<string | undefined>) => {
                state.loading = false;
                state.success = false;
                state.error =
                    action.payload ||
                    'Error while executing getByGenderUserProfile in extra-reducer state';
            }
        );
};
