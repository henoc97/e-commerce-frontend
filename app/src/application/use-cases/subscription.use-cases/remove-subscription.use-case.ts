import { SubscriptionService } from '../../services/subscription.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for remove.
 * This class encapsulates the business logic for remove.
 * It interacts with the Subscription service to perform operations on the subscription repository.
 */
@injectable()
export class RemoveSubscription {
    constructor(private readonly service: SubscriptionService) {}

    /**
     * Execute the remove use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(id: number): Promise<boolean> {
        const result = await this.service.remove(id);

        return result;
    }
}
