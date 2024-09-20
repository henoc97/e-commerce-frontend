import { OrderService } from '../../services/order.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for delete.
 * This class encapsulates the business logic for delete.
 * It interacts with the Order service to perform operations on the order repository.
 */
@injectable()
export class DeleteOrder {
    constructor(private readonly service: OrderService) {}

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
