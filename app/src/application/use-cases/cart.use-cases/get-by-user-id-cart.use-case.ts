import { CartService } from '../../services/cart.service';
import { Cart } from '../../../domain/entities/cart.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByUserId.
 * This class encapsulates the business logic for getByUserId.
 * It interacts with the Cart service to perform operations on the cart repository.
 */
@injectable()
export class GetByUserIdCart {
    constructor(private readonly service: CartService) {}

    /**
     * Execute the getByUserId use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Cart | null>.
     */
    async execute(userId: number): Promise<Cart | null> {
        const result = await this.service.getByUserId(userId);

        if (!result) return null;

        return result;
    }
}
