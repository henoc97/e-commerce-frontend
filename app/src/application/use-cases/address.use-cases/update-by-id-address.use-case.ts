import { AddressService } from '../../services/address.service';
import { Address } from '../../../domain/entities/address.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for updateById.
 * This class encapsulates the business logic for updateById.
 * It interacts with the Address service to perform operations on the address repository.
 */
@injectable()
export class UpdateByIdAddress {
    constructor(private readonly service: AddressService) {}

    /**
     * Execute the updateById use case.
     * @param id - The number required by the service method.
     * @param updateData - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Address>.
     */
    async execute(id: number, updateData: Partial<Address>): Promise<Address> {
        const result = await this.service.updateById(id, updateData);

        return result;
    }
}
