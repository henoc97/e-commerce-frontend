import { Marketplace } from '../../../domain/entities/marketplace.entity';
import { ShopService } from '../../services/shop.service';

/**
 * Use case class for getMarketplace.
 * This class encapsulates the business logic for getMarketplace.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
export class GetMarketplaceShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the getMarketplace use case.
     * @param shopId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Marketplace | null>.
     */
    async execute(shopId: number): Promise<Marketplace | null> {
        const result = await this.service.getMarketplace(shopId);

        if (!result) return null;

        return result;
    }
}
