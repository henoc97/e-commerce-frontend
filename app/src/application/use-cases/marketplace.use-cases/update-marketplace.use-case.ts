import { MarketplaceService } from '../../services/marketplace.service';
import { Marketplace } from '../../../domain/entities/marketplace.entity';

/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Marketplace service to perform operations on the marketplace repository.
 */
export class UpdateMarketplace {
    constructor(private readonly service: MarketplaceService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param data - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Marketplace>.
     */
    async execute(
        id: number,
        data: Partial<Marketplace>
    ): Promise<Marketplace> {
        const result = await this.service.update(id, data);

        return result;
    }
}
