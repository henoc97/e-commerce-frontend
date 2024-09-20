/**
 * Represents a subscription to a newsletter.
 * Stores details about the subscriber's email and the subscription date.
 */
export interface NewsletterSubscription {
    /**
     * Unique identifier for the subscription.
     */
    id: number;

    /**
     * Email address of the subscriber.
     */
    email: string;

    /**
     * The date and time when the subscription was created.
     */
    subscribedAt: string;
}
