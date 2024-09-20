import { container } from 'tsyringe';

import { IPaymentRepositoryToken } from '../../tokens/tokens';
import { IPaymentRepository } from '../../../../domain/repositories/payment.repository';
import { PaymentRepositoryImpl } from '../../../repositories-impls/payment.repository-impl';
import { PaymentService } from '../../../../application/services/payment.service';

import { CreatePayment } from '../../../../application/use-cases/payment.use-cases/create-payment.use-case';
import { GetByIdPayment } from '../../../../application/use-cases/payment.use-cases/get-by-id-payment.use-case';
import { UpdatePayment } from '../../../../application/use-cases/payment.use-cases/update-payment.use-case';
import { DeletePayment } from '../../../../application/use-cases/payment.use-cases/delete-payment.use-case';
import { GetByOrderIdPayment } from '../../../../application/use-cases/payment.use-cases/get-by-order-id-payment.use-case';
import { GetByMethodPayment } from '../../../../application/use-cases/payment.use-cases/get-by-method-payment.use-case';
import { GetByStatusPayment } from '../../../../application/use-cases/payment.use-cases/get-by-status-payment.use-case';
import { GetByDateRangePayment } from '../../../../application/use-cases/payment.use-cases/get-by-date-range-payment.use-case';
import { GetTotalAmountByDateRangePayment } from '../../../../application/use-cases/payment.use-cases/get-total-amount-by-date-range-payment.use-case';
import { GetMostRecentPaymentByOrderIdPayment } from '../../../../application/use-cases/payment.use-cases/get-most-recent-payment-by-order-id-payment.use-case';
import { GetPaymentsGroupedByMethodPayment } from '../../../../application/use-cases/payment.use-cases/get-payments-grouped-by-method-payment.use-case';

// Registering dependencies

/**
 * Register the PaymentRepository's concrete implementation
 */
container.register<IPaymentRepository>(IPaymentRepositoryToken, {
    useClass: PaymentRepositoryImpl,
});
container.register<PaymentService>(PaymentService, {
    useClass: PaymentService,
});

container.register<CreatePayment>(CreatePayment, { useClass: CreatePayment });

container.register<GetByIdPayment>(GetByIdPayment, {
    useClass: GetByIdPayment,
});

container.register<UpdatePayment>(UpdatePayment, { useClass: UpdatePayment });

container.register<DeletePayment>(DeletePayment, { useClass: DeletePayment });

container.register<GetByOrderIdPayment>(GetByOrderIdPayment, {
    useClass: GetByOrderIdPayment,
});

container.register<GetByMethodPayment>(GetByMethodPayment, {
    useClass: GetByMethodPayment,
});

container.register<GetByStatusPayment>(GetByStatusPayment, {
    useClass: GetByStatusPayment,
});

container.register<GetByDateRangePayment>(GetByDateRangePayment, {
    useClass: GetByDateRangePayment,
});

container.register<GetTotalAmountByDateRangePayment>(
    GetTotalAmountByDateRangePayment,
    { useClass: GetTotalAmountByDateRangePayment }
);

container.register<GetMostRecentPaymentByOrderIdPayment>(
    GetMostRecentPaymentByOrderIdPayment,
    { useClass: GetMostRecentPaymentByOrderIdPayment }
);

container.register<GetPaymentsGroupedByMethodPayment>(
    GetPaymentsGroupedByMethodPayment,
    { useClass: GetPaymentsGroupedByMethodPayment }
);

// Exporting the container
export { container };
