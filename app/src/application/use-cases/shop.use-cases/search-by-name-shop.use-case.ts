import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for searchByName.
 * This class encapsulates the business logic for searchByName.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
@injectable()
export class SearchByNameShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the searchByName use case.
     * @param name - The string required by the service method.
     * @returns A promise with the service result of type Promise<Shop[]>.
     */
    async execute(name: string): Promise<Shop[]> {
        const result = await this.service.searchByName(name);

        return result;
    }
}
