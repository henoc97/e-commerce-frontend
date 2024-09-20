import { RefundService } from '../../services/refund.service';
import { Refund } from '../../../domain/entities/refund.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Refund service to perform operations on the refund repository.
 */
@injectable()
export class GetByIdRefund {
    constructor(private readonly service: RefundService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Refund | null>.
     */
    async execute(id: number): Promise<Refund | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
