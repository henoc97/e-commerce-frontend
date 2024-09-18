import { RefundService } from '../../services/refund.service';
import { Refund } from '../../../domain/entities/refund.entity';
import { RefundStatus } from '../../../domain/enums/refund-status.enum';

/**
 * Use case class for process.
 * This class encapsulates the business logic for process.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
export class ProcessRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the process use case.
     * @param id - The number required by the service method.
     * @param status - The RefundStatus required by the service method.
     * @returns A promise with the service result of type Promise<Refund>.
     */
    async execute(id: number, status: RefundStatus): Promise<Refund> {
        const result = await this.service.process(id, status);

        return result;
    }
}
