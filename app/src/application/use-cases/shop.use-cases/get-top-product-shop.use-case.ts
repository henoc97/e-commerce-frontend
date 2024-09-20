import { Product } from '../../../domain/entities/product.entity';
import { ShopService } from '../../services/shop.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getTopProduct.
 * This class encapsulates the business logic for getTopProduct.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
@injectable()
export class GetTopProductShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the getTopProduct use case.
     * @param shopId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(shopId: number): Promise<Product> {
        const result = await this.service.getTopProduct(shopId);

        return result;
    }
}
