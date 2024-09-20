import { AddressService } from '../../services/address.service';
import { Address } from '../../../domain/entities/address.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByCountry.
 * This class encapsulates the business logic for getByCountry.
 * It interacts with the Address service to perform operations on the address repository.
 */
@injectable()
export class GetByCountryAddress {
    constructor(private readonly service: AddressService) {}

    /**
     * Execute the getByCountry use case.
     * @param country - The string required by the service method.
     * @returns A promise with the service result of type Promise<Address[]>.
     */
    async execute(country: string): Promise<Address[]> {
        const result = await this.service.getByCountry(country);

        return result;
    }
}
