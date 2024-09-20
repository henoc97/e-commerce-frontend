import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../../domain/entities/payment.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Payment service to perform operations on the payment repository.
 */
@injectable()
export class CreatePayment {
    constructor(private readonly service: PaymentService) {}

    /**
     * Execute the create use case.
     * @param payment - The Payment required by the service method.
     * @returns A promise with the service result of type Promise<Payment>.
     */
    async execute(payment: Payment): Promise<Payment> {
        const result = await this.service.create(payment);

        return result;
    }
}
