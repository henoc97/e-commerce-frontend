import { ProductImageService } from '../../services/product-image.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for deleteByProductId.
 * This class encapsulates the business logic for deleteByProductId.
 * It interacts with the ProductImage service to perform operations on the productimage repository.
 */
@injectable()
export class DeleteByProductIdProductImage {
    constructor(private readonly service: ProductImageService) {}

    /**
     * Execute the deleteByProductId use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(productId: number): Promise<boolean> {
        const result = await this.service.deleteByProductId(productId);

        return result;
    }
}
