import { Subscription } from '../../../domain/entities/subscription.entity';
import { VendorService } from '../../services/vendor.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getSubscription.
 * This class encapsulates the business logic for getSubscription.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
@injectable()
export class GetSubscriptionVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the getSubscription use case.
     * @param vendorId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Subscription | null>.
     */
    async execute(vendorId: number): Promise<Subscription | null> {
        const result = await this.service.getSubscription(vendorId);

        if (!result) return null;

        return result;
    }
}
