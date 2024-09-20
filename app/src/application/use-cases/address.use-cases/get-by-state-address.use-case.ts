import { AddressService } from '../../services/address.service';
import { Address } from '../../../domain/entities/address.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByState.
 * This class encapsulates the business logic for getByState.
 * It interacts with the Address service to perform operations on the address repository.
 */
@injectable()
export class GetByStateAddress {
    constructor(private readonly service: AddressService) {}

    /**
     * Execute the getByState use case.
     * @param state - The string required by the service method.
     * @returns A promise with the service result of type Promise<Address[]>.
     */
    async execute(state: string): Promise<Address[]> {
        const result = await this.service.getByState(state);

        return result;
    }
}
