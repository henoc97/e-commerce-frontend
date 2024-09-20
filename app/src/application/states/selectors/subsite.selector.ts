import { RootState } from '../store/store';

export const selectSubsites = (state: RootState) => state.subsite.subsites;
export const selectSubsiteLoading = (state: RootState) => state.subsite.loading;
export const selectSubsiteSuccess = (state: RootState) => state.subsite.success;
export const selectSubsiteError = (state: RootState) => state.subsite.error;
