import { RefundService } from '../../services/refund.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getTotalRefunded.
 * This class encapsulates the business logic for getTotalRefunded.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
@injectable()
export class GetTotalRefundedRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the getTotalRefunded use case.
     * @param orderId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(orderId: number): Promise<number> {
        const result = await this.service.getTotalRefunded(orderId);

        return result;
    }
}
