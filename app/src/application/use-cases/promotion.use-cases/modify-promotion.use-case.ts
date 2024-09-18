import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../../domain/entities/promotion.entity';

/**
 * Use case class for modify.
 * This class encapsulates the business logic for modify.
 * It interacts with the Promotion service to perform operations on the promotion repository.
 */
export class ModifyPromotion {
    constructor(private readonly service: PromotionService) {}

    /**
     * Execute the modify use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Promotion>.
     */
    async execute(id: number, updates: Partial<Promotion>): Promise<Promotion> {
        const result = await this.service.modify(id, updates);

        return result;
    }
}
