import { createSlice } from '@reduxjs/toolkit';

import { UserProfile } from '../../../domain/entities/user-profile.entity';

import { createUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/create-user-profile.extra-reducers';
import { existsUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/exists-user-profile.extra-reducers';
import { findMatchesUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/find-matches-user-profile.extra-reducers';
import { getByBirthdayRangeUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/get-by-birthday-range-user-profile.extra-reducers';
import { getByGenderUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/get-by-gender-user-profile.extra-reducers';
import { getByIdUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/get-by-id-user-profile.extra-reducers';
import { getByUserIdUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/get-by-user-id-user-profile.extra-reducers';
import { getRecentlyUpdatedUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/get-recently-updated-user-profile.extra-reducers';
import { isPhoneInUseUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/is-phone-in-use-user-profile.extra-reducers';
import { removeUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/remove-user-profile.extra-reducers';
import { updateBirthdayUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/update-birthday-user-profile.extra-reducers';
import { updateGenderUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/update-gender-user-profile.extra-reducers';
import { updatePhoneUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/update-phone-user-profile.extra-reducers';
import { updateUserProfileExtraReducers } from '../extra-reducers/user-profile.extra-reducers/update-user-profile.extra-reducers';

interface UserProfileState {
    userProfiles: UserProfile[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: UserProfileState = {
    userProfiles: [],
    loading: false,
    success: false,
    error: null,
};

const userProfileSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        resetuserProfileState: (state) => {
            (state.userProfiles = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        createUserProfileExtraReducers(builder);
        existsUserProfileExtraReducers(builder);
        findMatchesUserProfileExtraReducers(builder);
        getByBirthdayRangeUserProfileExtraReducers(builder);
        getByGenderUserProfileExtraReducers(builder);
        getByIdUserProfileExtraReducers(builder);
        getByUserIdUserProfileExtraReducers(builder);
        getRecentlyUpdatedUserProfileExtraReducers(builder);
        isPhoneInUseUserProfileExtraReducers(builder);
        removeUserProfileExtraReducers(builder);
        updateBirthdayUserProfileExtraReducers(builder);
        updateGenderUserProfileExtraReducers(builder);
        updatePhoneUserProfileExtraReducers(builder);
        updateUserProfileExtraReducers(builder);
    },
});

export const { resetuserProfileState } = userProfileSlice.actions;

export default userProfileSlice.reducer;
