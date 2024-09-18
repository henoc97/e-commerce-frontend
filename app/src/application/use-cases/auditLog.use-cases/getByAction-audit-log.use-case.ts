import { AuditLogService } from '../../services/audit-log.service';
import { AuditLog } from '../../../domain/entities/audit-log.entity';

/**
 * Use case class for getByAction.
 * This class encapsulates the business logic for getByAction.
 * It interacts with the AuditLog service to perform operations on the auditlog repository.
 */
export class GetByActionAuditLog {
    constructor(private readonly service: AuditLogService) {}

    /**
     * Execute the getByAction use case.
     * @param action - The string required by the service method.
     * @returns A promise with the service result of type Promise<AuditLog[]>.
     */
    async execute(action: string): Promise<AuditLog[]> {
        const result = await this.service.getByAction(action);

        return result;
    }
}
