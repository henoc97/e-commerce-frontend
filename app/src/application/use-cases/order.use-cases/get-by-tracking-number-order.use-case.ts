import { OrderService } from '../../services/order.service';
import { Order } from '../../../domain/entities/order.entity';

/**
 * Use case class for getByTrackingNumber.
 * This class encapsulates the business logic for getByTrackingNumber.
 * It interacts with the Order service to perform operations on the order repository.
 */
export class GetByTrackingNumberOrder {
    constructor(private readonly service: OrderService) {}

    /**
     * Execute the getByTrackingNumber use case.
     * @param trackingNumber - The string required by the service method.
     * @returns A promise with the service result of type Promise<Order | null>.
     */
    async execute(trackingNumber: string): Promise<Order | null> {
        const result = await this.service.getByTrackingNumber(trackingNumber);

        if (!result) return null;

        return result;
    }
}
