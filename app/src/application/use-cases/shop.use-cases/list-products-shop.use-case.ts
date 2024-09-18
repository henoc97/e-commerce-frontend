import { Product } from '../../../domain/entities/product.entity';
import { ShopService } from '../../services/shop.service';

/**
 * Use case class for listProducts.
 * This class encapsulates the business logic for listProducts.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
export class ListProductsShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the listProducts use case.
     * @param shopId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Product[]>.
     */
    async execute(shopId: number): Promise<Product[]> {
        const result = await this.service.listProducts(shopId);

        return result;
    }
}
