import { AuditLogService } from '../../services/audit-log.service';
import { AuditLog } from '../../../domain/entities/audit-log.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the AuditLog service to perform operations on the auditlog repository.
 */
@injectable()
export class CreateAuditLog {
    constructor(private readonly service: AuditLogService) {}

    /**
     * Execute the create use case.
     * @param log - The AuditLog required by the service method.
     * @returns A promise with the service result of type Promise<AuditLog>.
     */
    async execute(log: AuditLog): Promise<AuditLog> {
        const result = await this.service.create(log);

        return result;
    }
}
