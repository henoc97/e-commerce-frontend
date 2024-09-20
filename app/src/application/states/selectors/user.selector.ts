import { RootState } from '../store/store';

export const selectUsers = (state: RootState) => state.user.users;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserSuccess = (state: RootState) => state.user.success;
export const selectUserError = (state: RootState) => state.user.error;
