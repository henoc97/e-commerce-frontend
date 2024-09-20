import { useAppDispatch, useAppSelector } from '../index.hook';

import { Notification } from '../../../domain/entities/notification.entity';

import { countUnreadNotification } from '../../states/thunks/notification.thunks/count-unread-notification.thunk';
import { createNotification } from '../../states/thunks/notification.thunks/create-notification.thunk';
import { deleteNotification } from '../../states/thunks/notification.thunks/delete-notification.thunk';
import { getByDateRangeNotification } from '../../states/thunks/notification.thunks/get-by-date-range-notification.thunk';
import { getByIdNotification } from '../../states/thunks/notification.thunks/get-by-id-notification.thunk';
import { getByTypeNotification } from '../../states/thunks/notification.thunks/get-by-type-notification.thunk';
import { getByUserIdNotification } from '../../states/thunks/notification.thunks/get-by-user-id-notification.thunk';
import { getRecentNotification } from '../../states/thunks/notification.thunks/get-recent-notification.thunk';
import { markAsReadNotification } from '../../states/thunks/notification.thunks/mark-as-read-notification.thunk';
import { updateNotification } from '../../states/thunks/notification.thunks/update-notification.thunk';

export const useNotification: any = () => {
    const dispatch = useAppDispatch();
    const notifications = useAppSelector((state: any) => state.notifications);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCountUnreadNotification = (userId: number) => {
        dispatch(countUnreadNotification({ userId }));
    };

    const handleCreateNotification = (notification: Notification) => {
        dispatch(createNotification({ notification }));
    };

    const handleDeleteNotification = (id: number) => {
        dispatch(deleteNotification({ id }));
    };

    const handleGetByDateRangeNotification = (
        startDate: Date,
        endDate: Date
    ) => {
        dispatch(getByDateRangeNotification({ startDate, endDate }));
    };

    const handleGetByIdNotification = (id: number) => {
        dispatch(getByIdNotification({ id }));
    };

    const handleGetByTypeNotification = (type: NotificationType) => {
        dispatch(getByTypeNotification({ type }));
    };

    const handleGetByUserIdNotification = (userId: number) => {
        dispatch(getByUserIdNotification({ userId }));
    };

    const handleGetRecentNotification = (userId: number) => {
        dispatch(getRecentNotification({ userId }));
    };

    const handleMarkAsReadNotification = (id: number) => {
        dispatch(markAsReadNotification({ id }));
    };

    const handleUpdateNotification = (
        id: number,
        updates: Partial<Notification>
    ) => {
        dispatch(updateNotification({ id, updates }));
    };

    return {
        ...notifications,
        loading,
        success,
        error,
        handleCountUnreadNotification,
        handleCreateNotification,
        handleDeleteNotification,
        handleGetByDateRangeNotification,
        handleGetByIdNotification,
        handleGetByTypeNotification,
        handleGetByUserIdNotification,
        handleGetRecentNotification,
        handleMarkAsReadNotification,
        handleUpdateNotification,
    };
};
