import { CartService } from '../../services/cart.service';
import { Cart } from '../../../domain/entities/cart.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Cart service to perform operations on the cart repository.
 */
@injectable()
export class GetByIdCart {
    constructor(private readonly service: CartService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Cart | null>.
     */
    async execute(id: number): Promise<Cart | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
