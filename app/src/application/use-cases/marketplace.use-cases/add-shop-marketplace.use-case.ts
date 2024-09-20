import { MarketplaceService } from '../../services/marketplace.service';
import { Marketplace } from '../../../domain/entities/marketplace.entity';
import { Shop } from '@/app/src/domain/entities/shop.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for addShop.
 * This class encapsulates the business logic for addShop.
 * It interacts with the Marketplace service to perform operations on the marketplace repository.
 */
@injectable()
export class AddShopMarketplace {
    constructor(private readonly service: MarketplaceService) {}

    /**
     * Execute the addShop use case.
     * @param marketplaceId - The number required by the service method.
     * @param shop - The Shop required by the service method.
     * @returns A promise with the service result of type Promise<Marketplace>.
     */
    async execute(marketplaceId: number, shop: Shop): Promise<Marketplace> {
        const result = await this.service.addShop(marketplaceId, shop);

        return result;
    }
}
