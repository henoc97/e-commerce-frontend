import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../../domain/entities/promotion.entity';

/**
 * Use case class for getBestForProduct.
 * This class encapsulates the business logic for getBestForProduct.
 * It interacts with the Promotion service to perform operations on the promotion repository.
 */
export class GetBestForProductPromotion {
    constructor(private readonly service: PromotionService) {}

    /**
     * Execute the getBestForProduct use case.
     * @param productId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Promotion | null>.
     */
    async execute(productId: number): Promise<Promotion | null> {
        const result = await this.service.getBestForProduct(productId);

        if (!result) return null;

        return result;
    }
}
