import { container } from 'tsyringe';

import { IOrderItemRepositoryToken } from '../../tokens/tokens';
import { IOrderItemRepository } from '../../../../domain/repositories/order-item.repository';
import { OrderItemRepositoryImpl } from '../../../repositories-impls/order-item.repository-impl';
import { OrderItemService } from '../../../../application/services/order-item.service';

import { CreateOrderItem } from '../../../../application/use-cases/order-item.use-cases/create-order-item.use-case';
import { GetByIdOrderItem } from '../../../../application/use-cases/order-item.use-cases/get-by-id-order-item.use-case';
import { UpdateOrderItem } from '../../../../application/use-cases/order-item.use-cases/update-order-item.use-case';
import { DeleteOrderItem } from '../../../../application/use-cases/order-item.use-cases/delete-order-item.use-case';
import { GetByOrderIdOrderItem } from '../../../../application/use-cases/order-item.use-cases/get-by-order-id-order-item.use-case';
import { GetByProductIdOrderItem } from '../../../../application/use-cases/order-item.use-cases/get-by-product-id-order-item.use-case';
import { CalculateTotalPriceOrderItem } from '../../../../application/use-cases/order-item.use-cases/calculate-total-price-order-item.use-case';
import { GetRecentItemsOrderItem } from '../../../../application/use-cases/order-item.use-cases/get-recent-items-order-item.use-case';
import { GetLowStockItemsOrderItem } from '../../../../application/use-cases/order-item.use-cases/get-low-stock-items-order-item.use-case';

// Registering dependencies

/**
 * Register the OrderItemRepository's concrete implementation
 */
container.register<IOrderItemRepository>(IOrderItemRepositoryToken, {
    useClass: OrderItemRepositoryImpl,
});
container.register<OrderItemService>(OrderItemService, {
    useClass: OrderItemService,
});

container.register<CreateOrderItem>(CreateOrderItem, {
    useClass: CreateOrderItem,
});

container.register<GetByIdOrderItem>(GetByIdOrderItem, {
    useClass: GetByIdOrderItem,
});

container.register<UpdateOrderItem>(UpdateOrderItem, {
    useClass: UpdateOrderItem,
});

container.register<DeleteOrderItem>(DeleteOrderItem, {
    useClass: DeleteOrderItem,
});

container.register<GetByOrderIdOrderItem>(GetByOrderIdOrderItem, {
    useClass: GetByOrderIdOrderItem,
});

container.register<GetByProductIdOrderItem>(GetByProductIdOrderItem, {
    useClass: GetByProductIdOrderItem,
});

container.register<CalculateTotalPriceOrderItem>(CalculateTotalPriceOrderItem, {
    useClass: CalculateTotalPriceOrderItem,
});

container.register<GetRecentItemsOrderItem>(GetRecentItemsOrderItem, {
    useClass: GetRecentItemsOrderItem,
});

container.register<GetLowStockItemsOrderItem>(GetLowStockItemsOrderItem, {
    useClass: GetLowStockItemsOrderItem,
});

// Exporting the container
export { container };
