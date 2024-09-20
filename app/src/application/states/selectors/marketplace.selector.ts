import { RootState } from '../store/store';

export const selectMarketplaces = (state: RootState) =>
    state.marketplace.marketplaces;
export const selectMarketplaceLoading = (state: RootState) =>
    state.marketplace.loading;
export const selectMarketplaceSuccess = (state: RootState) =>
    state.marketplace.success;
export const selectMarketplaceError = (state: RootState) =>
    state.marketplace.error;
