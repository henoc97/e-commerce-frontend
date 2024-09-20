import { ProductService } from '../../services/product.service';
import { Product } from '../../../domain/entities/product.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for updateStock.
 * This class encapsulates the business logic for updateStock.
 * It interacts with the Product service to perform operations on the product repository.
 */
@injectable()
export class UpdateStockProduct {
    constructor(private readonly service: ProductService) {}

    /**
     * Execute the updateStock use case.
     * @param productId - The number required by the service method.
     * @param quantity - The number required by the service method.
     * @returns A promise with the service result of type Promise<Product>.
     */
    async execute(productId: number, quantity: number): Promise<Product> {
        const result = await this.service.updateStock(productId, quantity);

        return result;
    }
}
