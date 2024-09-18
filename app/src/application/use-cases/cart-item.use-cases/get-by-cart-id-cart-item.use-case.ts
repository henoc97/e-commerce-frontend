import { CartItemService } from '../../services/cart-item.service';
import { CartItem } from '../../../domain/entities/cart-item.entity';

/**
 * Use case class for getByCartId.
 * This class encapsulates the business logic for getByCartId.
 * It interacts with the CartItem service to perform operations on the cartitem repository.
 */
export class GetByCartIdCartItem {
    constructor(private readonly service: CartItemService) {}

    /**
     * Execute the getByCartId use case.
     * @param cartId - The number required by the service method.
     * @returns A promise with the service result of type Promise<CartItem[]>.
     */
    async execute(cartId: number): Promise<CartItem[]> {
        const result = await this.service.getByCartId(cartId);

        return result;
    }
}
