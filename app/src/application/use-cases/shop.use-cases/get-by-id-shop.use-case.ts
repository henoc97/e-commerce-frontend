import { ShopService } from '../../services/shop.service';
import { Shop } from '../../../domain/entities/shop.entity';

/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Shop service to perform operations on the shop repository.
 */
export class GetByIdShop {
    constructor(private readonly service: ShopService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Shop | null>.
     */
    async execute(id: number): Promise<Shop | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
