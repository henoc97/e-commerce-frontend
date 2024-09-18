import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../../domain/entities/promotion.entity';

/**
 * Use case class for combine.
 * This class encapsulates the business logic for combine.
 * It interacts with the Promotion service to perform operations on the promotion repository.
 */
export class CombinePromotion {
    constructor(private readonly service: PromotionService) {}

    /**
     * Execute the combine use case.
     * @param promotions - The Promotion required by the service method.
     * @returns A promise with the service result of type Promise<Promotion | null>.
     */
    async execute(promotions: Promotion[]): Promise<Promotion | null> {
        const result = await this.service.combine(promotions);

        if (!result) return null;

        return result;
    }
}
