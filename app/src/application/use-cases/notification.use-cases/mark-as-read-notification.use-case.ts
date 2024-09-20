import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../../domain/entities/notification.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for markAsRead.
 * This class encapsulates the business logic for markAsRead.
 * It interacts with the Notification service to perform operations on the notification repository.
 */
@injectable()
export class MarkAsReadNotification {
    constructor(private readonly service: NotificationService) {}

    /**
     * Execute the markAsRead use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Notification>.
     */
    async execute(id: number): Promise<Notification> {
        const result = await this.service.markAsRead(id);

        return result;
    }
}
