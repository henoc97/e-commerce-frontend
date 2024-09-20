import { useAppDispatch, useAppSelector } from '../index.hook';

import { User } from '../../../domain/entities/user.entity';

import { addAddressUser } from '../../states/thunks/user.thunks/add-address-user.thunk';
import { addNotificationUser } from '../../states/thunks/user.thunks/add-notification-user.thunk';
import { addOrderUser } from '../../states/thunks/user.thunks/add-order-user.thunk';
import { addSubsiteUser } from '../../states/thunks/user.thunks/add-subsite-user.thunk';
import { createAuditLogUser } from '../../states/thunks/user.thunks/create-audit-log-user.thunk';
import { createUser } from '../../states/thunks/user.thunks/create-user.thunk';
import { deleteUser } from '../../states/thunks/user.thunks/delete-user.thunk';
import { getActiveCountUser } from '../../states/thunks/user.thunks/get-active-count-user.thunk';
import { getActivityLogUser } from '../../states/thunks/user.thunks/get-activity-log-user.thunk';
import { getAddressesUser } from '../../states/thunks/user.thunks/get-addresses-user.thunk';
import { getAuditLogsUser } from '../../states/thunks/user.thunks/get-audit-logs-user.thunk';
import { getByEmailUser } from '../../states/thunks/user.thunks/get-by-email-user.thunk';
import { getByIdUser } from '../../states/thunks/user.thunks/get-by-id-user.thunk';
import { getByRoleUser } from '../../states/thunks/user.thunks/get-by-role-user.thunk';
import { getCartUser } from '../../states/thunks/user.thunks/get-cart-user.thunk';
import { getCountByRoleUser } from '../../states/thunks/user.thunks/get-count-by-role-user.thunk';
import { getInactiveUsersUser } from '../../states/thunks/user.thunks/get-inactive-users-user.thunk';
import { getNotificationsUser } from '../../states/thunks/user.thunks/get-notifications-user.thunk';
import { getOrdersUser } from '../../states/thunks/user.thunks/get-orders-user.thunk';
import { getReviewsUser } from '../../states/thunks/user.thunks/get-reviews-user.thunk';
import { getSubsitesUser } from '../../states/thunks/user.thunks/get-subsites-user.thunk';
import { getTicketsUser } from '../../states/thunks/user.thunks/get-tickets-user.thunk';
import { removeAddressUser } from '../../states/thunks/user.thunks/remove-address-user.thunk';
import { removeNotificationUser } from '../../states/thunks/user.thunks/remove-notification-user.thunk';
import { removeOrderUser } from '../../states/thunks/user.thunks/remove-order-user.thunk';
import { removeSubsiteUser } from '../../states/thunks/user.thunks/remove-subsite-user.thunk';
import { updatePasswordUser } from '../../states/thunks/user.thunks/update-password-user.thunk';
import { updateProfileUser } from '../../states/thunks/user.thunks/update-profile-user.thunk';
import { updateUser } from '../../states/thunks/user.thunks/update-user.thunk';

