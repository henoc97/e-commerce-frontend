import { container } from 'tsyringe';

import { IProductImageRepositoryToken } from '../../tokens/tokens';
import { IProductImageRepository } from '../../../../domain/repositories/product-image.repository';
import { ProductImageRepositoryImpl } from '../../../repositories-impls/product-image.repository-impl';
import { ProductImageService } from '../../../../application/services/product-image.service';

import { CreateProductImage } from '../../../../application/use-cases/product-image.use-cases/create-product-image.use-case';
import { GetByIdProductImage } from '../../../../application/use-cases/product-image.use-cases/get-by-id-product-image.use-case';
import { UpdateProductImage } from '../../../../application/use-cases/product-image.use-cases/update-product-image.use-case';
import { DeleteProductImage } from '../../../../application/use-cases/product-image.use-cases/delete-product-image.use-case';
import { GetByProductIdProductImage } from '../../../../application/use-cases/product-image.use-cases/get-by-product-id-product-image.use-case';
import { DeleteByProductIdProductImage } from '../../../../application/use-cases/product-image.use-cases/delete-by-product-id-product-image.use-case';
import { UpdateUrlProductImage } from '../../../../application/use-cases/product-image.use-cases/update-url-product-image.use-case';
import { ExistsProductImage } from '../../../../application/use-cases/product-image.use-cases/exists-product-image.use-case';
import { GetPrimaryImageProductImage } from '../../../../application/use-cases/product-image.use-cases/get-primary-image-product-image.use-case';
import { CountImagesByProductIdProductImage } from '../../../../application/use-cases/product-image.use-cases/count-images-by-product-id-product-image.use-case';

// Registering dependencies

/**
 * Register the ProductImageRepository's concrete implementation
 */
container.register<IProductImageRepository>(IProductImageRepositoryToken, {
    useClass: ProductImageRepositoryImpl,
});
container.register<ProductImageService>(ProductImageService, {
    useClass: ProductImageService,
});

container.register<CreateProductImage>(CreateProductImage, {
    useClass: CreateProductImage,
});

container.register<GetByIdProductImage>(GetByIdProductImage, {
    useClass: GetByIdProductImage,
});

container.register<UpdateProductImage>(UpdateProductImage, {
    useClass: UpdateProductImage,
});

container.register<DeleteProductImage>(DeleteProductImage, {
    useClass: DeleteProductImage,
});

container.register<GetByProductIdProductImage>(GetByProductIdProductImage, {
    useClass: GetByProductIdProductImage,
});

container.register<DeleteByProductIdProductImage>(
    DeleteByProductIdProductImage,
    { useClass: DeleteByProductIdProductImage }
);

container.register<UpdateUrlProductImage>(UpdateUrlProductImage, {
    useClass: UpdateUrlProductImage,
});

container.register<ExistsProductImage>(ExistsProductImage, {
    useClass: ExistsProductImage,
});

container.register<GetPrimaryImageProductImage>(GetPrimaryImageProductImage, {
    useClass: GetPrimaryImageProductImage,
});

container.register<CountImagesByProductIdProductImage>(
    CountImagesByProductIdProductImage,
    { useClass: CountImagesByProductIdProductImage }
);

// Exporting the container
export { container };
