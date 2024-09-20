import { UserService } from '../../services/user.service';
import { Notification } from '../../../domain/entities/notification.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getNotifications.
 * This class encapsulates the business logic for getNotifications.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class GetNotificationsUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getNotifications use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Notification[]>.
     */
    async execute(userId: number): Promise<Notification[]> {
        const result = await this.service.getNotifications(userId);

        return result;
    }
}
