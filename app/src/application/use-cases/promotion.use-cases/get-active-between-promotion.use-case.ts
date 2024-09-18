import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../../domain/entities/promotion.entity';

/**
 * Use case class for getActiveBetween.
 * This class encapsulates the business logic for getActiveBetween.
 * It interacts with the Promotion service to perform operations on the promotion repository.
 */
export class GetActiveBetweenPromotion {
    constructor(private readonly service: PromotionService) {}

    /**
     * Execute the getActiveBetween use case.
     * @param start - The Date required by the service method.
     * @param end - The Date required by the service method.
     * @returns A promise with the service result of type Promise<Promotion[]>.
     */
    async execute(start: Date, end: Date): Promise<Promotion[]> {
        const result = await this.service.getActiveBetween(start, end);

        return result;
    }
}
