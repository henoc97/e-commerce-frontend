import { AuditLog } from '../../../domain/entities/audit-log.entity';
import { AuditLogService } from '../../services/audit-log.service';

/**
 * Use case class for validate.
 * This class encapsulates the business logic for validate.
 * It interacts with the AuditLog service to perform operations on the auditlog repository.
 */
export class ValidateAuditLog {
    constructor(private readonly service: AuditLogService) {}

    /**
     * Execute the validate use case.
     * @param log - The AuditLog required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(log: AuditLog): Promise<boolean> {
        const result = await this.service.validate(log);

        return result;
    }
}
