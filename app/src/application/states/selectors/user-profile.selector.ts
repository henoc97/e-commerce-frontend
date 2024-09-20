import { RootState } from '../store/store';

export const selectUserProfiles = (state: RootState) =>
    state.userProfile.userProfiles;
export const selectUserProfileLoading = (state: RootState) =>
    state.userProfile.loading;
export const selectUserProfileSuccess = (state: RootState) =>
    state.userProfile.success;
export const selectUserProfileError = (state: RootState) =>
    state.userProfile.error;
