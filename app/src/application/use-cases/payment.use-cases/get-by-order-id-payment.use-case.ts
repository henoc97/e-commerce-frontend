import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../../domain/entities/payment.entity';

/**
 * Use case class for getByOrderId.
 * This class encapsulates the business logic for getByOrderId.
 * It interacts with the Payment service to perform operations on the payment repository.
 */
export class GetByOrderIdPayment {
    constructor(private readonly service: PaymentService) {}

    /**
     * Execute the getByOrderId use case.
     * @param orderId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Payment[]>.
     */
    async execute(orderId: number): Promise<Payment[]> {
        const result = await this.service.getByOrderId(orderId);

        return result;
    }
}
