import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from '../../../domain/entities/subscription.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByVendor.
 * This class encapsulates the business logic for getByVendor.
 * It interacts with the Subscription service to perform operations on the subscription repository.
 */
@injectable()
export class GetByVendorSubscription {
    constructor(private readonly service: SubscriptionService) {}

    /**
     * Execute the getByVendor use case.
     * @param vendorId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Subscription[]>.
     */
    async execute(vendorId: number): Promise<Subscription[]> {
        const result = await this.service.getByVendor(vendorId);

        return result;
    }
}
