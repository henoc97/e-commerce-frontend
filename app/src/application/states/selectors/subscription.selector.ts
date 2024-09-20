import { RootState } from '../store/store';

export const selectSubscriptions = (state: RootState) =>
    state.subscription.subscriptions;
export const selectSubscriptionLoading = (state: RootState) =>
    state.subscription.loading;
export const selectSubscriptionSuccess = (state: RootState) =>
    state.subscription.success;
export const selectSubscriptionError = (state: RootState) =>
    state.subscription.error;
