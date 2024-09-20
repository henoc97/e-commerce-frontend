import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for removeImage.
 * This class encapsulates the business logic for removeImage.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class RemoveImageProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the removeImage use case.
     * @param productId - The number required by the service method.
     * @param imageId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(productId: number, imageId: number): Promise<Product> {
        const result = await this.service.removeImage(productId, imageId);

        return result;
    }
}
