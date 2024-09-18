import { AddressService } from '../../services/address.service';
import { Address } from '../../../domain/entities/address.entity';

/**
 * Use case class for getAllByUserId.
 * This class encapsulates the business logic for getAllByUserId.
 * It interacts with the Address service to perform operations on the address repository.
 */
export class GetAllByUserIdAddress {
    constructor(private readonly service: AddressService) {}

    /**
     * Execute the getAllByUserId use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Address[]>.
     */
    async execute(userId: number): Promise<Address[]> {
        const result = await this.service.getAllByUserId(userId);

        return result;
    }
}
