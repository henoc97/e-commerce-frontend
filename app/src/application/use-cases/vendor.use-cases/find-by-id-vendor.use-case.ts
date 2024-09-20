import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../../domain/entities/vendor.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for findById.
 * This class encapsulates the business logic for findById.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
@injectable()
export class FindByIdVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the findById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Vendor | null>.
     */
    async execute(id: number): Promise<Vendor | null> {
        const result = await this.service.findById(id);

        if (!result) return null;

        return result;
    }
}
