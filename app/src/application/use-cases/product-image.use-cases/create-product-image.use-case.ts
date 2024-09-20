import { ProductImageService } from '../../services/product-image.service';
import { ProductImage } from '../../../domain/entities/product-image.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the ProductImage service to perform operations on the productimage repository.
 */
@injectable()
export class CreateProductImage {
    constructor(private readonly service: ProductImageService) {}

    /**
     * Execute the create use case.
     * @param image - The ProductImage required by the service method.
     * @returns A promise with the service result of type Promise<ProductImage>.
     */
    async execute(image: ProductImage): Promise<ProductImage> {
        const result = await this.service.create(image);

        return result;
    }
}
