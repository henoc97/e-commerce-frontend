import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../../domain/entities/vendor.entity';
import { Product } from '../../../domain/entities/product.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for addProduct.
 * This class encapsulates the business logic for addProduct.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
@injectable()
export class AddProductVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the addProduct use case.
     * @param vendorId - The number required by the service method.
     * @param product - The Product required by the service method.
     * @returns A promise with the service result of type Promise<Vendor>.
     */
    async execute(vendorId: number, product: Product): Promise<Vendor> {
        const result = await this.service.addProduct(vendorId, product);

        return result;
    }
}
