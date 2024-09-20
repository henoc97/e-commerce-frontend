import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getByDateRange.
 * This class encapsulates the business logic for getByDateRange.
 * It interacts with the Order service to perform operations on the order repository.
 */
@injectable()
export class GetByDateRangeOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the getByDateRange use case.
     * @param startDate - The Date required by the service method.
     * @param endDate - The Date required by the service method.
     * @returns A promise with the service result of type Promise<Order[]>.
     */
    async execute(startDate: Date, endDate: Date): Promise<Order[]> {
        const result = await this.service.getByDateRange(startDate, endDate);

        return result;
    }
}
