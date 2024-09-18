import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../../domain/entities/payment.entity';

/**
 * Use case class for getPaymentsGroupedByMethod.
 * This class encapsulates the business logic for getPaymentsGroupedByMethod.
 * It interacts with the Payment service to perform operations on the payment repository.
 */
export class GetPaymentsGroupedByMethodPayment {
    constructor(private readonly service: PaymentService) {}

    /**
     * Execute the getPaymentsGroupedByMethod use case.
     * @returns A promise with the service result of type Promise<Map<string, Payment[]>>.
     */
    async execute(): Promise<Map<string, Payment[]>> {
        const result = await this.service.getPaymentsGroupedByMethod();

        return result;
    }
}
