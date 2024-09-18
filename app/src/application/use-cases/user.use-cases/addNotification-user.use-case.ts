import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';
import { Notification } from '../../../domain/entities/notification.entity';

/**
 * Use case class for addNotification.
 * This class encapsulates the business logic for addNotification.
 * It interacts with the User service to perform operations on the user repository.
 */
export class AddNotificationUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the addNotification use case.
     * @param userId - The number required by the service method.
     * @param notification - The Notification required by the service method.
     * @returns A promise with the service result of type Promise<User>.
     */
    async execute(userId: number, notification: Notification): Promise<User> {
        const result = await this.service.addNotification(userId, notification);

        return result;
    }
}
