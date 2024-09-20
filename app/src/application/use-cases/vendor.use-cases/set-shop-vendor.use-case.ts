import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../../domain/entities/vendor.entity';
import { Shop } from '@/app/src/domain/entities/shop.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for setShop.
 * This class encapsulates the business logic for setShop.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
@injectable()
export class SetShopVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the setShop use case.
     * @param vendorId - The number required by the service method.
     * @param shop - The Shop required by the service method.
     * @returns A promise with the service result of type Promise<Vendor>.
     */
    async execute(vendorId: number, shop: Shop): Promise<Vendor> {
        const result = await this.service.setShop(vendorId, shop);

        return result;
    }
}
