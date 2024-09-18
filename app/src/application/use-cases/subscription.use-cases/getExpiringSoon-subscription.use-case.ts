import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../../domain/entities/subscription.entity';

/**
 * Use case class for getExpiringSoon.
 * This class encapsulates the business logic for getExpiringSoon.
 * It interacts with the Subscription service to perform operations on the subscription repository.
 */
export class GetExpiringSoonSubscription {
    constructor(private readonly service: SubscriptionService) {}

    /**
     * Execute the getExpiringSoon use case.
     * @param days - The number required by the service method.
     * @returns A promise with the service result of type Promise<Subscription[]>.
     */
    async execute(days: number): Promise<Subscription[]> {
        const result = await this.service.getExpiringSoon(days);

        return result;
    }
}
