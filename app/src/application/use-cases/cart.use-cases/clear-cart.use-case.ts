import { CartService } from '../../services/cart.service';
import { Cart } from '../../../domain/entities/cart.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for clear.
 * This class encapsulates the business logic for clear.
 * It interacts with the Cart service to perform operations on the cart repository.
 */
@injectable()
export class ClearCart {
    constructor(private readonly service: CartService) {}

    /**
     * Execute the clear use case.
     * @param cartId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Cart>.
     */
    async execute(cartId: number): Promise<Cart> {
        const result = await this.service.clear(cartId);

        return result;
    }
}
