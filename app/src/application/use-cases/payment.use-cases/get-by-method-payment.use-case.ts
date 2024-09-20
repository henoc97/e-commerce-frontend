import { PaymentService } from '../../services/payment.service';
import { Payment } from '../../../domain/entities/payment.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByMethod.
 * This class encapsulates the business logic for getByMethod.
 * It interacts with the Payment service to perform operations on the payment repository.
 */
@injectable()
export class GetByMethodPayment {
    constructor(private readonly service: PaymentService) {}

    /**
     * Execute the getByMethod use case.
     * @param method - The string required by the service method.
     * @returns A promise with the service result of type Promise<Payment[]>.
     */
    async execute(method: string): Promise<Payment[]> {
        const result = await this.service.getByMethod(method);

        return result;
    }
}
