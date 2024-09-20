import { useAppDispatch, useAppSelector } from '../index.hook';

import { UserActivity } from '../../../domain/entities/user-activity.entity';

import { countByUserUserActivity } from '../../states/thunks/user-activity.thunks/count-by-user-user-activity.thunk';
import { createUserActivity } from '../../states/thunks/user-activity.thunks/create-user-activity.thunk';
import { deleteUserActivity } from '../../states/thunks/user-activity.thunks/delete-user-activity.thunk';
import { findByIdUserActivity } from '../../states/thunks/user-activity.thunks/find-by-id-user-activity.thunk';
import { getRecentByUserUserActivity } from '../../states/thunks/user-activity.thunks/get-recent-by-user-user-activity.thunk';
import { listByDateRangeUserActivity } from '../../states/thunks/user-activity.thunks/list-by-date-range-user-activity.thunk';
import { listByProductUserActivity } from '../../states/thunks/user-activity.thunks/list-by-product-user-activity.thunk';
import { listByUserUserActivity } from '../../states/thunks/user-activity.thunks/list-by-user-user-activity.thunk';
import { updateUserActivity } from '../../states/thunks/user-activity.thunks/update-user-activity.thunk';
import { validateUserActivity } from '../../states/thunks/user-activity.thunks/validate-user-activity.thunk';

export const useUserActivity: any = () => {
    const dispatch = useAppDispatch();
    const userActivitys = useAppSelector((state: any) => state.userActivitys);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCountByUserUserActivity = (userId: number) => {
        dispatch(countByUserUserActivity({ userId }));
    };

    const handleCreateUserActivity = (activity: UserActivity) => {
        dispatch(createUserActivity({ activity }));
    };

    const handleDeleteUserActivity = (id: number) => {
        dispatch(deleteUserActivity({ id }));
    };

    const handleFindByIdUserActivity = (id: number) => {
        dispatch(findByIdUserActivity({ id }));
    };

    const handleGetRecentByUserUserActivity = (
        userId: number,
        limit: number
    ) => {
        dispatch(getRecentByUserUserActivity({ userId, limit }));
    };

    const handleListByDateRangeUserActivity = (start: Date, end: Date) => {
        dispatch(listByDateRangeUserActivity({ start, end }));
    };

    const handleListByProductUserActivity = (productId: number) => {
        dispatch(listByProductUserActivity({ productId }));
    };

    const handleListByUserUserActivity = (userId: number) => {
        dispatch(listByUserUserActivity({ userId }));
    };

    const handleUpdateUserActivity = (id: number, activity: UserActivity) => {
        dispatch(updateUserActivity({ id, activity }));
    };

    const handleValidateUserActivity = (activity: UserActivity) => {
        dispatch(validateUserActivity({ activity }));
    };

    return {
        ...userActivitys,
        loading,
        success,
        error,
        handleCountByUserUserActivity,
        handleCreateUserActivity,
        handleDeleteUserActivity,
        handleFindByIdUserActivity,
        handleGetRecentByUserUserActivity,
        handleListByDateRangeUserActivity,
        handleListByProductUserActivity,
        handleListByUserUserActivity,
        handleUpdateUserActivity,
        handleValidateUserActivity,
    };
};
