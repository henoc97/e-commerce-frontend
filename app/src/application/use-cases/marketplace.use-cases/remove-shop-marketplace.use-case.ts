import { MarketplaceService } from '../../services/marketplace.service';
import { Marketplace } from '../../../domain/entities/marketplace.entity';

/**
 * Use case class for removeShop.
 * This class encapsulates the business logic for removeShop.
 * It interacts with the Marketplace service to perform operations on the marketplace repository.
 */
export class RemoveShopMarketplace {
    constructor(private readonly service: MarketplaceService) {}

    /**
     * Execute the removeShop use case.
     * @param marketplaceId - The number required by the service method.
     * @param shopId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Marketplace>.
     */
    async execute(marketplaceId: number, shopId: number): Promise<Marketplace> {
        const result = await this.service.removeShop(marketplaceId, shopId);

        return result;
    }
}
