import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    COUNT_UNREAD_NOTIFICATIONS,
    CREATE_NOTIFICATION,
    DELETE_NOTIFICATION,
    FETCH_NOTIFICATION_BY_ID,
    FETCH_NOTIFICATIONS_BY_DATE_RANGE,
    FETCH_NOTIFICATIONS_BY_TYPE,
    FETCH_NOTIFICATIONS_BY_USER_ID,
    FETCH_RECENT_NOTIFICATIONS,
    MARK_NOTIFICATION_AS_READ,
    UPDATE_NOTIFICATION,
} from '../config/graphql/queries/notification.queries';
import { Notification } from '../../domain/entities/notification.entity';
import { NotificationType } from '../../domain/enums/notification-type.enum';
import { INotificationRepository } from '../../domain/repositories/notification.repository';

@injectable()
export class NotificationRepositoryImpl implements INotificationRepository {
    async create(notification: Notification): Promise<Notification> {
        const { data } = await client.mutate({
            mutation: CREATE_NOTIFICATION,
            variables: { notificationDTO: notification },
        });
        return data.createNotification;
    }

    async getById(id: number): Promise<Notification | null> {
        const { data } = await client.query({
            query: FETCH_NOTIFICATION_BY_ID,
            variables: { notificationId: id },
        });
        return data.fetchNotificationById;
    }

    async update(id: number, updates: Partial<Notification>): Promise<Notification> {
        const { data: updatedData } = await client.mutate({
            mutation: UPDATE_NOTIFICATION,
            variables: { notificationId: id, updates },
        });
        return updatedData.updateNotification;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_NOTIFICATION,
            variables: { notificationId: id },
        });
        return data.deleteNotification;
    }

    async getByUserId(userId: number): Promise<Notification[]> {
        const { data } = await client.query({
            query: FETCH_NOTIFICATIONS_BY_USER_ID,
            variables: { userId },
        });
        return data.fetchNotificationsByUserId;
    }

    async getByType(type: NotificationType): Promise<Notification[]> {
        const { data } = await client.query({
            query: FETCH_NOTIFICATIONS_BY_TYPE,
            variables: { type },
        });
        return data.fetchNotificationsByType;
    }

    async getByDateRange(startDate: Date, endDate: Date): Promise<Notification[]> {
        const { data } = await client.query({
            query: FETCH_NOTIFICATIONS_BY_DATE_RANGE,
            variables: { startDate, endDate },
        });
        return data.fetchNotificationsByDateRange;
    }

    async markAsRead(id: number): Promise<Notification> {
        const { data } = await client.mutate({
            mutation: MARK_NOTIFICATION_AS_READ,
            variables: { notificationId: id },
        });
        return data.markNotificationAsRead;
    }

    async countUnread(userId: number): Promise<number> {
        const { data } = await client.query({
            query: COUNT_UNREAD_NOTIFICATIONS,
            variables: { userId },
        });
        return data.countUnreadNotifications;
    }

    async getRecent(userId: number): Promise<Notification[]> {
        const { data } = await client.query({
            query: FETCH_RECENT_NOTIFICATIONS,
            variables: { userId },
        });
        return data.fetchRecentNotifications;
    }
}
