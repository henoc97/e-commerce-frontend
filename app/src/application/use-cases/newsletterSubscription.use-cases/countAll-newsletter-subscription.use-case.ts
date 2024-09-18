import { NewsletterSubscriptionService } from '../../services/newsletter-subscription.service';

/**
 * Use case class for countAll.
 * This class encapsulates the business logic for countAll.
 * It interacts with the NewsletterSubscription service to perform operations on the newslettersubscription repository.
 */
export class CountAllNewsletterSubscription {
    constructor(private readonly service: NewsletterSubscriptionService) {}

    /**
     * Execute the countAll use case.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(): Promise<number> {
        const result = await this.service.countAll();

        return result;
    }
}
