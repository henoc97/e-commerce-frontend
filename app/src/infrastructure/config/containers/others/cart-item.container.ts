import { container } from 'tsyringe';

import { ICartItemRepositoryToken } from '../../tokens/tokens';
import { ICartItemRepository } from '../../../../domain/repositories/cart-item.repository';
import { CartItemRepositoryImpl } from '../../../repositories-impls/cart-item.repository-impl';
import { CartItemService } from '../../../../application/services/cart-item.service';

import { CreateCartItem } from '../../../../application/use-cases/cart-item.use-cases/create-cart-item.use-case';
import { GetByIdCartItem } from '../../../../application/use-cases/cart-item.use-cases/get-by-id-cart-item.use-case';
import { UpdateCartItem } from '../../../../application/use-cases/cart-item.use-cases/update-cart-item.use-case';
import { RemoveCartItem } from '../../../../application/use-cases/cart-item.use-cases/remove-cart-item.use-case';
import { GetByCartIdCartItem } from '../../../../application/use-cases/cart-item.use-cases/get-by-cart-id-cart-item.use-case';
import { UpdateQuantityCartItem } from '../../../../application/use-cases/cart-item.use-cases/update-quantity-cart-item.use-case';
import { ClearCartCartItem } from '../../../../application/use-cases/cart-item.use-cases/clear-cart-cart-item.use-case';
import { CalculateCartTotalCartItem } from '../../../../application/use-cases/cart-item.use-cases/calculate-cart-total-cart-item.use-case';
import { GetHighestQuantityItemCartItem } from '../../../../application/use-cases/cart-item.use-cases/get-highest-quantity-item-cart-item.use-case';

// Registering dependencies

/**
 * Register the CartItemRepository's concrete implementation
 */
container.register<ICartItemRepository>(ICartItemRepositoryToken, {
    useClass: CartItemRepositoryImpl,
});
container.register<CartItemService>(CartItemService, {
    useClass: CartItemService,
});

container.register<CreateCartItem>(CreateCartItem, {
    useClass: CreateCartItem,
});

container.register<GetByIdCartItem>(GetByIdCartItem, {
    useClass: GetByIdCartItem,
});

container.register<UpdateCartItem>(UpdateCartItem, {
    useClass: UpdateCartItem,
});

container.register<RemoveCartItem>(RemoveCartItem, {
    useClass: RemoveCartItem,
});

container.register<GetByCartIdCartItem>(GetByCartIdCartItem, {
    useClass: GetByCartIdCartItem,
});

container.register<UpdateQuantityCartItem>(UpdateQuantityCartItem, {
    useClass: UpdateQuantityCartItem,
});

container.register<ClearCartCartItem>(ClearCartCartItem, {
    useClass: ClearCartCartItem,
});

container.register<CalculateCartTotalCartItem>(CalculateCartTotalCartItem, {
    useClass: CalculateCartTotalCartItem,
});

container.register<GetHighestQuantityItemCartItem>(
    GetHighestQuantityItemCartItem,
    { useClass: GetHighestQuantityItemCartItem }
);

// Exporting the container
export { container };
