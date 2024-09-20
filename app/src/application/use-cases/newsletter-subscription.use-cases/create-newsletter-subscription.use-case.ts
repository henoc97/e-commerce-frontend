import { NewsletterSubscriptionService } from '../../services/newsletter-subscription.service';
import { NewsletterSubscription } from '../../../domain/entities/newsletter-subscription.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the NewsletterSubscription service to perform operations on the newslettersubscription repository.
 */
@injectable()
export class CreateNewsletterSubscription {
    constructor(private readonly service: NewsletterSubscriptionService) {}

    /**
     * Execute the create use case.
     * @param subscription - The NewsletterSubscription required by the service method.
     * @returns A promise with the service result of type Promise<NewsletterSubscription>.
     */
    async execute(
        subscription: NewsletterSubscription
    ): Promise<NewsletterSubscription> {
        const result = await this.service.create(subscription);

        return result;
    }
}
