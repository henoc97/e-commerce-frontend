import { createSlice } from '@reduxjs/toolkit';

import { User } from '../../../domain/entities/user.entity';

import { addAddressUserExtraReducers } from '../extra-reducers/user.extra-reducers/add-address-user.extra-reducers';
import { addNotificationUserExtraReducers } from '../extra-reducers/user.extra-reducers/add-notification-user.extra-reducers';
import { addOrderUserExtraReducers } from '../extra-reducers/user.extra-reducers/add-order-user.extra-reducers';
import { addSubsiteUserExtraReducers } from '../extra-reducers/user.extra-reducers/add-subsite-user.extra-reducers';
import { createAuditLogUserExtraReducers } from '../extra-reducers/user.extra-reducers/create-audit-log-user.extra-reducers';
import { createUserExtraReducers } from '../extra-reducers/user.extra-reducers/create-user.extra-reducers';
import { deleteUserExtraReducers } from '../extra-reducers/user.extra-reducers/delete-user.extra-reducers';
import { getActiveCountUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-active-count-user.extra-reducers';
import { getActivityLogUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-activity-log-user.extra-reducers';
import { getAddressesUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-addresses-user.extra-reducers';
import { getAuditLogsUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-audit-logs-user.extra-reducers';
import { getByEmailUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-by-email-user.extra-reducers';
import { getByIdUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-by-id-user.extra-reducers';
import { getByRoleUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-by-role-user.extra-reducers';
import { getCartUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-cart-user.extra-reducers';
import { getCountByRoleUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-count-by-role-user.extra-reducers';
import { getInactiveUsersUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-inactive-users-user.extra-reducers';
import { getNotificationsUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-notifications-user.extra-reducers';
import { getOrdersUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-orders-user.extra-reducers';
import { getReviewsUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-reviews-user.extra-reducers';
import { getSubsitesUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-subsites-user.extra-reducers';
import { getTicketsUserExtraReducers } from '../extra-reducers/user.extra-reducers/get-tickets-user.extra-reducers';
import { removeAddressUserExtraReducers } from '../extra-reducers/user.extra-reducers/remove-address-user.extra-reducers';
import { removeNotificationUserExtraReducers } from '../extra-reducers/user.extra-reducers/remove-notification-user.extra-reducers';
import { removeOrderUserExtraReducers } from '../extra-reducers/user.extra-reducers/remove-order-user.extra-reducers';
import { removeSubsiteUserExtraReducers } from '../extra-reducers/user.extra-reducers/remove-subsite-user.extra-reducers';
import { updatePasswordUserExtraReducers } from '../extra-reducers/user.extra-reducers/update-password-user.extra-reducers';
import { updateProfileUserExtraReducers } from '../extra-reducers/user.extra-reducers/update-profile-user.extra-reducers';
import { updateUserExtraReducers } from '../extra-reducers/user.extra-reducers/update-user.extra-reducers';

interface UserState {
    users: User[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: UserState = {
    users: [],
    loading: false,
    success: false,
    error: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetuserState: (state) => {
            (state.users = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        addAddressUserExtraReducers(builder);
        addNotificationUserExtraReducers(builder);
        addOrderUserExtraReducers(builder);
        addSubsiteUserExtraReducers(builder);
        createAuditLogUserExtraReducers(builder);
        createUserExtraReducers(builder);
        deleteUserExtraReducers(builder);
        getActiveCountUserExtraReducers(builder);
        getActivityLogUserExtraReducers(builder);
        getAddressesUserExtraReducers(builder);
        getAuditLogsUserExtraReducers(builder);
        getByEmailUserExtraReducers(builder);
        getByIdUserExtraReducers(builder);
        getByRoleUserExtraReducers(builder);
        getCartUserExtraReducers(builder);
        getCountByRoleUserExtraReducers(builder);
        getInactiveUsersUserExtraReducers(builder);
        getNotificationsUserExtraReducers(builder);
        getOrdersUserExtraReducers(builder);
        getReviewsUserExtraReducers(builder);
        getSubsitesUserExtraReducers(builder);
        getTicketsUserExtraReducers(builder);
        removeAddressUserExtraReducers(builder);
        removeNotificationUserExtraReducers(builder);
        removeOrderUserExtraReducers(builder);
        removeSubsiteUserExtraReducers(builder);
        updatePasswordUserExtraReducers(builder);
        updateProfileUserExtraReducers(builder);
        updateUserExtraReducers(builder);
    },
});

export const { resetuserState } = userSlice.actions;

export default userSlice.reducer;
