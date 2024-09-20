import { container } from 'tsyringe';

import { IRefundRepositoryToken } from '../../tokens/tokens';
import { IRefundRepository } from '../../../../domain/repositories/refund.repository';
import { RefundRepositoryImpl } from '../../../repositories-impls/refund.repository-impl';
import { RefundService } from '../../../../application/services/refund.service';

import { CreateRefund } from '../../../../application/use-cases/refund.use-cases/create-refund.use-case';
import { GetByIdRefund } from '../../../../application/use-cases/refund.use-cases/get-by-id-refund.use-case';
import { GetByOrderRefund } from '../../../../application/use-cases/refund.use-cases/get-by-order-refund.use-case';
import { ModifyRefund } from '../../../../application/use-cases/refund.use-cases/modify-refund.use-case';
import { RemoveRefund } from '../../../../application/use-cases/refund.use-cases/remove-refund.use-case';
import { IsEligibleRefund } from '../../../../application/use-cases/refund.use-cases/is-eligible-refund.use-case';
import { ProcessRefund } from '../../../../application/use-cases/refund.use-cases/process-refund.use-case';
import { GetByStatusRefund } from '../../../../application/use-cases/refund.use-cases/get-by-status-refund.use-case';
import { CancelRefund } from '../../../../application/use-cases/refund.use-cases/cancel-refund.use-case';
import { ApproveRefund } from '../../../../application/use-cases/refund.use-cases/approve-refund.use-case';
import { IssuePartialRefund } from '../../../../application/use-cases/refund.use-cases/issue-partial-refund.use-case';
import { GetTotalRefundedRefund } from '../../../../application/use-cases/refund.use-cases/get-total-refunded-refund.use-case';

// Registering dependencies

/**
 * Register the RefundRepository's concrete implementation
 */
container.register<IRefundRepository>(IRefundRepositoryToken, {
    useClass: RefundRepositoryImpl,
});
container.register<RefundService>(RefundService, { useClass: RefundService });

container.register<CreateRefund>(CreateRefund, { useClass: CreateRefund });

container.register<GetByIdRefund>(GetByIdRefund, { useClass: GetByIdRefund });

container.register<GetByOrderRefund>(GetByOrderRefund, {
    useClass: GetByOrderRefund,
});

container.register<ModifyRefund>(ModifyRefund, { useClass: ModifyRefund });

container.register<RemoveRefund>(RemoveRefund, { useClass: RemoveRefund });

container.register<IsEligibleRefund>(IsEligibleRefund, {
    useClass: IsEligibleRefund,
});

container.register<ProcessRefund>(ProcessRefund, { useClass: ProcessRefund });

container.register<GetByStatusRefund>(GetByStatusRefund, {
    useClass: GetByStatusRefund,
});

container.register<CancelRefund>(CancelRefund, { useClass: CancelRefund });

container.register<ApproveRefund>(ApproveRefund, { useClass: ApproveRefund });

container.register<IssuePartialRefund>(IssuePartialRefund, {
    useClass: IssuePartialRefund,
});

container.register<GetTotalRefundedRefund>(GetTotalRefundedRefund, {
    useClass: GetTotalRefundedRefund,
});

// Exporting the container
export { container };
