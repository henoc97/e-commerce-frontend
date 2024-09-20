import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for findByName.
 * This class encapsulates the business logic for findByName.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class FindByNameProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the findByName use case.
     * @param name - The string required by the service method.
     * @returns A promise with the service result of type Promise<Product[]>.
     */
    async execute(name: string): Promise<Product[]> {
        const result = await this.service.findByName(name);

        return result;
    }
}
