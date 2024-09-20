import { CartService } from '../../services/cart.service';
import { Cart } from '../../../domain/entities/cart.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Cart service to perform operations on the cart repository.
 */
@injectable()
export class CreateCart {
    constructor(private readonly service: CartService) {}

    /**
     * Execute the create use case.
     * @param cart - The Cart required by the service method.
     * @returns A promise with the service result of type Promise<Cart>.
     */
    async execute(cart: Cart): Promise<Cart> {
        const result = await this.service.create(cart);

        return result;
    }
}
