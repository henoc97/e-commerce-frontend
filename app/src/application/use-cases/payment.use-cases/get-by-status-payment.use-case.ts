import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../../domain/entities/payment.entity';
import { PaymentStatus } from '../../../domain/enums/payment-status.enum';

/**
 * Use case class for getByStatus.
 * This class encapsulates the business logic for getByStatus.
 * It interacts with the Payment service to perform operations on the payment repository.
 */
export class GetByStatusPayment {
    constructor(private readonly service: PaymentService) {}

    /**
     * Execute the getByStatus use case.
     * @param status - The PaymentStatus required by the service method.
     * @returns A promise with the service result of type Promise<Payment[]>.
     */
    async execute(status: PaymentStatus): Promise<Payment[]> {
        const result = await this.service.getByStatus(status);

        return result;
    }
}
