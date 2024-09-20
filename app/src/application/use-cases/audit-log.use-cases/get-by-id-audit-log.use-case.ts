import { AuditLogService } from '../../services/audit-log.service';
import { AuditLog } from '../../../domain/entities/audit-log.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the AuditLog service to perform operations on the auditlog repository.
 */
@injectable()
export class GetByIdAuditLog {
    constructor(private readonly service: AuditLogService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<AuditLog | null>.
     */
    async execute(id: number): Promise<AuditLog | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
