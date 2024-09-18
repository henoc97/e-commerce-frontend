import { VendorService } from '../../services/vendor.service';

/**
 * Use case class for delete.
 * This class encapsulates the business logic for delete.
 * It interacts with the Vendor service to perform operations on the vendor repository.
 */
export class DeleteVendor {
    constructor(private readonly service: VendorService) {}

    /**
     * Execute the delete use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(id: number): Promise<boolean> {
        const result = await this.service.delete(id);

        return result;
    }
}
