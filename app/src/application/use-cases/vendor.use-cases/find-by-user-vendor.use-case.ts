import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../../domain/entities/vendor.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for findByUser.
 * This class encapsulates the business logic for findByUser.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
@injectable()
export class FindByUserVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the findByUser use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Vendor[]>.
     */
    async execute(userId: number): Promise<Vendor[]> {
        const result = await this.service.findByUser(userId);

        return result;
    }
}
