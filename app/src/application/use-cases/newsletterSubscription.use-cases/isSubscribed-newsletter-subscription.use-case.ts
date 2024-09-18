import { NewsletterSubscriptionService } from '../../services/newsletter-subscription.service';

/**
 * Use case class for isSubscribed.
 * This class encapsulates the business logic for isSubscribed.
 * It interacts with the NewsletterSubscription service to perform operations on the newslettersubscription repository.
 */
export class IsSubscribedNewsletterSubscription {
    constructor(private readonly service: NewsletterSubscriptionService) {}

    /**
     * Execute the isSubscribed use case.
     * @param email - The string required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(email: string): Promise<boolean> {
        const result = await this.service.isSubscribed(email);

        return result;
    }
}
