import { MarketplaceService } from '../../services/marketplace.service';
import { Marketplace } from '../../../domain/entities/marketplace.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Marketplace service to perform operations on the marketplace repository.
 */
@injectable()
export class CreateMarketplace {
    constructor(private readonly service: MarketplaceService) {}

    /**
     * Execute the create use case.
     * @param marketplace - The Marketplace required by the service method.
     * @returns A promise with the service result of type Promise<Marketplace>.
     */
    async execute(marketplace: Marketplace): Promise<Marketplace> {
        const result = await this.service.create(marketplace);

        return result;
    }
}
