import { RefundService } from '../../services/refund.service';
import { Refund } from '../../../domain/entities/refund.entity';

/**
 * Use case class for getByOrder.
 * This class encapsulates the business logic for getByOrder.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
export class GetByOrderRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the getByOrder use case.
     * @param orderId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Refund[]>.
     */
    async execute(orderId: number): Promise<Refund[]> {
        const result = await this.service.getByOrder(orderId);

        return result;
    }
}
