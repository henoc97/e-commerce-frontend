import { createSlice } from '@reduxjs/toolkit';

import { Subscription } from '../../../domain/entities/subscription.entity';

import { countByVendorSubscriptionExtraReducers } from '../extra-reducers/subscription.extra-reducers/count-by-vendor-subscription.extra-reducers';
import { createSubscriptionExtraReducers } from '../extra-reducers/subscription.extra-reducers/create-subscription.extra-reducers';
import { getActiveSubscriptionExtraReducers } from '../extra-reducers/subscription.extra-reducers/get-active-subscription.extra-reducers';
import { getByIdSubscriptionExtraReducers } from '../extra-reducers/subscription.extra-reducers/get-by-id-subscription.extra-reducers';
import { getByPriceRangeSubscriptionExtraReducers } from '../extra-reducers/subscription.extra-reducers/get-by-price-range-subscription.extra-reducers';
import { getByVendorSubscriptionExtraReducers } from '../extra-reducers/subscription.extra-reducers/get-by-vendor-subscription.extra-reducers';
import { getExpiredSubscriptionExtraReducers } from '../extra-reducers/subscription.extra-reducers/get-expired-subscription.extra-reducers';
import { getExpiringSoonSubscriptionExtraReducers } from '../extra-reducers/subscription.extra-reducers/get-expiring-soon-subscription.extra-reducers';
import { getLatestSubscriptionExtraReducers } from '../extra-reducers/subscription.extra-reducers/get-latest-subscription.extra-reducers';
import { removeSubscriptionExtraReducers } from '../extra-reducers/subscription.extra-reducers/remove-subscription.extra-reducers';
import { updateSubscriptionExtraReducers } from '../extra-reducers/subscription.extra-reducers/update-subscription.extra-reducers';

interface SubscriptionState {
    subscriptions: Subscription[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: SubscriptionState = {
    subscriptions: [],
    loading: false,
    success: false,
    error: null,
};

const subscriptionSlice = createSlice({
    name: 'subscription',
    initialState,
    reducers: {
        resetsubscriptionState: (state) => {
            (state.subscriptions = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        countByVendorSubscriptionExtraReducers(builder);
        createSubscriptionExtraReducers(builder);
        getActiveSubscriptionExtraReducers(builder);
        getByIdSubscriptionExtraReducers(builder);
        getByPriceRangeSubscriptionExtraReducers(builder);
        getByVendorSubscriptionExtraReducers(builder);
        getExpiredSubscriptionExtraReducers(builder);
        getExpiringSoonSubscriptionExtraReducers(builder);
        getLatestSubscriptionExtraReducers(builder);
        removeSubscriptionExtraReducers(builder);
        updateSubscriptionExtraReducers(builder);
    },
});

export const { resetsubscriptionState } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
