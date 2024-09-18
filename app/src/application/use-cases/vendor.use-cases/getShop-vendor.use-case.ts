import { Shop } from '@/app/src/domain/entities/shop.entity';
import { VendorService } from '../../services/vendor.service';

/**
 * Use case class for getShop.
 * This class encapsulates the business logic for getShop.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
export class GetShopVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the getShop use case.
     * @param vendorId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Shop | null>.
     */
    async execute(vendorId: number): Promise<Shop | null> {
        const result = await this.service.getShop(vendorId);

        if (!result) return null;

        return result;
    }
}
