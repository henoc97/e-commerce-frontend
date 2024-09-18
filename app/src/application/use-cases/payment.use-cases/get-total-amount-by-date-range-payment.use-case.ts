import { PaymentService } from '../../services/payment.service';

/**
 * Use case class for getTotalAmountByDateRange.
 * This class encapsulates the business logic for getTotalAmountByDateRange.
 * It interacts with the Payment service to perform operations on the payment repository.
 */
export class GetTotalAmountByDateRangePayment {
    constructor(private readonly service: PaymentService) {}

    /**
     * Execute the getTotalAmountByDateRange use case.
     * @param startDate - The Date required by the service method.
     * @param endDate - The Date required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(startDate: Date, endDate: Date): Promise<number> {
        const result = await this.service.getTotalAmountByDateRange(
            startDate,
            endDate
        );

        return result;
    }
}
