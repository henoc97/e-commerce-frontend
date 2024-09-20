import { CartItemService } from '../../services/cart-item.service';
import { CartItem } from '../../../domain/entities/cart-item.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getHighestQuantityItem.
 * This class encapsulates the business logic for getHighestQuantityItem.
 * It interacts with the CartItem service to perform operations on the cartitem repository.
 */
@injectable()
export class GetHighestQuantityItemCartItem {
    constructor(private readonly service: CartItemService) {}

    /**
     * Execute the getHighestQuantityItem use case.
     * @param cartId - The number required by the service method.
     * @returns A promise with the service result of type Promise<CartItem | null>.
     */
    async execute(cartId: number): Promise<CartItem | null> {
        const result = await this.service.getHighestQuantityItem(cartId);

        if (!result) return null;

        return result;
    }
}
