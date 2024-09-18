import { CartService } from '../../services/cart.service';
import { Cart } from '../../../domain/entities/cart.entity';

/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Cart service to perform operations on the cart repository.
 */
export class UpdateCart {
    constructor(private readonly service: CartService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param data - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Cart>.
     */
    async execute(id: number, data: Partial<Cart>): Promise<Cart> {
        const result = await this.service.update(id, data);

        return result;
    }
}
