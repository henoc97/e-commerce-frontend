import { CartItemService } from '../../services/cart-item.service';
import { CartItem } from '../../../domain/entities/cart-item.entity';

/**
 * Use case class for updateQuantity.
 * This class encapsulates the business logic for updateQuantity.
 * It interacts with the CartItem service to perform operations on the cartitem repository.
 */
export class UpdateQuantityCartItem {
    constructor(private readonly service: CartItemService) {}

    /**
     * Execute the updateQuantity use case.
     * @param id - The number required by the service method.
     * @param quantity - The number required by the service method.
     * @returns A promise with the service result of type Promise<CartItem>.
     */
    async execute(id: number, quantity: number): Promise<CartItem> {
        const result = await this.service.updateQuantity(id, quantity);

        return result;
    }
}
