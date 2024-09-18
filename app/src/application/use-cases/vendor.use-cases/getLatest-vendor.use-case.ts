import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../../domain/entities/vendor.entity';

/**
 * Use case class for getLatest.
 * This class encapsulates the business logic for getLatest.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
export class GetLatestVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the getLatest use case.
     * @returns A promise with the service result of type Promise<Vendor | null>.
     */
    async execute(): Promise<Vendor | null> {
        const result = await this.service.getLatest();

        if (!result) return null;

        return result;
    }
}
