import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getMostRecent.
 * This class encapsulates the business logic for getMostRecent.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
@injectable()
export class GetMostRecentShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the getMostRecent use case.
     * @returns A promise with the service result of type Promise<Shop | null>.
     */
    async execute(): Promise<Shop | null> {
        const result = await this.service.getMostRecent();

        if (!result) return null;

        return result;
    }
}
