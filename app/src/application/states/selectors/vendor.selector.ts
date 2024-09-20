import { RootState } from '../store/store';

export const selectVendors = (state: RootState) => state.vendor.vendors;
export const selectVendorLoading = (state: RootState) => state.vendor.loading;
export const selectVendorSuccess = (state: RootState) => state.vendor.success;
export const selectVendorError = (state: RootState) => state.vendor.error;
