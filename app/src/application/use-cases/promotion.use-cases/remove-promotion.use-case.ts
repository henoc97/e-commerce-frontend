import { PromotionService } from '../../services/promotion.service';

/**
 * Use case class for remove.
 * This class encapsulates the business logic for remove.
 * It interacts with the Promotion service to perform operations on the promotion repository.
 */
export class RemovePromotion {
    constructor(private readonly service: PromotionService) {}

    /**
     * Execute the remove use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(id: number): Promise<boolean> {
        const result = await this.service.remove(id);

        return result;
    }
}
