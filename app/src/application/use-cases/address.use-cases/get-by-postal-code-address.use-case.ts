import { AddressService } from '../../services/address.service';
import { Address } from '../../../domain/entities/address.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByPostalCode.
 * This class encapsulates the business logic for getByPostalCode.
 * It interacts with the Address service to perform operations on the address repository.
 */
@injectable()
export class GetByPostalCodeAddress {
    constructor(private readonly service: AddressService) {}

    /**
     * Execute the getByPostalCode use case.
     * @param postalCode - The string required by the service method.
     * @returns A promise with the service result of type Promise<Address[]>.
     */
    async execute(postalCode: string): Promise<Address[]> {
        const result = await this.service.getByPostalCode(postalCode);

        return result;
    }
}
