import { NewsletterSubscriptionService } from '../../services/newsletter-subscription.service';
import { NewsletterSubscription } from '../../../domain/entities/newsletter-subscription.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the NewsletterSubscription service to perform operations on the newslettersubscription repository.
 */
@injectable()
export class GetByIdNewsletterSubscription {
    constructor(private readonly service: NewsletterSubscriptionService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<NewsletterSubscription | null>.
     */
    async execute(id: number): Promise<NewsletterSubscription | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
