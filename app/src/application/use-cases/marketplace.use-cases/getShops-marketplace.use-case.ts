import { Shop } from '@/app/src/domain/entities/shop.entity';
import { MarketplaceService } from '../../services/marketplace.service';

/**
 * Use case class for getShops.
 * This class encapsulates the business logic for getShops.
 * It interacts with the Marketplace service to perform operations on the marketplace repository.
 */
export class GetShopsMarketplace {
    constructor(private readonly service: MarketplaceService) {}

    /**
     * Execute the getShops use case.
     * @param marketplaceId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Shop[]>.
     */
    async execute(marketplaceId: number): Promise<Shop[]> {
        const result = await this.service.getShops(marketplaceId);

        return result;
    }
}
