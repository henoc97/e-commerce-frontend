import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../../domain/entities/notification.entity';

/**
 * Use case class for getByUserId.
 * This class encapsulates the business logic for getByUserId.
 * It interacts with the Notification service to perform operations on the notification repository.
 */
export class GetByUserIdNotification {
    constructor(private readonly service: NotificationService) {}

    /**
     * Execute the getByUserId use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Notification[]>.
     */
    async execute(userId: number): Promise<Notification[]> {
        const result = await this.service.getByUserId(userId);

        return result;
    }
}
