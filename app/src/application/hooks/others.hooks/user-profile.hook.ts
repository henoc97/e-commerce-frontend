import { useAppDispatch, useAppSelector } from '../index.hook';

import { UserProfile } from '../../../domain/entities/user-profile.entity';

import { createUserProfile } from '../../states/thunks/user-profile.thunks/create-user-profile.thunk';
import { existsUserProfile } from '../../states/thunks/user-profile.thunks/exists-user-profile.thunk';
import { findMatchesUserProfile } from '../../states/thunks/user-profile.thunks/find-matches-user-profile.thunk';
import { getByBirthdayRangeUserProfile } from '../../states/thunks/user-profile.thunks/get-by-birthday-range-user-profile.thunk';
import { getByGenderUserProfile } from '../../states/thunks/user-profile.thunks/get-by-gender-user-profile.thunk';
import { getByIdUserProfile } from '../../states/thunks/user-profile.thunks/get-by-id-user-profile.thunk';
import { getByUserIdUserProfile } from '../../states/thunks/user-profile.thunks/get-by-user-id-user-profile.thunk';
import { getRecentlyUpdatedUserProfile } from '../../states/thunks/user-profile.thunks/get-recently-updated-user-profile.thunk';
import { isPhoneInUseUserProfile } from '../../states/thunks/user-profile.thunks/is-phone-in-use-user-profile.thunk';
import { removeUserProfile } from '../../states/thunks/user-profile.thunks/remove-user-profile.thunk';
import { updateBirthdayUserProfile } from '../../states/thunks/user-profile.thunks/update-birthday-user-profile.thunk';
import { updateGenderUserProfile } from '../../states/thunks/user-profile.thunks/update-gender-user-profile.thunk';
import { updatePhoneUserProfile } from '../../states/thunks/user-profile.thunks/update-phone-user-profile.thunk';
import { updateUserProfile } from '../../states/thunks/user-profile.thunks/update-user-profile.thunk';

export const useUserProfile: any = () => {
    const dispatch = useAppDispatch();
    const userProfiles = useAppSelector((state: any) => state.userProfiles);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCreateUserProfile = (profile: UserProfile) => {
        dispatch(createUserProfile({ profile }));
    };

    const handleExistsUserProfile = (userId: number) => {
        dispatch(existsUserProfile({ userId }));
    };

    const handleFindMatchesUserProfile = (criteria: Partial<UserProfile>) => {
        dispatch(findMatchesUserProfile({ criteria }));
    };

    const handleGetByBirthdayRangeUserProfile = (
        startDate: Date,
        endDate: Date
    ) => {
        dispatch(getByBirthdayRangeUserProfile({ startDate, endDate }));
    };

    const handleGetByGenderUserProfile = (gender: string) => {
        dispatch(getByGenderUserProfile({ gender }));
    };

    const handleGetByIdUserProfile = (id: number) => {
        dispatch(getByIdUserProfile({ id }));
    };

    const handleGetByUserIdUserProfile = (userId: number) => {
        dispatch(getByUserIdUserProfile({ userId }));
    };

    const handleGetRecentlyUpdatedUserProfile = (limit: number) => {
        dispatch(getRecentlyUpdatedUserProfile({ limit }));
    };

    const handleIsPhoneInUseUserProfile = (phone: string) => {
        dispatch(isPhoneInUseUserProfile({ phone }));
    };

    const handleRemoveUserProfile = (id: number) => {
        dispatch(removeUserProfile({ id }));
    };

    const handleUpdateBirthdayUserProfile = (
        userId: number,
        birthday: Date
    ) => {
        dispatch(updateBirthdayUserProfile({ userId, birthday }));
    };

    const handleUpdateGenderUserProfile = (userId: number, gender: string) => {
        dispatch(updateGenderUserProfile({ userId, gender }));
    };

    const handleUpdatePhoneUserProfile = (userId: number, phone: string) => {
        dispatch(updatePhoneUserProfile({ userId, phone }));
    };

    const handleUpdateUserProfile = (
        id: number,
        updates: Partial<UserProfile>
    ) => {
        dispatch(updateUserProfile({ id, updates }));
    };

    return {
        ...userProfiles,
        loading,
        success,
        error,
        handleCreateUserProfile,
        handleExistsUserProfile,
        handleFindMatchesUserProfile,
        handleGetByBirthdayRangeUserProfile,
        handleGetByGenderUserProfile,
        handleGetByIdUserProfile,
        handleGetByUserIdUserProfile,
        handleGetRecentlyUpdatedUserProfile,
        handleIsPhoneInUseUserProfile,
        handleRemoveUserProfile,
        handleUpdateBirthdayUserProfile,
        handleUpdateGenderUserProfile,
        handleUpdatePhoneUserProfile,
        handleUpdateUserProfile,
    };
};
