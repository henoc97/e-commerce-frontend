import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';

/**
 * Use case class for removeProduct.
 * This class encapsulates the business logic for removeProduct.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
export class RemoveProductShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the removeProduct use case.
     * @param shopId - The number required by the service method.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Shop>.
     */
    async execute(shopId: number, productId: number): Promise<Shop> {
        const result = await this.service.removeProduct(shopId, productId);

        return result;
    }
}
