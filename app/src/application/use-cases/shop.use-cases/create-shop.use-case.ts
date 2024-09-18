import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
export class CreateShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the create use case.
     * @param shop - The Shop required by the service method.
     * @returns A promise with the service result of type Promise<Shop>.
     */
    async execute(shop: Shop): Promise<Shop> {
        const result = await this.service.create(shop);

        return result;
    }
}
