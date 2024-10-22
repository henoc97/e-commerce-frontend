import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    COUNT_ACTIVITIES,
    DELETE_ACTIVITY,
    FETCH_ACTIVITY,
    GET_RECENT_ACTIVITIES,
    LIST_ACTIVITIES_BY_DATE_RANGE,
    LIST_ACTIVITIES_BY_PRODUCT,
    LIST_ACTIVITIES_BY_USER,
    RECORD_ACTIVITY,
    UPDATE_ACTIVITY,
    VALIDATE_ACTIVITY,
} from '../config/graphql/queries/user-activity.queries';
import { UserActivity } from '../../domain/entities/user-activity.entity';
import { IUserActivityRepository } from '../../domain/repositories/user-activity.repository';

@injectable()
export class UserActivityRepositoryImpl implements IUserActivityRepository {
    async create(activity: UserActivity): Promise<UserActivity> {
        const { data } = await client.mutate({
            mutation: RECORD_ACTIVITY,
            variables: { activityDTO: activity },
        });
        return data.recordActivity;
    }

    async findById(id: number): Promise<UserActivity | null> {
        const { data } = await client.query({
            query: FETCH_ACTIVITY,
            variables: { id },
        });
        return data.fetchActivity;
    }

    async listByUser(userId: number): Promise<UserActivity[]> {
        const { data } = await client.query({
            query: LIST_ACTIVITIES_BY_USER,
            variables: { userId },
        });
        return data.listActivitiesByUser;
    }

    async listByProduct(productId: number): Promise<UserActivity[]> {
        const { data } = await client.query({
            query: LIST_ACTIVITIES_BY_PRODUCT,
            variables: { productId },
        });
        return data.listActivitiesByProduct;
    }

    async update(id: number, activity: UserActivity): Promise<UserActivity> {
        const { data } = await client.mutate({
            mutation: UPDATE_ACTIVITY,
            variables: { id, updates: activity },
        });
        return data.updateActivity;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_ACTIVITY,
            variables: { id },
        });
        return data.deleteActivity;
    }

    async listByDateRange(start: Date, end: Date): Promise<UserActivity[]> {
        const { data } = await client.query({
            query: LIST_ACTIVITIES_BY_DATE_RANGE,
            variables: { start, end },
        });
        return data.listActivitiesByDateRange;
    }

    async validate(activity: UserActivity): Promise<boolean> {
        const { data } = await client.query({
            query: VALIDATE_ACTIVITY,
            variables: { activityDTO: activity },
        });
        return data.validateActivity;
    }

    async countByUser(userId: number): Promise<number> {
        const { data } = await client.query({
            query: COUNT_ACTIVITIES,
            variables: { userId },
        });
        return data.countActivities;
    }

    async getRecentByUser(userId: number, limit: number): Promise<UserActivity[]> {
        const { data } = await client.query({
            query: GET_RECENT_ACTIVITIES,
            variables: { userId, limit },
        });
        return data.getRecentActivities;
    }
}
