import { NotificationService } from '../../services/notification.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for countUnread.
 * This class encapsulates the business logic for countUnread.
 * It interacts with the Notification service to perform operations on the notification repository.
 */
@injectable()
export class CountUnreadNotification {
    constructor(private readonly service: NotificationService) {}

    /**
     * Execute the countUnread use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(userId: number): Promise<number> {
        const result = await this.service.countUnread(userId);

        return result;
    }
}
