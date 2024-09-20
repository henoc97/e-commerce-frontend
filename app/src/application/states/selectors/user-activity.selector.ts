import { RootState } from '../store/store';

export const selectUserActivitys = (state: RootState) =>
    state.userActivity.userActivitys;
export const selectUserActivityLoading = (state: RootState) =>
    state.userActivity.loading;
export const selectUserActivitySuccess = (state: RootState) =>
    state.userActivity.success;
export const selectUserActivityError = (state: RootState) =>
    state.userActivity.error;
