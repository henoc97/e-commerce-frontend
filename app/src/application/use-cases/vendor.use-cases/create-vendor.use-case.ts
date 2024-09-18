import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../../domain/entities/vendor.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
export class CreateVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the create use case.
     * @param vendor - The Vendor required by the service method.
     * @returns A promise with the service result of type Promise<Vendor>.
     */
    async execute(vendor: Vendor): Promise<Vendor> {
        const result = await this.service.create(vendor);

        return result;
    }
}
