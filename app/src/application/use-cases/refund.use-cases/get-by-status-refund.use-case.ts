import { RefundService } from '../../services/refund.service';
import { Refund } from '../../../domain/entities/refund.entity';
import { RefundStatus } from '../../../domain/enums/refund-status.enum';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByStatus.
 * This class encapsulates the business logic for getByStatus.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
@injectable()
export class GetByStatusRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the getByStatus use case.
     * @param status - The RefundStatus required by the service method.
     * @returns A promise with the service result of type Promise<Refund[]>.
     */
    async execute(status: RefundStatus): Promise<Refund[]> {
        const result = await this.service.getByStatus(status);

        return result;
    }
}
