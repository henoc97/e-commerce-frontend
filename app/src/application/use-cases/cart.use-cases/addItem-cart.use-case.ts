import { CartService } from '../../services/cart.service';
import { Cart } from '../../../domain/entities/cart.entity';
import { CartItem } from '@/app/src/domain/entities/cart-item.entity';

/**
 * Use case class for addItem.
 * This class encapsulates the business logic for addItem.
 * It interacts with the Cart service to perform operations on the cart repository.
 */
export class AddItemCart {
    constructor(private readonly service: CartService) {}

    /**
     * Execute the addItem use case.
     * @param cartId - The number required by the service method.
     * @param item - The CartItem required by the service method.
     * @returns A promise with the service result of type Promise<Cart>.
     */
    async execute(cartId: number, item: CartItem): Promise<Cart> {
        const result = await this.service.addItem(cartId, item);

        return result;
    }
}
