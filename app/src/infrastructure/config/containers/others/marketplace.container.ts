import { container } from 'tsyringe';

import { IMarketplaceRepositoryToken } from '../../tokens/tokens';
import { IMarketplaceRepository } from '../../../../domain/repositories/marketplace.repository';
import { MarketplaceRepositoryImpl } from '../../../repositories-impls/marketplace.repository-impl';
import { MarketplaceService } from '../../../../application/services/marketplace.service';

import { CreateMarketplace } from '../../../../application/use-cases/marketplace.use-cases/create-marketplace.use-case';
import { GetByIdMarketplace } from '../../../../application/use-cases/marketplace.use-cases/get-by-id-marketplace.use-case';
import { ListMarketplace } from '../../../../application/use-cases/marketplace.use-cases/list-marketplace.use-case';
import { UpdateMarketplace } from '../../../../application/use-cases/marketplace.use-cases/update-marketplace.use-case';
import { DeleteMarketplace } from '../../../../application/use-cases/marketplace.use-cases/delete-marketplace.use-case';
import { AddShopMarketplace } from '../../../../application/use-cases/marketplace.use-cases/add-shop-marketplace.use-case';
import { RemoveShopMarketplace } from '../../../../application/use-cases/marketplace.use-cases/remove-shop-marketplace.use-case';
import { GetShopsMarketplace } from '../../../../application/use-cases/marketplace.use-cases/get-shops-marketplace.use-case';
import { GetMarketplaceByShopIdMarketplace } from '../../../../application/use-cases/marketplace.use-cases/get-marketplace-by-shop-id-marketplace.use-case';

// Registering dependencies

/**
 * Register the MarketplaceRepository's concrete implementation
 */
container.register<IMarketplaceRepository>(IMarketplaceRepositoryToken, {
    useClass: MarketplaceRepositoryImpl,
});
container.register<MarketplaceService>(MarketplaceService, {
    useClass: MarketplaceService,
});

container.register<CreateMarketplace>(CreateMarketplace, {
    useClass: CreateMarketplace,
});

container.register<GetByIdMarketplace>(GetByIdMarketplace, {
    useClass: GetByIdMarketplace,
});

container.register<ListMarketplace>(ListMarketplace, {
    useClass: ListMarketplace,
});

container.register<UpdateMarketplace>(UpdateMarketplace, {
    useClass: UpdateMarketplace,
});

container.register<DeleteMarketplace>(DeleteMarketplace, {
    useClass: DeleteMarketplace,
});

container.register<AddShopMarketplace>(AddShopMarketplace, {
    useClass: AddShopMarketplace,
});

container.register<RemoveShopMarketplace>(RemoveShopMarketplace, {
    useClass: RemoveShopMarketplace,
});

container.register<GetShopsMarketplace>(GetShopsMarketplace, {
    useClass: GetShopsMarketplace,
});

container.register<GetMarketplaceByShopIdMarketplace>(
    GetMarketplaceByShopIdMarketplace,
    { useClass: GetMarketplaceByShopIdMarketplace }
);

// Exporting the container
export { container };
