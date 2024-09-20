import { container } from 'tsyringe';

import { IShopRepositoryToken } from '../../tokens/tokens';
import { IShopRepository } from '../../../../domain/repositories/shop.repository';
import { ShopRepositoryImpl } from '../../../repositories-impls/shop.repository-impl';
import { ShopService } from '../../../../application/services/shop.service';

import { CreateShop } from '../../../../application/use-cases/shop.use-cases/create-shop.use-case';
import { GetByIdShop } from '../../../../application/use-cases/shop.use-cases/get-by-id-shop.use-case';
import { UpdateShop } from '../../../../application/use-cases/shop.use-cases/update-shop.use-case';
import { DeleteShop } from '../../../../application/use-cases/shop.use-cases/delete-shop.use-case';
import { SearchByNameShop } from '../../../../application/use-cases/shop.use-cases/search-by-name-shop.use-case';
import { AddProductShop } from '../../../../application/use-cases/shop.use-cases/add-product-shop.use-case';
import { RemoveProductShop } from '../../../../application/use-cases/shop.use-cases/remove-product-shop.use-case';
import { ListProductsShop } from '../../../../application/use-cases/shop.use-cases/list-products-shop.use-case';
import { AddOrderShop } from '../../../../application/use-cases/shop.use-cases/add-order-shop.use-case';
import { ListOrdersShop } from '../../../../application/use-cases/shop.use-cases/list-orders-shop.use-case';
import { AddCategoryShop } from '../../../../application/use-cases/shop.use-cases/add-category-shop.use-case';
import { RemoveCategoryShop } from '../../../../application/use-cases/shop.use-cases/remove-category-shop.use-case';
import { ListCategoriesShop } from '../../../../application/use-cases/shop.use-cases/list-categories-shop.use-case';
import { GetMarketplaceShop } from '../../../../application/use-cases/shop.use-cases/get-marketplace-shop.use-case';
import { ListByVendorShop } from '../../../../application/use-cases/shop.use-cases/list-by-vendor-shop.use-case';
import { GetMostRecentShop } from '../../../../application/use-cases/shop.use-cases/get-most-recent-shop.use-case';
import { GetTotalSalesShop } from '../../../../application/use-cases/shop.use-cases/get-total-sales-shop.use-case';
import { GetTopProductShop } from '../../../../application/use-cases/shop.use-cases/get-top-product-shop.use-case';

// Registering dependencies

/**
 * Register the ShopRepository's concrete implementation
 */
container.register<IShopRepository>(IShopRepositoryToken, {
    useClass: ShopRepositoryImpl,
});
container.register<ShopService>(ShopService, { useClass: ShopService });

container.register<CreateShop>(CreateShop, { useClass: CreateShop });

container.register<GetByIdShop>(GetByIdShop, { useClass: GetByIdShop });

container.register<UpdateShop>(UpdateShop, { useClass: UpdateShop });

container.register<DeleteShop>(DeleteShop, { useClass: DeleteShop });

container.register<SearchByNameShop>(SearchByNameShop, {
    useClass: SearchByNameShop,
});

container.register<AddProductShop>(AddProductShop, {
    useClass: AddProductShop,
});

container.register<RemoveProductShop>(RemoveProductShop, {
    useClass: RemoveProductShop,
});

container.register<ListProductsShop>(ListProductsShop, {
    useClass: ListProductsShop,
});

container.register<AddOrderShop>(AddOrderShop, { useClass: AddOrderShop });

container.register<ListOrdersShop>(ListOrdersShop, {
    useClass: ListOrdersShop,
});

container.register<AddCategoryShop>(AddCategoryShop, {
    useClass: AddCategoryShop,
});

container.register<RemoveCategoryShop>(RemoveCategoryShop, {
    useClass: RemoveCategoryShop,
});

container.register<ListCategoriesShop>(ListCategoriesShop, {
    useClass: ListCategoriesShop,
});

container.register<GetMarketplaceShop>(GetMarketplaceShop, {
    useClass: GetMarketplaceShop,
});

container.register<ListByVendorShop>(ListByVendorShop, {
    useClass: ListByVendorShop,
});

container.register<GetMostRecentShop>(GetMostRecentShop, {
    useClass: GetMostRecentShop,
});

container.register<GetTotalSalesShop>(GetTotalSalesShop, {
    useClass: GetTotalSalesShop,
});

container.register<GetTopProductShop>(GetTopProductShop, {
    useClass: GetTopProductShop,
});

// Exporting the container
export { container };
