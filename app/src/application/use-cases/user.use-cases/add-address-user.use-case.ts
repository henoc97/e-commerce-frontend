import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';
import { Address } from '../../../domain/entities/address.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for addAddress.
 * This class encapsulates the business logic for addAddress.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class AddAddressUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the addAddress use case.
     * @param userId - The number required by the service method.
     * @param address - The Address required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(userId: number, address: Address): Promise<User> {
        const result = await this.service.addAddress(userId, address);

        return result;
    }
}
