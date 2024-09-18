import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../../domain/entities/payment.entity';

/**
 * Use case class for getByDateRange.
 * This class encapsulates the business logic for getByDateRange.
 * It interacts with the Payment service to perform operations on the payment repository.
 */
export class GetByDateRangePayment {
    constructor(private readonly service: PaymentService) {}

    /**
     * Execute the getByDateRange use case.
     * @param startDate - The Date required by the service method.
     * @param endDate - The Date required by the service method.
     * @returns A promise with the service result of type Promise<Payment[]>.
     */
    async execute(startDate: Date, endDate: Date): Promise<Payment[]> {
        const result = await this.service.getByDateRange(startDate, endDate);

        return result;
    }
}
