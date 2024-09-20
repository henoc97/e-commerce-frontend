import { CartItemService } from '../../services/cart-item.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for calculateCartTotal.
 * This class encapsulates the business logic for calculateCartTotal.
 * It interacts with the CartItem service to perform operations on the cartitem repository.
 */
@injectable()
export class CalculateCartTotalCartItem {
    constructor(private readonly service: CartItemService) {}

    /**
     * Execute the calculateCartTotal use case.
     * @param cartId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(cartId: number): Promise<number> {
        const result = await this.service.calculateCartTotal(cartId);

        return result;
    }
}
