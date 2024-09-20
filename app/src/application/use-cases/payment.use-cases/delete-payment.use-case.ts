import { PaymentService } from '../../services/payment.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for delete.
 * This class encapsulates the business logic for delete.
 * It interacts with the Payment service to perform operations on the payment repository.
 */
@injectable()
export class DeletePayment {
    constructor(private readonly service: PaymentService) {}

    /**
     * Execute the delete use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(id: number): Promise<boolean> {
        const result = await this.service.delete(id);

        return result;
    }
}
