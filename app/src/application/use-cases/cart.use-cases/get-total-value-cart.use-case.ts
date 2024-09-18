import { CartService } from '../../services/cart.service';

/**
 * Use case class for getTotalValue.
 * This class encapsulates the business logic for getTotalValue.
 * It interacts with the Cart service to perform operations on the cart repository.
 */
export class GetTotalValueCart {
    constructor(private readonly service: CartService) {}

    /**
     * Execute the getTotalValue use case.
     * @param cartId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(cartId: number): Promise<number> {
        const result = await this.service.getTotalValue(cartId);

        return result;
    }
}
