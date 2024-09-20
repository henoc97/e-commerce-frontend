import { container } from 'tsyringe';

import { ICartRepositoryToken } from '../../tokens/tokens';
import { ICartRepository } from '../../../../domain/repositories/cart.repository';
import { CartRepositoryImpl } from '../../../repositories-impls/cart.repository-impl';
import { CartService } from '../../../../application/services/cart.service';

import { CreateCart } from '../../../../application/use-cases/cart.use-cases/create-cart.use-case';
import { GetByIdCart } from '../../../../application/use-cases/cart.use-cases/get-by-id-cart.use-case';
import { UpdateCart } from '../../../../application/use-cases/cart.use-cases/update-cart.use-case';
import { DeleteCart } from '../../../../application/use-cases/cart.use-cases/delete-cart.use-case';
import { AddItemCart } from '../../../../application/use-cases/cart.use-cases/add-item-cart.use-case';
import { RemoveItemCart } from '../../../../application/use-cases/cart.use-cases/remove-item-cart.use-case';
import { GetItemsCart } from '../../../../application/use-cases/cart.use-cases/get-items-cart.use-case';
import { ClearCart } from '../../../../application/use-cases/cart.use-cases/clear-cart.use-case';
import { GetByUserIdCart } from '../../../../application/use-cases/cart.use-cases/get-by-user-id-cart.use-case';
import { MergeCartsCart } from '../../../../application/use-cases/cart.use-cases/merge-carts-cart.use-case';
import { GetItemCountCart } from '../../../../application/use-cases/cart.use-cases/get-item-count-cart.use-case';
import { GetTotalValueCart } from '../../../../application/use-cases/cart.use-cases/get-total-value-cart.use-case';

// Registering dependencies

/**
 * Register the CartRepository's concrete implementation
 */
container.register<ICartRepository>(ICartRepositoryToken, {
    useClass: CartRepositoryImpl,
});
container.register<CartService>(CartService, { useClass: CartService });

container.register<CreateCart>(CreateCart, { useClass: CreateCart });

container.register<GetByIdCart>(GetByIdCart, { useClass: GetByIdCart });

container.register<UpdateCart>(UpdateCart, { useClass: UpdateCart });

container.register<DeleteCart>(DeleteCart, { useClass: DeleteCart });

container.register<AddItemCart>(AddItemCart, { useClass: AddItemCart });

container.register<RemoveItemCart>(RemoveItemCart, {
    useClass: RemoveItemCart,
});

container.register<GetItemsCart>(GetItemsCart, { useClass: GetItemsCart });

container.register<ClearCart>(ClearCart, { useClass: ClearCart });

container.register<GetByUserIdCart>(GetByUserIdCart, {
    useClass: GetByUserIdCart,
});

container.register<MergeCartsCart>(MergeCartsCart, {
    useClass: MergeCartsCart,
});

container.register<GetItemCountCart>(GetItemCountCart, {
    useClass: GetItemCountCart,
});

container.register<GetTotalValueCart>(GetTotalValueCart, {
    useClass: GetTotalValueCart,
});

// Exporting the container
export { container };
