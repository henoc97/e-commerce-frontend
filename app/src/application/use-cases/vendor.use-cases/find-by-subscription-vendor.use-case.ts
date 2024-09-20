import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../../domain/entities/vendor.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for findBySubscription.
 * This class encapsulates the business logic for findBySubscription.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
@injectable()
export class FindBySubscriptionVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the findBySubscription use case.
     * @param subscriptionId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Vendor[]>.
     */
    async execute(subscriptionId: number): Promise<Vendor[]> {
        const result = await this.service.findBySubscription(subscriptionId);

        return result;
    }
}
