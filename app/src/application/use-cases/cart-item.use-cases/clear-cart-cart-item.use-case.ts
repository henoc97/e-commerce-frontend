import { CartItemService } from '../../services/cart-item.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for clearCart.
 * This class encapsulates the business logic for clearCart.
 * It interacts with the CartItem service to perform operations on the cartitem repository.
 */
@injectable()
export class ClearCartCartItem {
    constructor(private readonly service: CartItemService) {}

    /**
     * Execute the clearCart use case.
     * @param cartId - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(cartId: number): Promise<boolean> {
        const result = await this.service.clearCart(cartId);

        return result;
    }
}
