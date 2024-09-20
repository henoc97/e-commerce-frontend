import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../../domain/entities/subscription.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getExpired.
 * This class encapsulates the business logic for getExpired.
 * It interacts with the Subscription service to perform operations on the subscription repository.
 */
@injectable()
export class GetExpiredSubscription {
    constructor(private readonly service: SubscriptionService) {}

    /**
     * Execute the getExpired use case.
     * @returns A promise with the service result of type Promise<Subscription[]>.
     */
    async execute(): Promise<Subscription[]> {
        const result = await this.service.getExpired();

        return result;
    }
}
