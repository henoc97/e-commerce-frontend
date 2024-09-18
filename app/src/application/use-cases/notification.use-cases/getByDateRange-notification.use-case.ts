import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../../domain/entities/notification.entity';

/**
 * Use case class for getByDateRange.
 * This class encapsulates the business logic for getByDateRange.
 * It interacts with the Notification service to perform operations on the notification repository.
 */
export class GetByDateRangeNotification {
    constructor(private readonly service: NotificationService) {}

    /**
     * Execute the getByDateRange use case.
     * @param startDate - The Date required by the service method.
     * @param endDate - The Date required by the service method.
     * @returns A promise with the service result of type Promise<Notification[]>.
     */
    async execute(startDate: Date, endDate: Date): Promise<Notification[]> {
        const result = await this.service.getByDateRange(startDate, endDate);

        return result;
    }
}