export const useUser: any = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state: any) => state.users);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleAddAddressUser = (userId: number, address: Address) => {
        dispatch(addAddressUser({ userId, address }));
    };

    const handleAddNotificationUser = (
        userId: number,
        notification: Notification
    ) => {
        dispatch(addNotificationUser({ userId, notification }));
    };

    const handleAddOrderUser = (userId: number, order: Order) => {
        dispatch(addOrderUser({ userId, order }));
    };

    const handleAddSubsiteUser = (userId: number, Subsite: Subsite) => {
        dispatch(addSubsiteUser({ userId, Subsite }));
    };

    const handleCreateAuditLogUser = (userId: number, auditLog: AuditLog) => {
        dispatch(createAuditLogUser({ userId, auditLog }));
    };

    const handleCreateUser = (user: User) => {
        dispatch(createUser({ user }));
    };

    const handleDeleteUser = (id: number) => {
        dispatch(deleteUser({ id }));
    };

    const handleGetActiveCountUser = () => {
        dispatch(getActiveCountUser({}));
    };

    const handleGetActivityLogUser = (userId: number) => {
        dispatch(getActivityLogUser({ userId }));
    };

    const handleGetAddressesUser = (userId: number) => {
        dispatch(getAddressesUser({ userId }));
    };

    const handleGetAuditLogsUser = (userId: number) => {
        dispatch(getAuditLogsUser({ userId }));
    };

    const handleGetByEmailUser = (email: string) => {
        dispatch(getByEmailUser({ email }));
    };

    const handleGetByIdUser = (id: number) => {
        dispatch(getByIdUser({ id }));
    };

    const handleGetByRoleUser = (role: UserRole) => {
        dispatch(getByRoleUser({ role }));
    };

    const handleGetCartUser = (userId: number) => {
        dispatch(getCartUser({ userId }));
    };

    const handleGetCountByRoleUser = (role: UserRole) => {
        dispatch(getCountByRoleUser({ role }));
    };

    const handleGetInactiveUsersUser = (days: number) => {
        dispatch(getInactiveUsersUser({ days }));
    };

    const handleGetNotificationsUser = (userId: number) => {
        dispatch(getNotificationsUser({ userId }));
    };

    const handleGetOrdersUser = (userId: number) => {
        dispatch(getOrdersUser({ userId }));
    };

    const handleGetReviewsUser = (userId: number) => {
        dispatch(getReviewsUser({ userId }));
    };

    const handleGetSubsitesUser = (userId: number) => {
        dispatch(getSubsitesUser({ userId }));
    };

    const handleGetTicketsUser = (userId: number) => {
        dispatch(getTicketsUser({ userId }));
    };

    const handleRemoveAddressUser = (userId: number, addressId: number) => {
        dispatch(removeAddressUser({ userId, addressId }));
    };

    const handleRemoveNotificationUser = (
        userId: number,
        notificationId: number
    ) => {
        dispatch(removeNotificationUser({ userId, notificationId }));
    };

    const handleRemoveOrderUser = (userId: number, orderId: number) => {
        dispatch(removeOrderUser({ userId, orderId }));
    };

    const handleRemoveSubsiteUser = (userId: number, SubsiteId: number) => {
        dispatch(removeSubsiteUser({ userId, SubsiteId }));
    };

    const handleUpdatePasswordUser = (userId: number, newPassword: string) => {
        dispatch(updatePasswordUser({ userId, newPassword }));
    };

    const handleUpdateProfileUser = (userId: number, profile: UserProfile) => {
        dispatch(updateProfileUser({ userId, profile }));
    };

    const handleUpdateUser = (id: number, updates: Partial<User>) => {
        dispatch(updateUser({ id, updates }));
    };

    return {
        ...users,
        loading,
        success,
        error,
        handleAddAddressUser,
        handleAddNotificationUser,
        handleAddOrderUser,
        handleAddSubsiteUser,
        handleCreateAuditLogUser,
        handleCreateUser,
        handleDeleteUser,
        handleGetActiveCountUser,
        handleGetActivityLogUser,
        handleGetAddressesUser,
        handleGetAuditLogsUser,
        handleGetByEmailUser,
        handleGetByIdUser,
        handleGetByRoleUser,
        handleGetCartUser,
        handleGetCountByRoleUser,
        handleGetInactiveUsersUser,
        handleGetNotificationsUser,
        handleGetOrdersUser,
        handleGetReviewsUser,
        handleGetSubsitesUser,
        handleGetTicketsUser,
        handleRemoveAddressUser,
        handleRemoveNotificationUser,
        handleRemoveOrderUser,
        handleRemoveSubsiteUser,
        handleUpdatePasswordUser,
        handleUpdateProfileUser,
        handleUpdateUser,
    };
};
