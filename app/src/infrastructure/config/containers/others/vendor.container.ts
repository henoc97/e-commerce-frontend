import { container } from 'tsyringe';

import { IVendorRepositoryToken } from '../../tokens/tokens';
import { IVendorRepository } from '../../../../domain/repositories/vendor.repository';
import { VendorRepositoryImpl } from '../../../repositories-impls/vendor.repository-impl';
import { VendorService } from '../../../../application/services/vendor.service';

import { CreateVendor } from '../../../../application/use-cases/vendor.use-cases/create-vendor.use-case';
import { FindByIdVendor } from '../../../../application/use-cases/vendor.use-cases/find-by-id-vendor.use-case';
import { UpdateVendor } from '../../../../application/use-cases/vendor.use-cases/update-vendor.use-case';
import { DeleteVendor } from '../../../../application/use-cases/vendor.use-cases/delete-vendor.use-case';
import { FindByStoreNameVendor } from '../../../../application/use-cases/vendor.use-cases/find-by-store-name-vendor.use-case';
import { AddProductVendor } from '../../../../application/use-cases/vendor.use-cases/add-product-vendor.use-case';
import { RemoveProductVendor } from '../../../../application/use-cases/vendor.use-cases/remove-product-vendor.use-case';
import { GetProductsVendor } from '../../../../application/use-cases/vendor.use-cases/get-products-vendor.use-case';
import { GetSubscriptionVendor } from '../../../../application/use-cases/vendor.use-cases/get-subscription-vendor.use-case';
import { GetShopVendor } from '../../../../application/use-cases/vendor.use-cases/get-shop-vendor.use-case';
import { SetShopVendor } from '../../../../application/use-cases/vendor.use-cases/set-shop-vendor.use-case';
import { FindByUserVendor } from '../../../../application/use-cases/vendor.use-cases/find-by-user-vendor.use-case';
import { FindBySubscriptionVendor } from '../../../../application/use-cases/vendor.use-cases/find-by-subscription-vendor.use-case';
import { GetallVendor } from '../../../../application/use-cases/vendor.use-cases/getall-vendor.use-case';
import { GetLatestVendor } from '../../../../application/use-cases/vendor.use-cases/get-latest-vendor.use-case';

// Registering dependencies

/**
 * Register the VendorRepository's concrete implementation
 */
container.register<IVendorRepository>(IVendorRepositoryToken, {
    useClass: VendorRepositoryImpl,
});
container.register<VendorService>(VendorService, { useClass: VendorService });

container.register<CreateVendor>(CreateVendor, { useClass: CreateVendor });

container.register<FindByIdVendor>(FindByIdVendor, {
    useClass: FindByIdVendor,
});

container.register<UpdateVendor>(UpdateVendor, { useClass: UpdateVendor });

container.register<DeleteVendor>(DeleteVendor, { useClass: DeleteVendor });

container.register<FindByStoreNameVendor>(FindByStoreNameVendor, {
    useClass: FindByStoreNameVendor,
});

container.register<AddProductVendor>(AddProductVendor, {
    useClass: AddProductVendor,
});

container.register<RemoveProductVendor>(RemoveProductVendor, {
    useClass: RemoveProductVendor,
});

container.register<GetProductsVendor>(GetProductsVendor, {
    useClass: GetProductsVendor,
});

container.register<GetSubscriptionVendor>(GetSubscriptionVendor, {
    useClass: GetSubscriptionVendor,
});

container.register<GetShopVendor>(GetShopVendor, { useClass: GetShopVendor });

container.register<SetShopVendor>(SetShopVendor, { useClass: SetShopVendor });

container.register<FindByUserVendor>(FindByUserVendor, {
    useClass: FindByUserVendor,
});

container.register<FindBySubscriptionVendor>(FindBySubscriptionVendor, {
    useClass: FindBySubscriptionVendor,
});

container.register<GetallVendor>(GetallVendor, { useClass: GetallVendor });

container.register<GetLatestVendor>(GetLatestVendor, {
    useClass: GetLatestVendor,
});

// Exporting the container
export { container };
