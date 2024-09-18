import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../../domain/entities/promotion.entity';

/**
 * Use case class for applyToProduct.
 * This class encapsulates the business logic for applyToProduct.
 * It interacts with the Promotion service to perform operations on the promotion repository.
 */
export class ApplyToProductPromotion {
    constructor(private readonly service: PromotionService) {}

    /**
     * Execute the applyToProduct use case.
     * @param productId - The number required by the service method.
     * @param promotionId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Promotion>.
     */
    async execute(productId: number, promotionId: number): Promise<Promotion> {
        const result = await this.service.applyToProduct(
            productId,
            promotionId
        );

        return result;
    }
}
