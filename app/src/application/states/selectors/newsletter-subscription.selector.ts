import { RootState } from '../store/store';

export const selectNewsletterSubscriptions = (state: RootState) =>
    state.newsletterSubscription.newsletterSubscriptions;
export const selectNewsletterSubscriptionLoading = (state: RootState) =>
    state.newsletterSubscription.loading;
export const selectNewsletterSubscriptionSuccess = (state: RootState) =>
    state.newsletterSubscription.success;
export const selectNewsletterSubscriptionError = (state: RootState) =>
    state.newsletterSubscription.error;
