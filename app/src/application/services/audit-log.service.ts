import { IAuditLogRepository } from '../../domain/repositories/audit-log.repository';
import { AuditLog } from '../../domain/entities/audit-log.entity';

/**
 * Service class for handling AuditLog-related operations.
 * It provides methods that call the underlying repository.
 */
export class AuditLogService {
    /**
     * Constructor for AuditLogService.
     * Injects the repository dependency.
     *
     * @param auditLogRepository - The repository that handles AuditLog data operations.
     */
    constructor(private readonly auditLogRepository: IAuditLogRepository) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param log - The AuditLog required by the repository method.
     * @returns Promise<AuditLog> - The result from the repository method.
     */
    public async create(log: AuditLog): Promise<AuditLog> {
        return await this.auditLogRepository.create(log);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<AuditLog | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<AuditLog | null> {
        return await this.auditLogRepository.getById(id);
    }

    /**
     * Service method for getByEntity.
     * Calls the repository's getByEntity method.
     * @param entity - The string required by the repository method.
     * @param entityId - The number required by the repository method.
     * @returns Promise<AuditLog[]> - The result from the repository method.
     */
    public async getByEntity(
        entity: string,
        entityId: number
    ): Promise<AuditLog[]> {
        return await this.auditLogRepository.getByEntity(entity, entityId);
    }

    /**
     * Service method for getByUser.
     * Calls the repository's getByUser method.
     * @param userId - The number required by the repository method.
     * @returns Promise<AuditLog[]> - The result from the repository method.
     */
    public async getByUser(userId: number): Promise<AuditLog[]> {
        return await this.auditLogRepository.getByUser(userId);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updatedLog - The AuditLog required by the repository method.
     * @returns Promise<AuditLog> - The result from the repository method.
     */
    public async update(id: number, updatedLog: AuditLog): Promise<AuditLog> {
        return await this.auditLogRepository.update(id, updatedLog);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.auditLogRepository.delete(id);
    }

    /**
     * Service method for getByDateRange.
     * Calls the repository's getByDateRange method.
     * @param startDate - The Date required by the repository method.
     * @param endDate - The Date required by the repository method.
     * @returns Promise<AuditLog[]> - The result from the repository method.
     */
    public async getByDateRange(
        startDate: Date,
        endDate: Date
    ): Promise<AuditLog[]> {
        return await this.auditLogRepository.getByDateRange(startDate, endDate);
    }

    /**
     * Service method for validate.
     * Calls the repository's validate method.
     * @param log - The AuditLog required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async validate(log: AuditLog): Promise<boolean> {
        return await this.auditLogRepository.validate(log);
    }

    /**
     * Service method for getRecent.
     * Calls the repository's getRecent method.
     * @param limit - The number required by the repository method.
     * @returns Promise<AuditLog[]> - The result from the repository method.
     */
    public async getRecent(limit: number): Promise<AuditLog[]> {
        return await this.auditLogRepository.getRecent(limit);
    }

    /**
     * Service method for getByAction.
     * Calls the repository's getByAction method.
     * @param action - The string required by the repository method.
     * @returns Promise<AuditLog[]> - The result from the repository method.
     */
    public async getByAction(action: string): Promise<AuditLog[]> {
        return await this.auditLogRepository.getByAction(action);
    }
}
