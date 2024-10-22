import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    CREATE_USER_PROFILE,
    DELETE_USER_PROFILE,
    FETCH_RECENTLY_UPDATED_PROFILES,
    FETCH_USER_PROFILE_BY_ID,
    FETCH_USER_PROFILE_BY_USER_ID,
    FETCH_USER_PROFILES_BY_BIRTHDAY_RANGE,
    FETCH_USER_PROFILES_BY_GENDER,
    FIND_MATCHING_PROFILES,
    IS_PHONE_IN_USE,
    UPDATE_USER_PROFILE,
} from '../config/graphql/queries/user-profile.queries';
import { UserProfile } from '../../domain/entities/user-profile.entity';
import { IUserProfileRepository } from '../../domain/repositories/user-profile.repository';

@injectable()
export class UserProfileRepositoryImpl implements IUserProfileRepository {
    async create(profile: UserProfile): Promise<UserProfile> {
        const { data } = await client.mutate({
            mutation: CREATE_USER_PROFILE,
            variables: { profileDTO: profile },
        });
        return data.createUserProfile;
    }

    async getById(id: number): Promise<UserProfile | null> {
        const { data } = await client.query({
            query: FETCH_USER_PROFILE_BY_ID,
            variables: { id },
        });
        return data.fetchUserProfileById;
    }

    async update(id: number, updates: Partial<UserProfile>): Promise<UserProfile> {
        const { data } = await client.mutate({
            mutation: UPDATE_USER_PROFILE,
            variables: { id, profileDTO: updates },
        });
        return data.updateUserProfile;
    }

    async remove(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_USER_PROFILE,
            variables: { id },
        });
        return data.deleteUserProfile;
    }

    async getByUserId(userId: number): Promise<UserProfile | null> {
        const { data } = await client.query({
            query: FETCH_USER_PROFILE_BY_USER_ID,
            variables: { userId },
        });
        return data.fetchUserProfileByUserId;
    }

    async updatePhone(userId: number, phone: string): Promise<UserProfile> {
        const updates = { phone };
        return this.update(userId, updates);
    }

    async updateBirthday(userId: number, birthday: Date): Promise<UserProfile> {
        const updates = { birthday };
        return this.update(userId, updates);
    }

    async updateGender(userId: number, gender: string): Promise<UserProfile> {
        const updates = { gender };
        return this.update(userId, updates);
    }

    async getByGender(gender: string): Promise<UserProfile[]> {
        const { data } = await client.query({
            query: FETCH_USER_PROFILES_BY_GENDER,
            variables: { gender },
        });
        return data.fetchUserProfilesByGender;
    }

    async getByBirthdayRange(startDate: Date, endDate: Date): Promise<UserProfile[]> {
        const { data } = await client.query({
            query: FETCH_USER_PROFILES_BY_BIRTHDAY_RANGE,
            variables: { startDate, endDate },
        });
        return data.fetchUserProfilesByBirthdayRange;
    }

    async isPhoneInUse(phone: string): Promise<boolean> {
        const { data } = await client.query({
            query: IS_PHONE_IN_USE,
            variables: { phone },
        });
        return data.isPhoneInUse;
    }

    async exists(userId: number): Promise<boolean> {
        const profile = await this.getByUserId(userId);
        return profile !== null;
    }

    async getRecentlyUpdated(limit: number): Promise<UserProfile[]> {
        const { data } = await client.query({
            query: FETCH_RECENTLY_UPDATED_PROFILES,
            variables: { limit },
        });
        return data.fetchRecentlyUpdatedProfiles;
    }

    async findMatches(criteria: Partial<UserProfile>): Promise<UserProfile[]> {
        const { data } = await client.query({
            query: FIND_MATCHING_PROFILES,
            variables: { criteria },
        });
        return data.findMatchingProfiles;
    }
}
