import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../../domain/entities/payment.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getMostRecentPaymentByOrderId.
 * This class encapsulates the business logic for getMostRecentPaymentByOrderId.
 * It interacts with the Payment service to perform operations on the payment repository.
 */
@injectable()
export class GetMostRecentPaymentByOrderIdPayment {
    constructor(private readonly service: PaymentService) {}

    /**
     * Execute the getMostRecentPaymentByOrderId use case.
     * @param orderId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Payment | null>.
     */
    async execute(orderId: number): Promise<Payment | null> {
        const result =
            await this.service.getMostRecentPaymentByOrderId(orderId);

        if (!result) return null;

        return result;
    }
}
