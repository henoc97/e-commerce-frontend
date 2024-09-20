import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../../domain/entities/promotion.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByProduct.
 * This class encapsulates the business logic for getByProduct.
 * It interacts with the Promotion service to perform operations on the promotion repository.
 */
@injectable()
export class GetByProductPromotion {
    constructor(private readonly service: PromotionService) {}

    /**
     * Execute the getByProduct use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Promotion[]>.
     */
    async execute(productId: number): Promise<Promotion[]> {
        const result = await this.service.getByProduct(productId);

        return result;
    }
}
