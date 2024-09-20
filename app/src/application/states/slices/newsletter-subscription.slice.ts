import { createSlice } from '@reduxjs/toolkit';

import { NewsletterSubscription } from '../../../domain/entities/newsletter-subscription.entity';

import { countAllNewsletterSubscriptionExtraReducers } from '../extra-reducers/newsletter-subscription.extra-reducers/count-all-newsletter-subscription.extra-reducers';
import { createNewsletterSubscriptionExtraReducers } from '../extra-reducers/newsletter-subscription.extra-reducers/create-newsletter-subscription.extra-reducers';
import { deleteNewsletterSubscriptionExtraReducers } from '../extra-reducers/newsletter-subscription.extra-reducers/delete-newsletter-subscription.extra-reducers';
import { getByEmailNewsletterSubscriptionExtraReducers } from '../extra-reducers/newsletter-subscription.extra-reducers/get-by-email-newsletter-subscription.extra-reducers';
import { getByIdNewsletterSubscriptionExtraReducers } from '../extra-reducers/newsletter-subscription.extra-reducers/get-by-id-newsletter-subscription.extra-reducers';
import { isSubscribedNewsletterSubscriptionExtraReducers } from '../extra-reducers/newsletter-subscription.extra-reducers/is-subscribed-newsletter-subscription.extra-reducers';
import { listAllNewsletterSubscriptionExtraReducers } from '../extra-reducers/newsletter-subscription.extra-reducers/list-all-newsletter-subscription.extra-reducers';

interface NewsletterSubscriptionState {
    newsletterSubscriptions: NewsletterSubscription[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: NewsletterSubscriptionState = {
    newsletterSubscriptions: [],
    loading: false,
    success: false,
    error: null,
};

const newsletterSubscriptionSlice = createSlice({
    name: 'newsletterSubscription',
    initialState,
    reducers: {
        resetnewsletterSubscriptionState: (state) => {
            (state.newsletterSubscriptions = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        countAllNewsletterSubscriptionExtraReducers(builder);
        createNewsletterSubscriptionExtraReducers(builder);
        deleteNewsletterSubscriptionExtraReducers(builder);
        getByEmailNewsletterSubscriptionExtraReducers(builder);
        getByIdNewsletterSubscriptionExtraReducers(builder);
        isSubscribedNewsletterSubscriptionExtraReducers(builder);
        listAllNewsletterSubscriptionExtraReducers(builder);
    },
});

export const { resetnewsletterSubscriptionState } =
    newsletterSubscriptionSlice.actions;

export default newsletterSubscriptionSlice.reducer;
