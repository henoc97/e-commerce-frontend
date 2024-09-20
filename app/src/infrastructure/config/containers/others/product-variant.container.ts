import { container } from 'tsyringe';

import { IProductVariantRepositoryToken } from '../../tokens/tokens';
import { IProductVariantRepository } from '../../../../domain/repositories/product-variant.repository';
import { ProductVariantRepositoryImpl } from '../../../repositories-impls/product-variant.repository-impl';
import { ProductVariantService } from '../../../../application/services/product-variant.service';

import { CreateProductVariant } from '../../../../application/use-cases/product-variant.use-cases/create-product-variant.use-case';
import { GetByIdProductVariant } from '../../../../application/use-cases/product-variant.use-cases/get-by-id-product-variant.use-case';
import { DeleteProductVariant } from '../../../../application/use-cases/product-variant.use-cases/delete-product-variant.use-case';
import { GetByProductIdProductVariant } from '../../../../application/use-cases/product-variant.use-cases/get-by-product-id-product-variant.use-case';
import { DeleteByProductIdProductVariant } from '../../../../application/use-cases/product-variant.use-cases/delete-by-product-id-product-variant.use-case';
import { ExistsProductVariant } from '../../../../application/use-cases/product-variant.use-cases/exists-product-variant.use-case';
import { GetByNameProductVariant } from '../../../../application/use-cases/product-variant.use-cases/get-by-name-product-variant.use-case';
import { GetMostPopularVariantProductVariant } from '../../../../application/use-cases/product-variant.use-cases/get-most-popular-variant-product-variant.use-case';

// Registering dependencies

/**
 * Register the ProductVariantRepository's concrete implementation
 */
container.register<IProductVariantRepository>(IProductVariantRepositoryToken, {
    useClass: ProductVariantRepositoryImpl,
});
container.register<ProductVariantService>(ProductVariantService, {
    useClass: ProductVariantService,
});

container.register<CreateProductVariant>(CreateProductVariant, {
    useClass: CreateProductVariant,
});

container.register<GetByIdProductVariant>(GetByIdProductVariant, {
    useClass: GetByIdProductVariant,
});

container.register<DeleteProductVariant>(DeleteProductVariant, {
    useClass: DeleteProductVariant,
});

container.register<GetByProductIdProductVariant>(GetByProductIdProductVariant, {
    useClass: GetByProductIdProductVariant,
});

container.register<DeleteByProductIdProductVariant>(
    DeleteByProductIdProductVariant,
    { useClass: DeleteByProductIdProductVariant }
);

container.register<ExistsProductVariant>(ExistsProductVariant, {
    useClass: ExistsProductVariant,
});

container.register<GetByNameProductVariant>(GetByNameProductVariant, {
    useClass: GetByNameProductVariant,
});

container.register<GetMostPopularVariantProductVariant>(
    GetMostPopularVariantProductVariant,
    { useClass: GetMostPopularVariantProductVariant }
);

// Exporting the container
export { container };
