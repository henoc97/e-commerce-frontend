import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../../domain/entities/notification.entity';

/**
 * Use case class for getRecent.
 * This class encapsulates the business logic for getRecent.
 * It interacts with the Notification service to perform operations on the notification repository.
 */
export class GetRecentNotification {
    constructor(private readonly service: NotificationService) {}

    /**
     * Execute the getRecent use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Notification[]>.
     */
    async execute(userId: number): Promise<Notification[]> {
        const result = await this.service.getRecent(userId);

        return result;
    }
}
