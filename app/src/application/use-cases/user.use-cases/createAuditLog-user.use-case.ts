import { AuditLog } from '../../../domain/entities/audit-log.entity';
import { UserService } from '../../services/user.service';

/**
 * Use case class for createAuditLog.
 * This class encapsulates the business logic for createAuditLog.
 * It interacts with the User service to perform operations on the user repository.
 */
export class CreateAuditLogUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the createAuditLog use case.
     * @param userId - The number required by the service method.
     * @param auditLog - The AuditLog required by the service method.
     * @returns A promise with the service result of type Promise<void>.
     */
    async execute(userId: number, auditLog: AuditLog): Promise<void> {
        const result = await this.service.createAuditLog(userId, auditLog);

        return result;
    }
}
