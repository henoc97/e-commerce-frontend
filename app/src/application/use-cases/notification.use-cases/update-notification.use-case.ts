import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../../domain/entities/notification.entity';

/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Notification service to perform operations on the notification repository.
 */
export class UpdateNotification {
    constructor(private readonly service: NotificationService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Notification>.
     */
    async execute(
        id: number,
        updates: Partial<Notification>
    ): Promise<Notification> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
