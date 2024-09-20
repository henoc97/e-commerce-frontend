import { CartService } from '../../services/cart.service';
import { Cart } from '../../../domain/entities/cart.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for mergeCarts.
 * This class encapsulates the business logic for mergeCarts.
 * It interacts with the Cart service to perform operations on the cart repository.
 */
@injectable()
export class MergeCartsCart {
    constructor(private readonly service: CartService) {}

    /**
     * Execute the mergeCarts use case.
     * @param sourceCartId - The number required by the service method.
     * @param targetCartId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Cart>.
     */
    async execute(sourceCartId: number, targetCartId: number): Promise<Cart> {
        const result = await this.service.mergeCarts(
            sourceCartId,
            targetCartId
        );

        return result;
    }
}
