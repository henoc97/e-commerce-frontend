import { ProductImageService } from '../../services/product-image.service';
import { ProductImage } from '../../../domain/entities/product-image.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getPrimaryImage.
 * This class encapsulates the business logic for getPrimaryImage.
 * It interacts with the ProductImage service to perform operations on the productimage repository.
 */
@injectable()
export class GetPrimaryImageProductImage {
    constructor(private readonly service: ProductImageService) {}

    /**
     * Execute the getPrimaryImage use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<ProductImage | null>.
     */
    async execute(productId: number): Promise<ProductImage | null> {
        const result = await this.service.getPrimaryImage(productId);

        if (!result) return null;

        return result;
    }
}
