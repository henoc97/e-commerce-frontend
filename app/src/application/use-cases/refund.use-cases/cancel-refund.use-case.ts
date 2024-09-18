import { RefundService } from '../../services/refund.service';
import { Refund } from '../../../domain/entities/refund.entity';

/**
 * Use case class for cancel.
 * This class encapsulates the business logic for cancel.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
export class CancelRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the cancel use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Refund>.
     */
    async execute(id: number): Promise<Refund> {
        const result = await this.service.cancel(id);

        return result;
    }
}
