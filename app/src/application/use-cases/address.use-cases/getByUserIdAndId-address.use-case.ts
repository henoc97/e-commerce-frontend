import { AddressService } from '../../services/address.service';
import { Address } from '../../../domain/entities/address.entity';

/**
 * Use case class for getByUserIdAndId.
 * This class encapsulates the business logic for getByUserIdAndId.
 * It interacts with the Address service to perform operations on the address repository.
 */
export class GetByUserIdAndIdAddress {
    constructor(private readonly service: AddressService) {}

    /**
     * Execute the getByUserIdAndId use case.
     * @param userId - The number required by the service method.
     * @param addressId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Address | null>.
     */
    async execute(userId: number, addressId: number): Promise<Address | null> {
        const result = await this.service.getByUserIdAndId(userId, addressId);

        if (!result) return null;

        return result;
    }
}
