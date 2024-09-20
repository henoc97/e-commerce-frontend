import { AddressService } from '../../services/address.service';
import { Address } from '../../../domain/entities/address.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Address service to perform operations on the address repository.
 */
@injectable()
export class GetByIdAddress {
    constructor(private readonly service: AddressService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Address | null>.
     */
    async execute(id: number): Promise<Address | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
