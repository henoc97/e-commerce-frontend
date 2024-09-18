import { AddressService } from '../../services/address.service';
import { Address } from '../../../domain/entities/address.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Address service to perform operations on the address repository.
 */
export class CreateAddress {
    constructor(private readonly service: AddressService) {}

    /**
     * Execute the create use case.
     * @param address - The Address required by the service method.
     * @returns A promise with the service result of type Promise<Address>.
     */
    async execute(address: Address): Promise<Address> {
        const result = await this.service.create(address);

        return result;
    }
}
