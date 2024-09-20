import { container } from 'tsyringe';

import { IOrderRepositoryToken } from '../../tokens/tokens';
import { IOrderRepository } from '../../../../domain/repositories/order.repository';
import { OrderRepositoryImpl } from '../../../repositories-impls/order.repository-impl';
import { OrderService } from '../../../../application/services/order.service';

import { CreateOrder } from '../../../../application/use-cases/order.use-cases/create-order.use-case';
import { GetByIdOrder } from '../../../../application/use-cases/order.use-cases/get-by-id-order.use-case';
import { UpdateOrder } from '../../../../application/use-cases/order.use-cases/update-order.use-case';
import { DeleteOrder } from '../../../../application/use-cases/order.use-cases/delete-order.use-case';
import { GetByUserIdOrder } from '../../../../application/use-cases/order.use-cases/get-by-user-id-order.use-case';
import { GetByShopIdOrder } from '../../../../application/use-cases/order.use-cases/get-by-shop-id-order.use-case';
import { GetByStatusOrder } from '../../../../application/use-cases/order.use-cases/get-by-status-order.use-case';
import { UpdateStatusOrder } from '../../../../application/use-cases/order.use-cases/update-status-order.use-case';
import { AddPaymentOrder } from '../../../../application/use-cases/order.use-cases/add-payment-order.use-case';
import { AddRefundOrder } from '../../../../application/use-cases/order.use-cases/add-refund-order.use-case';
import { GetByTrackingNumberOrder } from '../../../../application/use-cases/order.use-cases/get-by-tracking-number-order.use-case';
import { GetByDateRangeOrder } from '../../../../application/use-cases/order.use-cases/get-by-date-range-order.use-case';
import { GetRecentOrdersByShopOrder } from '../../../../application/use-cases/order.use-cases/get-recent-orders-by-shop-order.use-case';
import { GetTopOrdersByAmountOrder } from '../../../../application/use-cases/order.use-cases/get-top-orders-by-amount-order.use-case';

// Registering dependencies

/**
 * Register the OrderRepository's concrete implementation
 */
container.register<IOrderRepository>(IOrderRepositoryToken, {
    useClass: OrderRepositoryImpl,
});
container.register<OrderService>(OrderService, { useClass: OrderService });

container.register<CreateOrder>(CreateOrder, { useClass: CreateOrder });

container.register<GetByIdOrder>(GetByIdOrder, { useClass: GetByIdOrder });

container.register<UpdateOrder>(UpdateOrder, { useClass: UpdateOrder });

container.register<DeleteOrder>(DeleteOrder, { useClass: DeleteOrder });

container.register<GetByUserIdOrder>(GetByUserIdOrder, {
    useClass: GetByUserIdOrder,
});

container.register<GetByShopIdOrder>(GetByShopIdOrder, {
    useClass: GetByShopIdOrder,
});

container.register<GetByStatusOrder>(GetByStatusOrder, {
    useClass: GetByStatusOrder,
});

container.register<UpdateStatusOrder>(UpdateStatusOrder, {
    useClass: UpdateStatusOrder,
});

container.register<AddPaymentOrder>(AddPaymentOrder, {
    useClass: AddPaymentOrder,
});

container.register<AddRefundOrder>(AddRefundOrder, {
    useClass: AddRefundOrder,
});

container.register<GetByTrackingNumberOrder>(GetByTrackingNumberOrder, {
    useClass: GetByTrackingNumberOrder,
});

container.register<GetByDateRangeOrder>(GetByDateRangeOrder, {
    useClass: GetByDateRangeOrder,
});

container.register<GetRecentOrdersByShopOrder>(GetRecentOrdersByShopOrder, {
    useClass: GetRecentOrdersByShopOrder,
});

container.register<GetTopOrdersByAmountOrder>(GetTopOrdersByAmountOrder, {
    useClass: GetTopOrdersByAmountOrder,
});

// Exporting the container
export { container };
