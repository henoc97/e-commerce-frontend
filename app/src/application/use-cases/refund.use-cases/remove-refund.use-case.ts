import { RefundService } from '../../services/refund.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for remove.
 * This class encapsulates the business logic for remove.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
@injectable()
export class RemoveRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the remove use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(id: number): Promise<boolean> {
        const result = await this.service.remove(id);

        return result;
    }
}
