import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../../domain/entities/subscription.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Subscription service to perform operations on the subscription repository.
 */
@injectable()
export class GetByIdSubscription {
    constructor(private readonly service: SubscriptionService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Subscription | null>.
     */
    async execute(id: number): Promise<Subscription | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
