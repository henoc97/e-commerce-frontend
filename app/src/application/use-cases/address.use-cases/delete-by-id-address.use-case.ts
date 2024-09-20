import { AddressService } from '../../services/address.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for deleteById.
 * This class encapsulates the business logic for deleteById.
 * It interacts with the Address service to perform operations on the address repository.
 */
@injectable()
export class DeleteByIdAddress {
    constructor(private readonly service: AddressService) {}

    /**
     * Execute the deleteById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(id: number): Promise<boolean> {
        const result = await this.service.deleteById(id);

        return result;
    }
}
