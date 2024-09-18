import { VendorService } from '../../services/vendor.service';
import { Vendor } from '../../../domain/entities/vendor.entity';

/**
 * Use case class for getall.
 * This class encapsulates the business logic for getall.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
export class GetallVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the getall use case.
     * @returns A promise with the service result of type Promise<Vendor[]>.
     */
    async execute(): Promise<Vendor[]> {
        const result = await this.service.getall();

        return result;
    }
}
