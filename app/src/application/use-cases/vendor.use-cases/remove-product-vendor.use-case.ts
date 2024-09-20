import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../../domain/entities/vendor.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for removeProduct.
 * This class encapsulates the business logic for removeProduct.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
@injectable()
export class RemoveProductVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the removeProduct use case.
     * @param vendorId - The number required by the service method.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Vendor>.
     */
    async execute(vendorId: number, productId: number): Promise<Vendor> {
        const result = await this.service.removeProduct(vendorId, productId);

        return result;
    }
}
