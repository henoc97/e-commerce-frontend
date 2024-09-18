import { NewsletterSubscriptionService } from '../../services/newsletter-subscription.service';
import { NewsletterSubscription } from '../../../domain/entities/newsletter-subscription.entity';

/**
 * Use case class for listAll.
 * This class encapsulates the business logic for listAll.
 * It interacts with the NewsletterSubscription service to perform operations on the newslettersubscription repository.
 */
export class ListAllNewsletterSubscription {
    constructor(private readonly service: NewsletterSubscriptionService) {}

    /**
     * Execute the listAll use case.
     * @returns A promise with the service result of type Promise<NewsletterSubscription[]>.
     */
    async execute(): Promise<NewsletterSubscription[]> {
        const result = await this.service.listAll();

        return result;
    }
}
