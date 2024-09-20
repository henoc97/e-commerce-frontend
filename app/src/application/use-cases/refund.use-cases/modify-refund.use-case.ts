import { RefundService } from '../../services/refund.service';
import { Refund } from '../../../domain/entities/refund.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for modify.
 * This class encapsulates the business logic for modify.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
@injectable()
export class ModifyRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the modify use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Refund>.
     */
    async execute(id: number, updates: Partial<Refund>): Promise<Refund> {
        const result = await this.service.modify(id, updates);

        return result;
    }
}
