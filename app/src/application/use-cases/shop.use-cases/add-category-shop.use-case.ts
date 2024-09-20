import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';
import { Category } from '../../../domain/entities/category.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for addCategory.
 * This class encapsulates the business logic for addCategory.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
@injectable()
export class AddCategoryShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the addCategory use case.
     * @param shopId - The number required by the service method.
     * @param category - The Category required by the service method.
     * @returns A promise with the service result of type Promise<Shop>.
     */
    async execute(shopId: number, category: Category): Promise<Shop> {
        const result = await this.service.addCategory(shopId, category);

        return result;
    }
}
