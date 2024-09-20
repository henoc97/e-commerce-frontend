import { PromotionService } from '../../services/promotion.service';
import { Promotion } from '../../../domain/entities/promotion.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getActive.
 * This class encapsulates the business logic for getActive.
 * It interacts with the Promotion service to perform operations on the promotion repository.
 */
@injectable()
export class GetActivePromotion {
    constructor(private readonly service: PromotionService) {}

    /**
     * Execute the getActive use case.
     * @returns A promise with the service result of type Promise<Promotion[]>.
     */
    async execute(): Promise<Promotion[]> {
        const result = await this.service.getActive();

        return result;
    }
}
