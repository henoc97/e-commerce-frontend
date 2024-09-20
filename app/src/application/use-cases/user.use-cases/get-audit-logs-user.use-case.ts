import { AuditLog } from '../../../domain/entities/audit-log.entity';
import { UserService } from '../../services/user.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getAuditLogs.
 * This class encapsulates the business logic for getAuditLogs.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class GetAuditLogsUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getAuditLogs use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<AuditLog[]>.
     */
    async execute(userId: number): Promise<AuditLog[]> {
        const result = await this.service.getAuditLogs(userId);

        return result;
    }
}
