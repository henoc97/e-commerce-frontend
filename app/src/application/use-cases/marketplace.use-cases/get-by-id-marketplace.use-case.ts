import { MarketplaceService } from '../../services/marketplace.service';
import { Marketplace } from '../../../domain/entities/marketplace.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Marketplace service to perform operations on the marketplace repository.
 */
@injectable()
export class GetByIdMarketplace {
    constructor(private readonly service: MarketplaceService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Marketplace | null>.
     */
    async execute(id: number): Promise<Marketplace | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
