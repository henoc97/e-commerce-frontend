import { AuditLogService } from '../../services/audit-log.service';
import { AuditLog } from '../../../domain/entities/audit-log.entity';

/**
 * Use case class for getRecent.
 * This class encapsulates the business logic for getRecent.
 * It interacts with the AuditLog service to perform operations on the auditlog repository.
 */
export class GetRecentAuditLog {
    constructor(private readonly service: AuditLogService) {}

    /**
     * Execute the getRecent use case.
     * @param limit - The number required by the service method.
     * @returns A promise with the service result of type Promise<AuditLog[]>.
     */
    async execute(limit: number): Promise<AuditLog[]> {
        const result = await this.service.getRecent(limit);

        return result;
    }
}
