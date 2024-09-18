import { CartItemService } from '../../services/cart-item.service';
import { CartItem } from '../../../domain/entities/cart-item.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the CartItem service to perform operations on the cartitem repository.
 */
export class CreateCartItem {
    constructor(private readonly service: CartItemService) {}

    /**
     * Execute the create use case.
     * @param item - The CartItem required by the service method.
     * @returns A promise with the service result of type Promise<CartItem>.
     */
    async execute(item: CartItem): Promise<CartItem> {
        const result = await this.service.create(item);

        return result;
    }
}
