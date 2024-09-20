import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../../domain/entities/vendor.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
@injectable()
export class UpdateVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param data - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Vendor>.
     */
    async execute(id: number, data: Partial<Vendor>): Promise<Vendor> {
        const result = await this.service.update(id, data);

        return result;
    }
}
