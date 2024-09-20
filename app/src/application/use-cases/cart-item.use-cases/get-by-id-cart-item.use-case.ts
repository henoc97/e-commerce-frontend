import { CartItemService } from '../../services/cart-item.service';
import { CartItem } from '../../../domain/entities/cart-item.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the CartItem service to perform operations on the cartitem repository.
 */
@injectable()
export class GetByIdCartItem {
    constructor(private readonly service: CartItemService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<CartItem | null>.
     */
    async execute(id: number): Promise<CartItem | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
