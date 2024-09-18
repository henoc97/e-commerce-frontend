import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';
import { Product } from '../../../domain/entities/product.entity';

/**
 * Use case class for addProduct.
 * This class encapsulates the business logic for addProduct.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
export class AddProductShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the addProduct use case.
     * @param shopId - The number required by the service method.
     * @param product - The Product required by the service method.
     * @returns A promise with the service result of type Promise<Shop>.
     */
    async execute(shopId: number, product: Product): Promise<Shop> {
        const result = await this.service.addProduct(shopId, product);

        return result;
    }
}
