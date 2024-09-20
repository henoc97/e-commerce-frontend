import { Category } from '../../../domain/entities/category.entity';
import { ShopService } from '../../services/shop.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for listCategories.
 * This class encapsulates the business logic for listCategories.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
@injectable()
export class ListCategoriesShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the listCategories use case.
     * @param shopId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Category[]>.
     */
    async execute(shopId: number): Promise<Category[]> {
        const result = await this.service.listCategories(shopId);

        return result;
    }
}
