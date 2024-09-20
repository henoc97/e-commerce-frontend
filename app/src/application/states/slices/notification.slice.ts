import { createSlice } from '@reduxjs/toolkit';

import { Notification } from '../../../domain/entities/notification.entity';

import { countUnreadNotificationExtraReducers } from '../extra-reducers/notification.extra-reducers/count-unread-notification.extra-reducers';
import { createNotificationExtraReducers } from '../extra-reducers/notification.extra-reducers/create-notification.extra-reducers';
import { deleteNotificationExtraReducers } from '../extra-reducers/notification.extra-reducers/delete-notification.extra-reducers';
import { getByDateRangeNotificationExtraReducers } from '../extra-reducers/notification.extra-reducers/get-by-date-range-notification.extra-reducers';
import { getByIdNotificationExtraReducers } from '../extra-reducers/notification.extra-reducers/get-by-id-notification.extra-reducers';
import { getByTypeNotificationExtraReducers } from '../extra-reducers/notification.extra-reducers/get-by-type-notification.extra-reducers';
import { getByUserIdNotificationExtraReducers } from '../extra-reducers/notification.extra-reducers/get-by-user-id-notification.extra-reducers';
import { getRecentNotificationExtraReducers } from '../extra-reducers/notification.extra-reducers/get-recent-notification.extra-reducers';
import { markAsReadNotificationExtraReducers } from '../extra-reducers/notification.extra-reducers/mark-as-read-notification.extra-reducers';
import { updateNotificationExtraReducers } from '../extra-reducers/notification.extra-reducers/update-notification.extra-reducers';

interface NotificationState {
    notifications: Notification[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: NotificationState = {
    notifications: [],
    loading: false,
    success: false,
    error: null,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        resetnotificationState: (state) => {
            (state.notifications = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        countUnreadNotificationExtraReducers(builder);
        createNotificationExtraReducers(builder);
        deleteNotificationExtraReducers(builder);
        getByDateRangeNotificationExtraReducers(builder);
        getByIdNotificationExtraReducers(builder);
        getByTypeNotificationExtraReducers(builder);
        getByUserIdNotificationExtraReducers(builder);
        getRecentNotificationExtraReducers(builder);
        markAsReadNotificationExtraReducers(builder);
        updateNotificationExtraReducers(builder);
    },
});

export const { resetnotificationState } = notificationSlice.actions;

export default notificationSlice.reducer;
