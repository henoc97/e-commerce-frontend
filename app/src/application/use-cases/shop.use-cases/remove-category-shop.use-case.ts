import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for removeCategory.
 * This class encapsulates the business logic for removeCategory.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
@injectable()
export class RemoveCategoryShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the removeCategory use case.
     * @param shopId - The number required by the service method.
     * @param categoryId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Shop>.
     */
    async execute(shopId: number, categoryId: number): Promise<Shop> {
        const result = await this.service.removeCategory(shopId, categoryId);

        return result;
    }
}
