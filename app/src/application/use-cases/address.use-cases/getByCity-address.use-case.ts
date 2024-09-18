import { AddressService } from '../../services/address.service';
import { Address } from '../../../domain/entities/address.entity';

/**
 * Use case class for getByCity.
 * This class encapsulates the business logic for getByCity.
 * It interacts with the Address service to perform operations on the address repository.
 */
export class GetByCityAddress {
    constructor(private readonly service: AddressService) {}

    /**
     * Execute the getByCity use case.
     * @param city - The string required by the service method.
     * @returns A promise with the service result of type Promise<Address[]>.
     */
    async execute(city: string): Promise<Address[]> {
        const result = await this.service.getByCity(city);

        return result;
    }
}
