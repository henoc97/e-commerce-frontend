import { AuditLogService } from '../../services/audit-log.service';
import { AuditLog } from '../../../domain/entities/audit-log.entity';

/**
 * Use case class for getByUser.
 * This class encapsulates the business logic for getByUser.
 * It interacts with the AuditLog service to perform operations on the auditlog repository.
 */
export class GetByUserAuditLog {
    constructor(private readonly service: AuditLogService) {}

    /**
     * Execute the getByUser use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<AuditLog[]>.
     */
    async execute(userId: number): Promise<AuditLog[]> {
        const result = await this.service.getByUser(userId);

        return result;
    }
}
