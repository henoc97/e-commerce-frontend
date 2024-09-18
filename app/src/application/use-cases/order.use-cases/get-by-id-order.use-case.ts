import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';

/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Order service to perform operations on the order repository.
 */
export class GetByIdOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Order | null>.
     */
    async execute(id: number): Promise<Order | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
