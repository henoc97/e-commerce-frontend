import { AuditLogService } from '../../services/audit-log.service';
import { AuditLog } from '../../../domain/entities/audit-log.entity';

/**
 * Use case class for getByDateRange.
 * This class encapsulates the business logic for getByDateRange.
 * It interacts with the AuditLog service to perform operations on the auditlog repository.
 */
export class GetByDateRangeAuditLog {
    constructor(private readonly service: AuditLogService) {}

    /**
     * Execute the getByDateRange use case.
     * @param startDate - The Date required by the service method.
     * @param endDate - The Date required by the service method.
     * @returns A promise with the service result of type Promise<AuditLog[]>.
     */
    async execute(startDate: Date, endDate: Date): Promise<AuditLog[]> {
        const result = await this.service.getByDateRange(startDate, endDate);

        return result;
    }
}
