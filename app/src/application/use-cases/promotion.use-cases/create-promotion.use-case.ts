import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../../domain/entities/promotion.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Promotion service to perform operations on the promotion repository.
 */
@injectable()
export class CreatePromotion {
    constructor(private readonly service: PromotionService) {}

    /**
     * Execute the create use case.
     * @param promotion - The Promotion required by the service method.
     * @returns A promise with the service result of type Promise<Promotion>.
     */
    async execute(promotion: Promotion): Promise<Promotion> {
        const result = await this.service.create(promotion);

        return result;
    }
}
