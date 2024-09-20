import { useAppDispatch, useAppSelector } from '../index.hook';

import { Category } from '../../../domain/entities/category.entity';

import { createCategory } from '../../states/thunks/category.thunks/create-category.thunk';
import { deleteCategory } from '../../states/thunks/category.thunks/delete-category.thunk';
import { existsCategory } from '../../states/thunks/category.thunks/exists-category.thunk';
import { getByIdCategory } from '../../states/thunks/category.thunks/get-by-id-category.thunk';
import { getCategoryHierarchyCategory } from '../../states/thunks/category.thunks/get-category-hierarchy-category.thunk';
import { getChildrenCategory } from '../../states/thunks/category.thunks/get-children-category.thunk';
import { getProductsCategory } from '../../states/thunks/category.thunks/get-products-category.thunk';
import { getTopLevelCategoriesCategory } from '../../states/thunks/category.thunks/get-top-level-categories-category.thunk';
import { setParentCategory } from '../../states/thunks/category.thunks/set-parent-category.thunk';
import { updateCategory } from '../../states/thunks/category.thunks/update-category.thunk';

export const useCategory: any = () => {
    const dispatch = useAppDispatch();
    const categorys = useAppSelector((state: any) => state.categorys);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCreateCategory = (category: Category) => {
        dispatch(createCategory({ category }));
    };

    const handleDeleteCategory = (id: number) => {
        dispatch(deleteCategory({ id }));
    };

    const handleExistsCategory = (name: string, shopId: number) => {
        dispatch(existsCategory({ name, shopId }));
    };

    const handleGetByIdCategory = (id: number) => {
        dispatch(getByIdCategory({ id }));
    };

    const handleGetCategoryHierarchyCategory = (categoryId: number) => {
        dispatch(getCategoryHierarchyCategory({ categoryId }));
    };

    const handleGetChildrenCategory = (parentId: number) => {
        dispatch(getChildrenCategory({ parentId }));
    };

    const handleGetProductsCategory = (categoryId: number) => {
        dispatch(getProductsCategory({ categoryId }));
    };

    const handleGetTopLevelCategoriesCategory = () => {
        dispatch(getTopLevelCategoriesCategory({}));
    };

    const handleSetParentCategory = (id: number, newParentId: number) => {
        dispatch(setParentCategory({ id, newParentId }));
    };

    const handleUpdateCategory = (id: number, data: Partial<Category>) => {
        dispatch(updateCategory({ id, data }));
    };

    return {
        ...categorys,
        loading,
        success,
        error,
        handleCreateCategory,
        handleDeleteCategory,
        handleExistsCategory,
        handleGetByIdCategory,
        handleGetCategoryHierarchyCategory,
        handleGetChildrenCategory,
        handleGetProductsCategory,
        handleGetTopLevelCategoriesCategory,
        handleSetParentCategory,
        handleUpdateCategory,
    };
};
