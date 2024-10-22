import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    LIST_ACTIVE_SUBSCRIPTIONS,
    LIST_EXPIRED_SUBSCRIPTIONS,
    LIST_EXPIRING_SUBSCRIPTIONS,
    LIST_SUBSCRIPTIONS_BY_PRICE_RANGE,
    LIST_SUBSCRIPTIONS_BY_VENDOR,
    FETCH_SUBSCRIPTION_BY_ID,
    FETCH_LATEST_SUBSCRIPTION,
    CREATE_SUBSCRIPTION,
    DELETE_SUBSCRIPTION,
    UPDATE_SUBSCRIPTION,
    COUNT_SUBSCRIPTIONS_BY_VENDOR,
} from '../config/graphql/queries/subscription.queries';
import { Subscription } from '../../domain/entities/subscription.entity';
import { ISubscriptionRepository } from '../../domain/repositories/subscription.repository';

@injectable()
export class SubscriptionRepositoryImpl implements ISubscriptionRepository {
    async create(subscription: Subscription): Promise<Subscription> {
        const { data } = await client.mutate({
            mutation: CREATE_SUBSCRIPTION,
            variables: { subscriptionDTO: subscription },
        });
        return data.createSubscription;
    }

    async getById(id: number): Promise<Subscription | null> {
        const { data } = await client.query({
            query: FETCH_SUBSCRIPTION_BY_ID,
            variables: { id },
        });
        return data.fetchSubscriptionById;
    }

    async update(id: number, updates: Partial<Subscription>): Promise<Subscription> {
        const { data } = await client.mutate({
            mutation: UPDATE_SUBSCRIPTION,
            variables: { id, updates },
        });
        return data.updateSubscription;
    }

    async remove(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_SUBSCRIPTION,
            variables: { id },
        });
        return data.deleteSubscription;
    }

    async getByVendor(vendorId: number): Promise<Subscription[]> {
        const { data } = await client.query({
            query: LIST_SUBSCRIPTIONS_BY_VENDOR,
            variables: { vendorId },
        });
        return data.listSubscriptionsByVendor;
    }

    async getByPriceRange(minPrice: number, maxPrice: number): Promise<Subscription[]> {
        const { data } = await client.query({
            query: LIST_SUBSCRIPTIONS_BY_PRICE_RANGE,
            variables: { minPrice, maxPrice },
        });
        return data.listSubscriptionsByPriceRange;
    }

    async getActive(): Promise<Subscription[]> {
        const { data } = await client.query({
            query: LIST_ACTIVE_SUBSCRIPTIONS,
        });
        return data.listActiveSubscriptions;
    }

    async getExpired(): Promise<Subscription[]> {
        const { data } = await client.query({
            query: LIST_EXPIRED_SUBSCRIPTIONS,
        });
        return data.listExpiredSubscriptions;
    }

    async getExpiringSoon(days: number): Promise<Subscription[]> {
        const { data } = await client.query({
            query: LIST_EXPIRING_SUBSCRIPTIONS,
            variables: { days },
        });
        return data.listExpiringSubscriptions;
    }

    async getLatest(): Promise<Subscription> {
        const { data } = await client.query({
            query: FETCH_LATEST_SUBSCRIPTION,
        });
        return data.fetchLatestSubscription;
    }

    async countByVendor(vendorId: number): Promise<number> {
        const { data } = await client.query({
            query: COUNT_SUBSCRIPTIONS_BY_VENDOR,
            variables: { vendorId },
        });
        return data.countSubscriptionsByVendor;
    }
}
