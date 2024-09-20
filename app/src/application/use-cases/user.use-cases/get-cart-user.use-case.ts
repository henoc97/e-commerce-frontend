import { Cart } from '../../../domain/entities/cart.entity';
import { UserService } from '../../services/user.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getCart.
 * This class encapsulates the business logic for getCart.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class GetCartUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getCart use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Cart | null>.
     */
    async execute(userId: number): Promise<Cart | null> {
        const result = await this.service.getCart(userId);

        if (!result) return null;

        return result;
    }
}
