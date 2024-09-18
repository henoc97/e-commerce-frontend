import { RefundService } from '../../services/refund.service';
import { Refund } from '../../../domain/entities/refund.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
export class CreateRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the create use case.
     * @param refund - The Refund required by the service method.
     * @returns A promise with the service result of type Promise<Refund>.
     */
    async execute(refund: Refund): Promise<Refund> {
        const result = await this.service.create(refund);

        return result;
    }
}
