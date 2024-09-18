import { Refund } from '../../../domain/entities/refund.entity';
import { RefundService } from '../../services/refund.service';

/**
 * Use case class for isEligible.
 * This class encapsulates the business logic for isEligible.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
export class IsEligibleRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the isEligible use case.
     * @param refund - The Refund required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(refund: Refund): Promise<boolean> {
        const result = await this.service.isEligible(refund);

        return result;
    }
}
