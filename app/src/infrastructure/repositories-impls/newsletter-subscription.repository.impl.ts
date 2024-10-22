import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    CHECK_EMAIL_SUBSCRIBED,
    COUNT_TOTAL_NEWSLETTER_SUBSCRIPTIONS,
    FETCH_NEWSLETTER_SUBSCRIPTION_BY_EMAIL,
    FETCH_NEWSLETTER_SUBSCRIPTION_BY_ID,
    FETCH_NEWSLETTER_SUBSCRIPTIONS_BY_DATE_RANGE,
    LIST_NEWSLETTER_SUBSCRIPTIONS,
    CREATE_NEWSLETTER_SUBSCRIPTION,
    DELETE_NEWSLETTER_SUBSCRIPTION,
    UPDATE_NEWSLETTER_SUBSCRIPTION,
} from '../config/graphql/queries/newsletter-subscription.queries';
import { NewsletterSubscription } from '../../domain/entities/newsletter-subscription.entity';
import { INewsletterSubscriptionRepository } from '../../domain/repositories/newsletter-subscription.repository';

@injectable()
export class NewsletterSubscriptionRepositoryImpl implements INewsletterSubscriptionRepository {
    async create(subscription: NewsletterSubscription): Promise<NewsletterSubscription> {
        const { data } = await client.mutate({
            mutation: CREATE_NEWSLETTER_SUBSCRIPTION,
            variables: { dto: subscription },
        });
        return data.createNewsletterSubscription;
    }

    async getById(id: number): Promise<NewsletterSubscription | null> {
        const { data } = await client.query({
            query: FETCH_NEWSLETTER_SUBSCRIPTION_BY_ID,
            variables: { id },
        });
        return data.fetchNewsletterSubscriptionById;
    }

    async update(id: number, updates: Partial<NewsletterSubscription>): Promise<NewsletterSubscription> {
        const { data: updatedData } = await client.mutate({
            mutation: UPDATE_NEWSLETTER_SUBSCRIPTION,
            variables: { id, dto: updates },
        });
        return updatedData.updateNewsletterSubscription;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_NEWSLETTER_SUBSCRIPTION,
            variables: { id },
        });
        return data.deleteNewsletterSubscription;
    }

    async listAll(): Promise<NewsletterSubscription[]> {
        const { data } = await client.query({
            query: LIST_NEWSLETTER_SUBSCRIPTIONS,
            variables: { shopId: 1 }, // Remplacez par l'ID de shop approprié
        });
        return data.listNewsletterSubscriptions;
    }

    async getByEmail(email: string): Promise<NewsletterSubscription | null> {
        const { data } = await client.query({
            query: FETCH_NEWSLETTER_SUBSCRIPTION_BY_EMAIL,
            variables: { email, shopId: 1 }, // Remplacez par l'ID de shop approprié
        });
        return data.fetchNewsletterSubscriptionByEmail;
    }

    async isSubscribed(email: string): Promise<boolean> {
        const { data } = await client.query({
            query: CHECK_EMAIL_SUBSCRIBED,
            variables: { email, shopId: 1 }, // Remplacez par l'ID de shop approprié
        });
        return data.checkEmailSubscribed;
    }

    async getByDateRange(startDate: Date, endDate: Date): Promise<NewsletterSubscription[]> {
        const { data } = await client.query({
            query: FETCH_NEWSLETTER_SUBSCRIPTIONS_BY_DATE_RANGE,
            variables: { startDate, endDate, shopId: 1 }, // Remplacez par l'ID de shop approprié
        });
        return data.fetchNewsletterSubscriptionsByDateRange;
    }

    async countAll(): Promise<number> {
        const { data } = await client.query({
            query: COUNT_TOTAL_NEWSLETTER_SUBSCRIPTIONS,
            variables: { shopId: 1 }, // Remplacez par l'ID de shop approprié
        });
        return data.countTotalNewsletterSubscriptions;
    }
}
