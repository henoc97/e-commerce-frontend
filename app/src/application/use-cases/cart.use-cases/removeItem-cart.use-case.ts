import { CartService } from '../../services/cart.service';
import { Cart } from '../../../domain/entities/cart.entity';

/**
 * Use case class for removeItem.
 * This class encapsulates the business logic for removeItem.
 * It interacts with the Cart service to perform operations on the cart repository.
 */
export class RemoveItemCart {
    constructor(private readonly service: CartService) {}

    /**
     * Execute the removeItem use case.
     * @param cartId - The number required by the service method.
     * @param itemId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Cart>.
     */
    async execute(cartId: number, itemId: number): Promise<Cart> {
        const result = await this.service.removeItem(cartId, itemId);

        return result;
    }
}
