import { RootState } from '../store/store';

export const selectAddresss = (state: RootState) => state.address.addresss;
export const selectAddressLoading = (state: RootState) => state.address.loading;
export const selectAddressSuccess = (state: RootState) => state.address.success;
export const selectAddressError = (state: RootState) => state.address.error;
