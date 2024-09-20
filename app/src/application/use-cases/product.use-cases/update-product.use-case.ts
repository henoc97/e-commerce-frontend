import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class UpdateProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(id: number, updates: Partial<Product>): Promise<Product> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
