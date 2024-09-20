import { container } from 'tsyringe';

import { IAuditLogRepositoryToken } from '../../tokens/tokens';
import { IAuditLogRepository } from '../../../../domain/repositories/audit-log.repository';
import { AuditLogRepositoryImpl } from '../../../repositories-impls/audit-log.repository-impl';
import { AuditLogService } from '../../../../application/services/audit-log.service';

import { CreateAuditLog } from '../../../../application/use-cases/audit-log.use-cases/create-audit-log.use-case';
import { GetByIdAuditLog } from '../../../../application/use-cases/audit-log.use-cases/get-by-id-audit-log.use-case';
import { GetByEntityAuditLog } from '../../../../application/use-cases/audit-log.use-cases/get-by-entity-audit-log.use-case';
import { GetByUserAuditLog } from '../../../../application/use-cases/audit-log.use-cases/get-by-user-audit-log.use-case';
import { UpdateAuditLog } from '../../../../application/use-cases/audit-log.use-cases/update-audit-log.use-case';
import { DeleteAuditLog } from '../../../../application/use-cases/audit-log.use-cases/delete-audit-log.use-case';
import { GetByDateRangeAuditLog } from '../../../../application/use-cases/audit-log.use-cases/get-by-date-range-audit-log.use-case';
import { ValidateAuditLog } from '../../../../application/use-cases/audit-log.use-cases/validate-audit-log.use-case';
import { GetRecentAuditLog } from '../../../../application/use-cases/audit-log.use-cases/get-recent-audit-log.use-case';
import { GetByActionAuditLog } from '../../../../application/use-cases/audit-log.use-cases/get-by-action-audit-log.use-case';

// Registering dependencies

/**
 * Register the AuditLogRepository's concrete implementation
 */
container.register<IAuditLogRepository>(IAuditLogRepositoryToken, {
    useClass: AuditLogRepositoryImpl,
});
container.register<AuditLogService>(AuditLogService, {
    useClass: AuditLogService,
});

container.register<CreateAuditLog>(CreateAuditLog, {
    useClass: CreateAuditLog,
});

container.register<GetByIdAuditLog>(GetByIdAuditLog, {
    useClass: GetByIdAuditLog,
});

container.register<GetByEntityAuditLog>(GetByEntityAuditLog, {
    useClass: GetByEntityAuditLog,
});

container.register<GetByUserAuditLog>(GetByUserAuditLog, {
    useClass: GetByUserAuditLog,
});

container.register<UpdateAuditLog>(UpdateAuditLog, {
    useClass: UpdateAuditLog,
});

container.register<DeleteAuditLog>(DeleteAuditLog, {
    useClass: DeleteAuditLog,
});

container.register<GetByDateRangeAuditLog>(GetByDateRangeAuditLog, {
    useClass: GetByDateRangeAuditLog,
});

container.register<ValidateAuditLog>(ValidateAuditLog, {
    useClass: ValidateAuditLog,
});

container.register<GetRecentAuditLog>(GetRecentAuditLog, {
    useClass: GetRecentAuditLog,
});

container.register<GetByActionAuditLog>(GetByActionAuditLog, {
    useClass: GetByActionAuditLog,
});

// Exporting the container
export { container };
