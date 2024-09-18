import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../../domain/entities/payment.entity';

/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Payment service to perform operations on the payment repository.
 */
export class GetByIdPayment {
    constructor(private readonly service: PaymentService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Payment | null>.
     */
    async execute(id: number): Promise<Payment | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
