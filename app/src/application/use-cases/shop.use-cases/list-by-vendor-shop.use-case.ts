import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for listByVendor.
 * This class encapsulates the business logic for listByVendor.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
@injectable()
export class ListByVendorShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the listByVendor use case.
     * @param vendorId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Shop[]>.
     */
    async execute(vendorId: number): Promise<Shop[]> {
        const result = await this.service.listByVendor(vendorId);

        return result;
    }
}
