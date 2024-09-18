import { CartItemService } from '../../services/cart-item.service';
import { CartItem } from '../../../domain/entities/cart-item.entity';

/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the CartItem service to perform operations on the cartitem repository.
 */
export class UpdateCartItem {
    constructor(private readonly service: CartItemService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param data - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<CartItem>.
     */
    async execute(id: number, data: Partial<CartItem>): Promise<CartItem> {
        const result = await this.service.update(id, data);

        return result;
    }
}
