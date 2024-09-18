import { RefundService } from '../../services/refund.service';
import { Refund } from '../../../domain/entities/refund.entity';

/**
 * Use case class for approve.
 * This class encapsulates the business logic for approve.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
export class ApproveRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the approve use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Refund>.
     */
    async execute(id: number): Promise<Refund> {
        const result = await this.service.approve(id);

        return result;
    }
}
