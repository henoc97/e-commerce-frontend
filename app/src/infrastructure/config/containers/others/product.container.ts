import { container } from 'tsyringe';

import { IProductRepositoryToken } from '../../tokens/tokens';
import { IProductRepository } from '../../../../domain/repositories/product.repository';
import { ProductRepositoryImpl } from '../../../repositories-impls/product.repository-impl';
import { ProductService } from '../../../../application/services/product.service';

import { CreateProduct } from '../../../../application/use-cases/product.use-cases/create-product.use-case';
import { GetByIdProduct } from '../../../../application/use-cases/product.use-cases/get-by-id-product.use-case';
import { UpdateProduct } from '../../../../application/use-cases/product.use-cases/update-product.use-case';
import { DeleteProduct } from '../../../../application/use-cases/product.use-cases/delete-product.use-case';
import { FindByNameProduct } from '../../../../application/use-cases/product.use-cases/find-by-name-product.use-case';
import { FindByCategoryProduct } from '../../../../application/use-cases/product.use-cases/find-by-category-product.use-case';
import { AddPromotionProduct } from '../../../../application/use-cases/product.use-cases/add-promotion-product.use-case';
import { RemovePromotionProduct } from '../../../../application/use-cases/product.use-cases/remove-promotion-product.use-case';
import { AddImageProduct } from '../../../../application/use-cases/product.use-cases/add-image-product.use-case';
import { RemoveImageProduct } from '../../../../application/use-cases/product.use-cases/remove-image-product.use-case';
import { AddVariantProduct } from '../../../../application/use-cases/product.use-cases/add-variant-product.use-case';
import { RemoveVariantProduct } from '../../../../application/use-cases/product.use-cases/remove-variant-product.use-case';
import { UpdateStockProduct } from '../../../../application/use-cases/product.use-cases/update-stock-product.use-case';
import { AddReviewProduct } from '../../../../application/use-cases/product.use-cases/add-review-product.use-case';
import { GetReviewsProduct } from '../../../../application/use-cases/product.use-cases/get-reviews-product.use-case';
import { AddCartItemProduct } from '../../../../application/use-cases/product.use-cases/add-cart-item-product.use-case';
import { FindByPriceRangeProduct } from '../../../../application/use-cases/product.use-cases/find-by-price-range-product.use-case';
import { GetFeaturedProductsProduct } from '../../../../application/use-cases/product.use-cases/get-featured-products-product.use-case';

// Registering dependencies

/**
 * Register the ProductRepository's concrete implementation
 */
container.register<IProductRepository>(IProductRepositoryToken, {
    useClass: ProductRepositoryImpl,
});
container.register<ProductService>(ProductService, {
    useClass: ProductService,
});

container.register<CreateProduct>(CreateProduct, { useClass: CreateProduct });

container.register<GetByIdProduct>(GetByIdProduct, {
    useClass: GetByIdProduct,
});

container.register<UpdateProduct>(UpdateProduct, { useClass: UpdateProduct });

container.register<DeleteProduct>(DeleteProduct, { useClass: DeleteProduct });

container.register<FindByNameProduct>(FindByNameProduct, {
    useClass: FindByNameProduct,
});

container.register<FindByCategoryProduct>(FindByCategoryProduct, {
    useClass: FindByCategoryProduct,
});

container.register<AddPromotionProduct>(AddPromotionProduct, {
    useClass: AddPromotionProduct,
});

container.register<RemovePromotionProduct>(RemovePromotionProduct, {
    useClass: RemovePromotionProduct,
});

container.register<AddImageProduct>(AddImageProduct, {
    useClass: AddImageProduct,
});

container.register<RemoveImageProduct>(RemoveImageProduct, {
    useClass: RemoveImageProduct,
});

container.register<AddVariantProduct>(AddVariantProduct, {
    useClass: AddVariantProduct,
});

container.register<RemoveVariantProduct>(RemoveVariantProduct, {
    useClass: RemoveVariantProduct,
});

container.register<UpdateStockProduct>(UpdateStockProduct, {
    useClass: UpdateStockProduct,
});

container.register<AddReviewProduct>(AddReviewProduct, {
    useClass: AddReviewProduct,
});

container.register<GetReviewsProduct>(GetReviewsProduct, {
    useClass: GetReviewsProduct,
});

container.register<AddCartItemProduct>(AddCartItemProduct, {
    useClass: AddCartItemProduct,
});

container.register<FindByPriceRangeProduct>(FindByPriceRangeProduct, {
    useClass: FindByPriceRangeProduct,
});

container.register<GetFeaturedProductsProduct>(GetFeaturedProductsProduct, {
    useClass: GetFeaturedProductsProduct,
});

// Exporting the container
export { container };
