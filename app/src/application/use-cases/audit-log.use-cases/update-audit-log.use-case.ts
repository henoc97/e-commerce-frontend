import { AuditLogService } from '../../services/audit-log.service';
import { AuditLog } from '../../../domain/entities/audit-log.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the AuditLog service to perform operations on the auditlog repository.
 */
@injectable()
export class UpdateAuditLog {
    constructor(private readonly service: AuditLogService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updatedLog - The AuditLog required by the service method.
     * @returns A promise with the service result of type Promise<AuditLog>.
     */
    async execute(id: number, updatedLog: AuditLog): Promise<AuditLog> {
        const result = await this.service.update(id, updatedLog);

        return result;
    }
}
