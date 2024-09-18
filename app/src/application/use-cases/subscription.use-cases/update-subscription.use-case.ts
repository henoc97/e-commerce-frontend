import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../../domain/entities/subscription.entity';

/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Subscription service to perform operations on the subscription repository.
 */
export class UpdateSubscription {
    constructor(private readonly service: SubscriptionService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Subscription>.
     */
    async execute(
        id: number,
        updates: Partial<Subscription>
    ): Promise<Subscription> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
