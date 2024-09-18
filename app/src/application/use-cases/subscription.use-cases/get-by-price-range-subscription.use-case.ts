import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../../domain/entities/subscription.entity';

/**
 * Use case class for getByPriceRange.
 * This class encapsulates the business logic for getByPriceRange.
 * It interacts with the Subscription service to perform operations on the subscription repository.
 */
export class GetByPriceRangeSubscription {
    constructor(private readonly service: SubscriptionService) {}

    /**
     * Execute the getByPriceRange use case.
     * @param minPrice - The number required by the service method.
     * @param maxPrice - The number required by the service method.
     * @returns A promise with the service result of type Promise<Subscription[]>.
     */
    async execute(minPrice: number, maxPrice: number): Promise<Subscription[]> {
        const result = await this.service.getByPriceRange(minPrice, maxPrice);

        return result;
    }
}
