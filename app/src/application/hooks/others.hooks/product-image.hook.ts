import { useAppDispatch, useAppSelector } from '../index.hook';

import { ProductImage } from '../../../domain/entities/product-image.entity';

import { countImagesByProductIdProductImage } from '../../states/thunks/product-image.thunks/count-images-by-product-id-product-image.thunk';
import { createProductImage } from '../../states/thunks/product-image.thunks/create-product-image.thunk';
import { deleteByProductIdProductImage } from '../../states/thunks/product-image.thunks/delete-by-product-id-product-image.thunk';
import { deleteProductImage } from '../../states/thunks/product-image.thunks/delete-product-image.thunk';
import { existsProductImage } from '../../states/thunks/product-image.thunks/exists-product-image.thunk';
import { getByIdProductImage } from '../../states/thunks/product-image.thunks/get-by-id-product-image.thunk';
import { getByProductIdProductImage } from '../../states/thunks/product-image.thunks/get-by-product-id-product-image.thunk';
import { getPrimaryImageProductImage } from '../../states/thunks/product-image.thunks/get-primary-image-product-image.thunk';
import { updateProductImage } from '../../states/thunks/product-image.thunks/update-product-image.thunk';
import { updateUrlProductImage } from '../../states/thunks/product-image.thunks/update-url-product-image.thunk';

export const useProductImage: any = () => {
    const dispatch = useAppDispatch();
    const productImages = useAppSelector((state: any) => state.productImages);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCountImagesByProductIdProductImage = (productId: number) => {
        dispatch(countImagesByProductIdProductImage({ productId }));
    };

    const handleCreateProductImage = (image: ProductImage) => {
        dispatch(createProductImage({ image }));
    };

    const handleDeleteByProductIdProductImage = (productId: number) => {
        dispatch(deleteByProductIdProductImage({ productId }));
    };

    const handleDeleteProductImage = (id: number) => {
        dispatch(deleteProductImage({ id }));
    };

    const handleExistsProductImage = (productId: number, url: string) => {
        dispatch(existsProductImage({ productId, url }));
    };

    const handleGetByIdProductImage = (id: number) => {
        dispatch(getByIdProductImage({ id }));
    };

    const handleGetByProductIdProductImage = (productId: number) => {
        dispatch(getByProductIdProductImage({ productId }));
    };

    const handleGetPrimaryImageProductImage = (productId: number) => {
        dispatch(getPrimaryImageProductImage({ productId }));
    };

    const handleUpdateProductImage = (
        id: number,
        updates: Partial<ProductImage>
    ) => {
        dispatch(updateProductImage({ id, updates }));
    };

    const handleUpdateUrlProductImage = (id: number, url: string) => {
        dispatch(updateUrlProductImage({ id, url }));
    };

    return {
        ...productImages,
        loading,
        success,
        error,
        handleCountImagesByProductIdProductImage,
        handleCreateProductImage,
        handleDeleteByProductIdProductImage,
        handleDeleteProductImage,
        handleExistsProductImage,
        handleGetByIdProductImage,
        handleGetByProductIdProductImage,
        handleGetPrimaryImageProductImage,
        handleUpdateProductImage,
        handleUpdateUrlProductImage,
    };
};
