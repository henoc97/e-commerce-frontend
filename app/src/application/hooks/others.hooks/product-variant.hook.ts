import { useAppDispatch, useAppSelector } from '../index.hook';

import { ProductVariant } from '../../../domain/entities/product-variant.entity';

import { createProductVariant } from '../../states/thunks/product-variant.thunks/create-product-variant.thunk';
import { deleteByProductIdProductVariant } from '../../states/thunks/product-variant.thunks/delete-by-product-id-product-variant.thunk';
import { deleteProductVariant } from '../../states/thunks/product-variant.thunks/delete-product-variant.thunk';
import { existsProductVariant } from '../../states/thunks/product-variant.thunks/exists-product-variant.thunk';
import { getByIdProductVariant } from '../../states/thunks/product-variant.thunks/get-by-id-product-variant.thunk';
import { getByNameProductVariant } from '../../states/thunks/product-variant.thunks/get-by-name-product-variant.thunk';
import { getByProductIdProductVariant } from '../../states/thunks/product-variant.thunks/get-by-product-id-product-variant.thunk';
import { getMostPopularVariantProductVariant } from '../../states/thunks/product-variant.thunks/get-most-popular-variant-product-variant.thunk';
import { updateProductVariant } from '../../states/thunks/product-variant.thunks/update-product-variant.thunk';

export const useProductVariant: any = () => {
    const dispatch = useAppDispatch();
    const productVariants = useAppSelector(
        (state: any) => state.productVariants
    );
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCreateProductVariant = (variant: ProductVariant) => {
        dispatch(createProductVariant({ variant }));
    };

    const handleDeleteByProductIdProductVariant = (productId: number) => {
        dispatch(deleteByProductIdProductVariant({ productId }));
    };

    const handleDeleteProductVariant = (id: number) => {
        dispatch(deleteProductVariant({ id }));
    };

    const handleExistsProductVariant = (
        productId: number,
        name: string,
        value: string
    ) => {
        dispatch(existsProductVariant({ productId, name, value }));
    };

    const handleGetByIdProductVariant = (id: number) => {
        dispatch(getByIdProductVariant({ id }));
    };

    const handleGetByNameProductVariant = (productId: number, name: string) => {
        dispatch(getByNameProductVariant({ productId, name }));
    };

    const handleGetByProductIdProductVariant = (productId: number) => {
        dispatch(getByProductIdProductVariant({ productId }));
    };

    const handleGetMostPopularVariantProductVariant = (productId: number) => {
        dispatch(getMostPopularVariantProductVariant({ productId }));
    };

    const handleUpdateProductVariant = (
        id: number,
        updates: Partial<ProductVariant>
    ) => {
        dispatch(updateProductVariant({ id, updates }));
    };

    return {
        ...productVariants,
        loading,
        success,
        error,
        handleCreateProductVariant,
        handleDeleteByProductIdProductVariant,
        handleDeleteProductVariant,
        handleExistsProductVariant,
        handleGetByIdProductVariant,
        handleGetByNameProductVariant,
        handleGetByProductIdProductVariant,
        handleGetMostPopularVariantProductVariant,
        handleUpdateProductVariant,
    };
};
