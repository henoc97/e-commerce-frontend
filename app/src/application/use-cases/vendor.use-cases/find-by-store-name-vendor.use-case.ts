import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../../domain/entities/vendor.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for findByStoreName.
 * This class encapsulates the business logic for findByStoreName.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
@injectable()
export class FindByStoreNameVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the findByStoreName use case.
     * @param storeName - The string required by the service method.
     * @returns A promise with the service result of type Promise<Vendor[]>.
     */
    async execute(storeName: string): Promise<Vendor[]> {
        const result = await this.service.findByStoreName(storeName);

        return result;
    }
}
