import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../../domain/entities/subscription.entity';

/**
 * Use case class for getLatest.
 * This class encapsulates the business logic for getLatest.
 * It interacts with the Subscription service to perform operations on the subscription repository.
 */
export class GetLatestSubscription {
    constructor(private readonly service: SubscriptionService) {}

    /**
     * Execute the getLatest use case.
     * @returns A promise with the service result of type Promise<Subscription>.
     */
    async execute(): Promise<Subscription> {
        const result = await this.service.getLatest();

        return result;
    }
}
