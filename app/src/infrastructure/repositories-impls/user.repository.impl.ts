import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    ADD_ADDRESS_TO_USER,
    ADD_NOTIFICATION_TO_USER,
    ADD_ORDER_TO_USER,
    ADD_SUBSITE_TO_USER,
    CREATE_USER,
    DELETE_USER,
    GET_ACTIVE_COUNT,
    GET_COUNT_BY_ROLE,
    GET_DETAILED_INFO,
    GET_INACTIVE_USERS,
    GET_USER_BY_EMAIL,
    GET_USER,
    GET_USERS_BY_ROLE,
    REMOVE_ADDRESS_FROM_USER,
    REMOVE_NOTIFICATION_FROM_USER,
    REMOVE_ORDER_FROM_USER,
    REMOVE_SUBSITE_FROM_USER,
    UPDATE_USER_PASSWORD,
    UPDATE_USER,
} from '../config/graphql/queries/user.queries';
import { User } from '../../domain/entities/user.entity';
import { Address } from '../../domain/entities/address.entity';
import { Order } from '../../domain/entities/order.entity';
import { UserRole } from '../../domain/enums/user-role.enum';
import { Subsite } from '../../domain/entities/subsite.entity';
import { Notification } from '../../domain/entities/notification.entity';
import { IUserRepository } from '../../domain/repositories/user.repository';
import { AuditLog } from '../../domain/entities/audit-log.entity';
import { Cart } from '../../domain/entities/cart.entity';
import { Review } from '../../domain/entities/review.entity';
import { Ticket } from '../../domain/entities/ticket.entity';
import { UserActivity } from '../../domain/entities/user-activity.entity';
import { UserProfile } from '../../domain/entities/user-profile.entity';
import { UserActivityAction } from '../../domain/enums/user-activity-action.enum';

@injectable()
export class UserRepositoryImpl implements IUserRepository {
    logActivity(userId: number, action: UserActivityAction, productId?: number): Promise<void> {
        throw new Error('Method not implemented.');
    }
    getActivityLog(userId: number): Promise<UserActivity[]> {
        throw new Error('Method not implemented.');
    }
    createAuditLog(userId: number, auditLog: AuditLog): Promise<void> {
        throw new Error('Method not implemented.');
    }
    getAuditLogs(userId: number): Promise<AuditLog[]> {
        throw new Error('Method not implemented.');
    }
    updateProfile(userId: number, profile: UserProfile): Promise<User> {
        throw new Error('Method not implemented.');
    }
    getOrders(userId: number): Promise<Order[]> {
        throw new Error('Method not implemented.');
    }
    getAddresses(userId: number): Promise<Address[]> {
        throw new Error('Method not implemented.');
    }
    getReviews(userId: number): Promise<Review[]> {
        throw new Error('Method not implemented.');
    }
    getCart(userId: number): Promise<Cart | null> {
        throw new Error('Method not implemented.');
    }
    getTickets(userId: number): Promise<Ticket[]> {
        throw new Error('Method not implemented.');
    }
    getNotifications(userId: number): Promise<Notification[]> {
        throw new Error('Method not implemented.');
    }
    getSubsites(userId: number): Promise<Subsite[]> {
        throw new Error('Method not implemented.');
    }
    async create(user: User): Promise<User> {
        const { data } = await client.mutate({
            mutation: CREATE_USER,
            variables: { user },
        });
        return data.createUser;
    }

    async getById(id: number): Promise<User | null> {
        const { data } = await client.query({
            query: GET_USER,
            variables: { userId: id },
        });
        return data.getUser;
    }

    async update(id: number, updates: Partial<User>): Promise<User> {
        const { data } = await client.mutate({
            mutation: UPDATE_USER,
            variables: { userId: id, user: updates },
        });
        return data.updateUser;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_USER,
            variables: { userId: id },
        });
        return data.deleteUser;
    }

    async getByRole(role: UserRole): Promise<User[]> {
        const { data } = await client.query({
            query: GET_USERS_BY_ROLE,
            variables: { role },
        });
        return data.getUsersByRole;
    }

    async addAddress(userId: number, address: Address): Promise<User> {
        const { data } = await client.mutate({
            mutation: ADD_ADDRESS_TO_USER,
            variables: { userId, address },
        });
        return data.addAddressToUser;
    }

    async removeAddress(userId: number, addressId: number): Promise<User> {
        const { data } = await client.mutate({
            mutation: REMOVE_ADDRESS_FROM_USER,
            variables: { userId, addressId },
        });
        return data.removeAddressFromUser;
    }

    async addOrder(userId: number, order: Order): Promise<User> {
        const { data } = await client.mutate({
            mutation: ADD_ORDER_TO_USER,
            variables: { userId, order },
        });
        return data.addOrderToUser;
    }

    async removeOrder(userId: number, orderId: number): Promise<User> {
        const { data } = await client.mutate({
            mutation: REMOVE_ORDER_FROM_USER,
            variables: { userId, orderId },
        });
        return data.removeOrderFromUser;
    }

    async addNotification(userId: number, notification: Notification): Promise<User> {
        const { data } = await client.mutate({
            mutation: ADD_NOTIFICATION_TO_USER,
            variables: { userId, notification },
        });
        return data.addNotificationToUser;
    }

    async removeNotification(userId: number, notificationId: number): Promise<User> {
        const { data } = await client.mutate({
            mutation: REMOVE_NOTIFICATION_FROM_USER,
            variables: { userId, notificationId },
        });
        return data.removeNotificationFromUser;
    }

    async addSubsite(userId: number, subsite: Subsite): Promise<User> {
        const { data } = await client.mutate({
            mutation: ADD_SUBSITE_TO_USER,
            variables: { userId, subsite },
        });
        return data.addSubsiteToUser;
    }

    async removeSubsite(userId: number, subsiteId: number): Promise<User> {
        const { data } = await client.mutate({
            mutation: REMOVE_SUBSITE_FROM_USER,
            variables: { userId, subsiteId },
        });
        return data.removeSubsiteFromUser;
    }

    async getByEmail(email: string): Promise<User | null> {
        const { data } = await client.query({
            query: GET_USER_BY_EMAIL,
            variables: { email },
        });
        return data.getUserByEmail;
    }

    async updatePassword(userId: number, newPassword: string): Promise<User> {
        const { data } = await client.mutate({
            mutation: UPDATE_USER_PASSWORD,
            variables: { userId, newPassword },
        });
        return data.updateUserPassword;
    }

    async getActiveCount(): Promise<number> {
        const { data } = await client.query({
            query: GET_ACTIVE_COUNT,
        });
        return data.getActiveCount;
    }

    async getCountByRole(role: UserRole): Promise<number> {
        const { data } = await client.query({
            query: GET_COUNT_BY_ROLE,
            variables: { role },
        });
        return data.getCountByRole;
    }

    async getInactiveUsers(days: number): Promise<User[]> {
        const { data } = await client.query({
            query: GET_INACTIVE_USERS,
            variables: { days },
        });
        return data.getInactiveUsers;
    }
}
