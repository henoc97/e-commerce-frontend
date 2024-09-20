import { useAppDispatch, useAppSelector } from '../index.hook';

import { Product } from '../../../domain/entities/product.entity';

import { addCartItemProduct } from '../../states/thunks/product.thunks/add-cart-item-product.thunk';
import { addImageProduct } from '../../states/thunks/product.thunks/add-image-product.thunk';
import { addPromotionProduct } from '../../states/thunks/product.thunks/add-promotion-product.thunk';
import { addReviewProduct } from '../../states/thunks/product.thunks/add-review-product.thunk';
import { addVariantProduct } from '../../states/thunks/product.thunks/add-variant-product.thunk';
import { createProduct } from '../../states/thunks/product.thunks/create-product.thunk';
import { deleteProduct } from '../../states/thunks/product.thunks/delete-product.thunk';
import { findByCategoryProduct } from '../../states/thunks/product.thunks/find-by-category-product.thunk';
import { findByNameProduct } from '../../states/thunks/product.thunks/find-by-name-product.thunk';
import { findByPriceRangeProduct } from '../../states/thunks/product.thunks/find-by-price-range-product.thunk';
import { getByIdProduct } from '../../states/thunks/product.thunks/get-by-id-product.thunk';
import { getFeaturedProductsProduct } from '../../states/thunks/product.thunks/get-featured-products-product.thunk';
import { getReviewsProduct } from '../../states/thunks/product.thunks/get-reviews-product.thunk';
import { removeImageProduct } from '../../states/thunks/product.thunks/remove-image-product.thunk';
import { removePromotionProduct } from '../../states/thunks/product.thunks/remove-promotion-product.thunk';
import { removeVariantProduct } from '../../states/thunks/product.thunks/remove-variant-product.thunk';
import { updateProduct } from '../../states/thunks/product.thunks/update-product.thunk';
import { updateStockProduct } from '../../states/thunks/product.thunks/update-stock-product.thunk';

export const useProduct: any = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state: any) => state.products);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleAddCartItemProduct = (
        productId: number,
        cartItem: CartItem
    ) => {
        dispatch(addCartItemProduct({ productId, cartItem }));
    };

    const handleAddImageProduct = (productId: number, image: ProductImage) => {
        dispatch(addImageProduct({ productId, image }));
    };

    const handleAddPromotionProduct = (
        productId: number,
        promotion: Promotion
    ) => {
        dispatch(addPromotionProduct({ productId, promotion }));
    };

    const handleAddReviewProduct = (productId: number, review: Review) => {
        dispatch(addReviewProduct({ productId, review }));
    };

    const handleAddVariantProduct = (
        productId: number,
        variant: ProductVariant
    ) => {
        dispatch(addVariantProduct({ productId, variant }));
    };

    const handleCreateProduct = (product: Product) => {
        dispatch(createProduct({ product }));
    };

    const handleDeleteProduct = (id: number) => {
        dispatch(deleteProduct({ id }));
    };

    const handleFindByCategoryProduct = (categoryId: number) => {
        dispatch(findByCategoryProduct({ categoryId }));
    };

    const handleFindByNameProduct = (name: string) => {
        dispatch(findByNameProduct({ name }));
    };

    const handleFindByPriceRangeProduct = (
        minPrice: number,
        maxPrice: number
    ) => {
        dispatch(findByPriceRangeProduct({ minPrice, maxPrice }));
    };

    const handleGetByIdProduct = (id: number) => {
        dispatch(getByIdProduct({ id }));
    };

    const handleGetFeaturedProductsProduct = () => {
        dispatch(getFeaturedProductsProduct({}));
    };

    const handleGetReviewsProduct = (productId: number) => {
        dispatch(getReviewsProduct({ productId }));
    };

    const handleRemoveImageProduct = (productId: number, imageId: number) => {
        dispatch(removeImageProduct({ productId, imageId }));
    };

    const handleRemovePromotionProduct = (
        productId: number,
        promotionId: number
    ) => {
        dispatch(removePromotionProduct({ productId, promotionId }));
    };

    const handleRemoveVariantProduct = (
        productId: number,
        variantId: number
    ) => {
        dispatch(removeVariantProduct({ productId, variantId }));
    };

    const handleUpdateProduct = (id: number, updates: Partial<Product>) => {
        dispatch(updateProduct({ id, updates }));
    };

    const handleUpdateStockProduct = (productId: number, quantity: number) => {
        dispatch(updateStockProduct({ productId, quantity }));
    };

    return {
        ...products,
        loading,
        success,
        error,
        handleAddCartItemProduct,
        handleAddImageProduct,
        handleAddPromotionProduct,
        handleAddReviewProduct,
        handleAddVariantProduct,
        handleCreateProduct,
        handleDeleteProduct,
        handleFindByCategoryProduct,
        handleFindByNameProduct,
        handleFindByPriceRangeProduct,
        handleGetByIdProduct,
        handleGetFeaturedProductsProduct,
        handleGetReviewsProduct,
        handleRemoveImageProduct,
        handleRemovePromotionProduct,
        handleRemoveVariantProduct,
        handleUpdateProduct,
        handleUpdateStockProduct,
    };
};
