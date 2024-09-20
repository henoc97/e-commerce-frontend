import { Address } from '../../../domain/entities/address.entity';
import { UserService } from '../../services/user.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getAddresses.
 * This class encapsulates the business logic for getAddresses.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class GetAddressesUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getAddresses use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Address[]>.
     */
    async execute(userId: number): Promise<Address[]> {
        const result = await this.service.getAddresses(userId);

        return result;
    }
}
