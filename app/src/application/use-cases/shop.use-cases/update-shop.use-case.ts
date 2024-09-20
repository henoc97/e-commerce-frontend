import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
@injectable()
export class UpdateShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Shop>.
     */
    async execute(id: number, updates: Partial<Shop>): Promise<Shop> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
