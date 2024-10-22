import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    CREATE_AUDIT_LOG,
    DELETE_AUDIT_LOG,
    GET_AUDIT_LOG_BY_ID,
    GET_AUDIT_LOGS_BY_ACTION,
    GET_AUDIT_LOGS_BY_DATE_RANGE,
    GET_AUDIT_LOGS_BY_ENTITY,
    GET_AUDIT_LOGS_BY_USER,
    GET_RECENT_AUDIT_LOGS,
    UPDATE_AUDIT_LOG,
} from '../config/graphql/queries/audit-Log.queries';
import { AuditLog } from '../../domain/entities/audit-log.entity';
import { IAuditLogRepository } from '../../domain/repositories/audit-log.repository';

@injectable()
export class AuditLogRepositoryImpl implements IAuditLogRepository {
    getByUser(userId: number): Promise<AuditLog[]> {
        throw new Error('Method not implemented.');
    }
    update(id: number, updatedLog: AuditLog): Promise<AuditLog> {
        throw new Error('Method not implemented.');
    }
    delete(id: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    validate(log: AuditLog): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    async create(dto: AuditLog): Promise<AuditLog> {
        const { data } = await client.mutate({
            mutation: CREATE_AUDIT_LOG,
            variables: { dto },
        });
        return data.createAuditLog;
    }

    async deleteById(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_AUDIT_LOG,
            variables: { id },
        });
        return data.deleteAuditLog;
    }

    async getById(id: number): Promise<AuditLog | null> {
        const { data } = await client.query({
            query: GET_AUDIT_LOG_BY_ID,
            variables: { id },
        });
        return data.auditLogById;
    }

    async getByAction(action: string): Promise<AuditLog[]> {
        const { data } = await client.query({
            query: GET_AUDIT_LOGS_BY_ACTION,
            variables: { action },
        });
        return data.auditLogsByAction;
    }

    async getByDateRange(startDate: Date, endDate: Date): Promise<AuditLog[]> {
        const { data } = await client.query({
            query: GET_AUDIT_LOGS_BY_DATE_RANGE,
            variables: { startDate, endDate },
        });
        return data.auditLogsByDateRange;
    }

    async getByEntity(entity: string, entityId: number): Promise<AuditLog[]> {
        const { data } = await client.query({
            query: GET_AUDIT_LOGS_BY_ENTITY,
            variables: { entity, entityId },
        });
        return data.auditLogsByEntity;
    }

    async getByUserId(userId: number): Promise<AuditLog[]> {
        const { data } = await client.query({
            query: GET_AUDIT_LOGS_BY_USER,
            variables: { userId },
        });
        return data.auditLogsByUser;
    }

    async getRecent(limit: number): Promise<AuditLog[]> {
        const { data } = await client.query({
            query: GET_RECENT_AUDIT_LOGS,
            variables: { limit },
        });
        return data.recentAuditLogs;
    }

    async updateById(id: number, dto: Partial<AuditLog>): Promise<AuditLog> {
        const { data } = await client.mutate({
            mutation: UPDATE_AUDIT_LOG,
            variables: { id, dto },
        });
        return data.updateAuditLog;
    }
}
