import { RefundService } from '../../services/refund.service';
import { Refund } from '../../../domain/entities/refund.entity';

/**
 * Use case class for issuePartial.
 * This class encapsulates the business logic for issuePartial.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
export class IssuePartialRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the issuePartial use case.
     * @param id - The number required by the service method.
     * @param amount - The number required by the service method.
     * @returns A promise with the service result of type Promise<Refund>.
     */
    async execute(id: number, amount: number): Promise<Refund> {
        const result = await this.service.issuePartial(id, amount);

        return result;
    }
}
