import { AuditLogService } from '../../services/audit-log.service';
import { AuditLog } from '../../../domain/entities/audit-log.entity';

/**
 * Use case class for getByEntity.
 * This class encapsulates the business logic for getByEntity.
 * It interacts with the AuditLog service to perform operations on the auditlog repository.
 */
export class GetByEntityAuditLog {
    constructor(private readonly service: AuditLogService) {}

    /**
     * Execute the getByEntity use case.
     * @param entity - The string required by the service method.
     * @param entityId - The number required by the service method.
     * @returns A promise with the service result of type Promise<AuditLog[]>.
     */
    async execute(entity: string, entityId: number): Promise<AuditLog[]> {
        const result = await this.service.getByEntity(entity, entityId);

        return result;
    }
}
