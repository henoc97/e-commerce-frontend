import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for removeAddress.
 * This class encapsulates the business logic for removeAddress.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class RemoveAddressUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the removeAddress use case.
     * @param userId - The number required by the service method.
     * @param addressId - The number required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(userId: number, addressId: number): Promise<User> {
        const result = await this.service.removeAddress(userId, addressId);

        return result;
    }
}
