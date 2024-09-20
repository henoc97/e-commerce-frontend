import { RootState } from '../store/store';

export const selectNotifications = (state: RootState) =>
    state.notification.notifications;
export const selectNotificationLoading = (state: RootState) =>
    state.notification.loading;
export const selectNotificationSuccess = (state: RootState) =>
    state.notification.success;
export const selectNotificationError = (state: RootState) =>
    state.notification.error;
