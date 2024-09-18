import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../../domain/entities/promotion.entity';

/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Promotion service to perform operations on the promotion repository.
 */
export class GetByIdPromotion {
    constructor(private readonly service: PromotionService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Promotion | null>.
     */
    async execute(id: number): Promise<Promotion | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
