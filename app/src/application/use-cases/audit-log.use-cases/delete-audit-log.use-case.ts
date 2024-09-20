import { AuditLogService } from '../../services/audit-log.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for delete.
 * This class encapsulates the business logic for delete.
 * It interacts with the AuditLog service to perform operations on the auditlog repository.
 */
@injectable()
export class DeleteAuditLog {
    constructor(private readonly service: AuditLogService) {}

    /**
     * Execute the delete use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(id: number): Promise<boolean> {
        const result = await this.service.delete(id);

        return result;
    }
}
