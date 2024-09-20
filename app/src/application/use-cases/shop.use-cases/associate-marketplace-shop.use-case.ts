import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';
import { Marketplace } from '../../../domain/entities/marketplace.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for associateMarketplace.
 * This class encapsulates the business logic for associateMarketplace.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
@injectable()
export class AssociateMarketplaceShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the associateMarketplace use case.
     * @param shopId - The number required by the service method.
     * @param marketplace - The Marketplace required by the service method.
     * @returns A promise with the service result of type Promise<Shop>.
     */
    async execute(shopId: number, marketplace: Marketplace): Promise<Shop> {
        const result = await this.service.associateMarketplace(
            shopId,
            marketplace
        );

        return result;
    }
}
