import { ProductImageService } from '../../services/product-image.service';
import { ProductImage } from '../../../domain/entities/product-image.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the ProductImage service to perform operations on the productimage repository.
 */
@injectable()
export class GetByIdProductImage {
    constructor(private readonly service: ProductImageService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<ProductImage | null>.
     */
    async execute(id: number): Promise<ProductImage | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
