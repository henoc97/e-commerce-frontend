import { CartItem } from '@/app/src/domain/entities/cart-item.entity';
import { CartService } from '../../services/cart.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getItems.
 * This class encapsulates the business logic for getItems.
 * It interacts with the Cart service to perform operations on the cart repository.
 */
@injectable()
export class GetItemsCart {
    constructor(private readonly service: CartService) {}

    /**
     * Execute the getItems use case.
     * @param cartId - The number required by the service method.
     * @returns A promise with the service result of type Promise<CartItem[]>.
     */
    async execute(cartId: number): Promise<CartItem[]> {
        const result = await this.service.getItems(cartId);

        return result;
    }
}
