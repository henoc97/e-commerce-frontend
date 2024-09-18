import { NewsletterSubscriptionService } from '../../services/newsletter-subscription.service';
import { NewsletterSubscription } from '../../../domain/entities/newsletter-subscription.entity';

/**
 * Use case class for getByEmail.
 * This class encapsulates the business logic for getByEmail.
 * It interacts with the NewsletterSubscription service to perform operations on the newslettersubscription repository.
 */
export class GetByEmailNewsletterSubscription {
    constructor(private readonly service: NewsletterSubscriptionService) {}

    /**
     * Execute the getByEmail use case.
     * @param email - The string required by the service method.
     * @returns A promise with the service result of type Promise<NewsletterSubscription | null>.
     */
    async execute(email: string): Promise<NewsletterSubscription | null> {
        const result = await this.service.getByEmail(email);

        if (!result) return null;

        return result;
    }
}
