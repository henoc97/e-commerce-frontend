import { Product } from '../../../domain/entities/product.entity';
import { VendorService } from '../../services/vendor.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getProducts.
 * This class encapsulates the business logic for getProducts.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
@injectable()
export class GetProductsVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the getProducts use case.
     * @param vendorId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Product[]>.
     */
    async execute(vendorId: number): Promise<Product[]> {
        const result = await this.service.getProducts(vendorId);

        return result;
    }
}
