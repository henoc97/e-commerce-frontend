import { SubscriptionService } from '../../services/subscription.service';

/**
 * Use case class for countByVendor.
 * This class encapsulates the business logic for countByVendor.
 * It interacts with the Subscription service to perform operations on the subscription repository.
 */
export class CountByVendorSubscription {
    constructor(private readonly service: SubscriptionService) {}

    /**
     * Execute the countByVendor use case.
     * @param vendorId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(vendorId: number): Promise<number> {
        const result = await this.service.countByVendor(vendorId);

        return result;
    }
}
