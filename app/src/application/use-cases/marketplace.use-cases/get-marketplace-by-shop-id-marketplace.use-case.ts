import { MarketplaceService } from '../../services/marketplace.service';
import { Marketplace } from '../../../domain/entities/marketplace.entity';

/**
 * Use case class for getMarketplaceByShopId.
 * This class encapsulates the business logic for getMarketplaceByShopId.
 * It interacts with the Marketplace service to perform operations on the marketplace repository.
 */
export class GetMarketplaceByShopIdMarketplace {
    constructor(private readonly service: MarketplaceService) {}

    /**
     * Execute the getMarketplaceByShopId use case.
     * @param shopId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Marketplace | null>.
     */
    async execute(shopId: number): Promise<Marketplace | null> {
        const result = await this.service.getMarketplaceByShopId(shopId);

        if (!result) return null;

        return result;
    }
}
