import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class GetByIdProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Product | null>.
     */
    async execute(id: number): Promise<Product | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
