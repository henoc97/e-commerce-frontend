import { createSlice } from '@reduxjs/toolkit';

import { UserActivity } from '../../../domain/entities/user-activity.entity';

import { countByUserUserActivityExtraReducers } from '../extra-reducers/user-activity.extra-reducers/count-by-user-user-activity.extra-reducers';
import { createUserActivityExtraReducers } from '../extra-reducers/user-activity.extra-reducers/create-user-activity.extra-reducers';
import { deleteUserActivityExtraReducers } from '../extra-reducers/user-activity.extra-reducers/delete-user-activity.extra-reducers';
import { findByIdUserActivityExtraReducers } from '../extra-reducers/user-activity.extra-reducers/find-by-id-user-activity.extra-reducers';
import { getRecentByUserUserActivityExtraReducers } from '../extra-reducers/user-activity.extra-reducers/get-recent-by-user-user-activity.extra-reducers';
import { listByDateRangeUserActivityExtraReducers } from '../extra-reducers/user-activity.extra-reducers/list-by-date-range-user-activity.extra-reducers';
import { listByProductUserActivityExtraReducers } from '../extra-reducers/user-activity.extra-reducers/list-by-product-user-activity.extra-reducers';
import { listByUserUserActivityExtraReducers } from '../extra-reducers/user-activity.extra-reducers/list-by-user-user-activity.extra-reducers';
import { updateUserActivityExtraReducers } from '../extra-reducers/user-activity.extra-reducers/update-user-activity.extra-reducers';
import { validateUserActivityExtraReducers } from '../extra-reducers/user-activity.extra-reducers/validate-user-activity.extra-reducers';

interface UserActivityState {
    userActivitys: UserActivity[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: UserActivityState = {
    userActivitys: [],
    loading: false,
    success: false,
    error: null,
};

const userActivitySlice = createSlice({
    name: 'userActivity',
    initialState,
    reducers: {
        resetuserActivityState: (state) => {
            (state.userActivitys = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        countByUserUserActivityExtraReducers(builder);
        createUserActivityExtraReducers(builder);
        deleteUserActivityExtraReducers(builder);
        findByIdUserActivityExtraReducers(builder);
        getRecentByUserUserActivityExtraReducers(builder);
        listByDateRangeUserActivityExtraReducers(builder);
        listByProductUserActivityExtraReducers(builder);
        listByUserUserActivityExtraReducers(builder);
        updateUserActivityExtraReducers(builder);
        validateUserActivityExtraReducers(builder);
    },
});

export const { resetuserActivityState } = userActivitySlice.actions;

export default userActivitySlice.reducer;
