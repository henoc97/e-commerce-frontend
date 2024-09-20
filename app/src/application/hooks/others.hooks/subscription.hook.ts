import { useAppDispatch, useAppSelector } from '../index.hook';

import { Subscription } from '../../../domain/entities/subscription.entity';

import { countByVendorSubscription } from '../../states/thunks/subscription.thunks/count-by-vendor-subscription.thunk';
import { createSubscription } from '../../states/thunks/subscription.thunks/create-subscription.thunk';
import { getActiveSubscription } from '../../states/thunks/subscription.thunks/get-active-subscription.thunk';
import { getByIdSubscription } from '../../states/thunks/subscription.thunks/get-by-id-subscription.thunk';
import { getByPriceRangeSubscription } from '../../states/thunks/subscription.thunks/get-by-price-range-subscription.thunk';
import { getByVendorSubscription } from '../../states/thunks/subscription.thunks/get-by-vendor-subscription.thunk';
import { getExpiredSubscription } from '../../states/thunks/subscription.thunks/get-expired-subscription.thunk';
import { getExpiringSoonSubscription } from '../../states/thunks/subscription.thunks/get-expiring-soon-subscription.thunk';
import { getLatestSubscription } from '../../states/thunks/subscription.thunks/get-latest-subscription.thunk';
import { removeSubscription } from '../../states/thunks/subscription.thunks/remove-subscription.thunk';
import { updateSubscription } from '../../states/thunks/subscription.thunks/update-subscription.thunk';

export const useSubscription: any = () => {
    const dispatch = useAppDispatch();
    const subscriptions = useAppSelector((state: any) => state.subscriptions);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCountByVendorSubscription = (vendorId: number) => {
        dispatch(countByVendorSubscription({ vendorId }));
    };

    const handleCreateSubscription = (subscription: Subscription) => {
        dispatch(createSubscription({ subscription }));
    };

    const handleGetActiveSubscription = () => {
        dispatch(getActiveSubscription({}));
    };

    const handleGetByIdSubscription = (id: number) => {
        dispatch(getByIdSubscription({ id }));
    };

    const handleGetByPriceRangeSubscription = (
        minPrice: number,
        maxPrice: number
    ) => {
        dispatch(getByPriceRangeSubscription({ minPrice, maxPrice }));
    };

    const handleGetByVendorSubscription = (vendorId: number) => {
        dispatch(getByVendorSubscription({ vendorId }));
    };

    const handleGetExpiredSubscription = () => {
        dispatch(getExpiredSubscription({}));
    };

    const handleGetExpiringSoonSubscription = (days: number) => {
        dispatch(getExpiringSoonSubscription({ days }));
    };

    const handleGetLatestSubscription = () => {
        dispatch(getLatestSubscription({}));
    };

    const handleRemoveSubscription = (id: number) => {
        dispatch(removeSubscription({ id }));
    };

    const handleUpdateSubscription = (
        id: number,
        updates: Partial<Subscription>
    ) => {
        dispatch(updateSubscription({ id, updates }));
    };

    return {
        ...subscriptions,
        loading,
        success,
        error,
        handleCountByVendorSubscription,
        handleCreateSubscription,
        handleGetActiveSubscription,
        handleGetByIdSubscription,
        handleGetByPriceRangeSubscription,
        handleGetByVendorSubscription,
        handleGetExpiredSubscription,
        handleGetExpiringSoonSubscription,
        handleGetLatestSubscription,
        handleRemoveSubscription,
        handleUpdateSubscription,
    };
};
