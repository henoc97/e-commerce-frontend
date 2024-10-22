import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    COUNT_SUBSITES_BY_USER,
    CREATE_SUBSITE,
    FETCH_LATEST_SUBSITE,
    FETCH_SUBSITE_BY_ID,
    LIST_ACTIVE_SUBSITES,
    REMOVE_SUBSITE,
    UPDATE_SUBSITE,
    VALIDATE_SUBSITE,
    FETCH_SUBSITE_CONFIG,
    LIST_SUBSITES_BY_USER,
    UPDATE_SUBSITE_CONFIG,
} from '../config/graphql/queries/subsite.queries';
import { Subsite } from '../../domain/entities/subsite.entity';
import { ISubsiteRepository } from '../../domain/repositories/subsite.repository';

@injectable()
export class SubsiteRepositoryImpl implements ISubsiteRepository {
    async create(subsite: Subsite): Promise<Subsite> {
        const { data } = await client.mutate({
            mutation: CREATE_SUBSITE,
            variables: { subsiteDTO: subsite },
        });
        return data.createSubsite;
    }

    async getById(id: number): Promise<Subsite | null> {
        const { data } = await client.query({
            query: FETCH_SUBSITE_BY_ID,
            variables: { id },
        });
        return data.fetchSubsiteById;
    }

    async update(id: number, updates: Partial<Subsite>): Promise<Subsite> {
        const { data } = await client.mutate({
            mutation: UPDATE_SUBSITE,
            variables: { id, updates },
        });
        return data.updateSubsite;
    }

    async remove(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: REMOVE_SUBSITE,
            variables: { id },
        });
        return data.removeSubsite;
    }

    async getByUser(userId: number): Promise<Subsite[]> {
        const { data } = await client.query({
            query: LIST_SUBSITES_BY_USER,
            variables: { userId },
        });
        return data.listSubsitesByUser;
    }

    async validate(subsite: Subsite): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: VALIDATE_SUBSITE,
            variables: { subsiteDTO: subsite },
        });
        return data.validateSubsite;
    }

    async getConfig(id: number): Promise<any> {
        const { data } = await client.query({
            query: FETCH_SUBSITE_CONFIG,
            variables: { id },
        });
        return data.fetchSubsiteConfig;
    }

    async updateConfig(id: number, config: any): Promise<Subsite> {
        const { data } = await client.mutate({
            mutation: UPDATE_SUBSITE_CONFIG,
            variables: { id, config },
        });
        return data.updateSubsiteConfig;
    }

    async getLatest(): Promise<Subsite> {
        const { data } = await client.query({
            query: FETCH_LATEST_SUBSITE,
        });
        return data.fetchLatestSubsite;
    }

    async getActive(): Promise<Subsite[]> {
        const { data } = await client.query({
            query: LIST_ACTIVE_SUBSITES,
        });
        return data.listActiveSubsites;
    }

    async countByUser(userId: number): Promise<number> {
        const { data } = await client.query({
            query: COUNT_SUBSITES_BY_USER,
            variables: { userId },
        });
        return data.countSubsitesByUser;
    }
}
