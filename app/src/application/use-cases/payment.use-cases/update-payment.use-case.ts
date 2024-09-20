import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../../domain/entities/payment.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Payment service to perform operations on the payment repository.
 */
@injectable()
export class UpdatePayment {
    constructor(private readonly service: PaymentService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Payment>.
     */
    async execute(id: number, updates: Partial<Payment>): Promise<Payment> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
