import { MarketplaceService } from '../../services/marketplace.service';
import { Marketplace } from '../../../domain/entities/marketplace.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for list.
 * This class encapsulates the business logic for list.
 * It interacts with the Marketplace service to perform operations on the marketplace repository.
 */
@injectable()
export class ListMarketplace {
    constructor(private readonly service: MarketplaceService) {}

    /**
     * Execute the list use case.
     * @returns A promise with the service result of type Promise<Marketplace[]>.
     */
    async execute(): Promise<Marketplace[]> {
        const result = await this.service.list();

        return result;
    }
}
