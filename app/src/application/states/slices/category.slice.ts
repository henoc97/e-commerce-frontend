import { createSlice } from '@reduxjs/toolkit';

import { Category } from '../../../domain/entities/category.entity';

import { createCategoryExtraReducers } from '../extra-reducers/category.extra-reducers/create-category.extra-reducers';
import { deleteCategoryExtraReducers } from '../extra-reducers/category.extra-reducers/delete-category.extra-reducers';
import { existsCategoryExtraReducers } from '../extra-reducers/category.extra-reducers/exists-category.extra-reducers';
import { getByIdCategoryExtraReducers } from '../extra-reducers/category.extra-reducers/get-by-id-category.extra-reducers';
import { getCategoryHierarchyCategoryExtraReducers } from '../extra-reducers/category.extra-reducers/get-category-hierarchy-category.extra-reducers';
import { getChildrenCategoryExtraReducers } from '../extra-reducers/category.extra-reducers/get-children-category.extra-reducers';
import { getProductsCategoryExtraReducers } from '../extra-reducers/category.extra-reducers/get-products-category.extra-reducers';
import { getTopLevelCategoriesCategoryExtraReducers } from '../extra-reducers/category.extra-reducers/get-top-level-categories-category.extra-reducers';
import { setParentCategoryExtraReducers } from '../extra-reducers/category.extra-reducers/set-parent-category.extra-reducers';
import { updateCategoryExtraReducers } from '../extra-reducers/category.extra-reducers/update-category.extra-reducers';

interface CategoryState {
    categorys: Category[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: CategoryState = {
    categorys: [],
    loading: false,
    success: false,
    error: null,
};

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        resetcategoryState: (state) => {
            (state.categorys = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        createCategoryExtraReducers(builder);
        deleteCategoryExtraReducers(builder);
        existsCategoryExtraReducers(builder);
        getByIdCategoryExtraReducers(builder);
        getCategoryHierarchyCategoryExtraReducers(builder);
        getChildrenCategoryExtraReducers(builder);
        getProductsCategoryExtraReducers(builder);
        getTopLevelCategoriesCategoryExtraReducers(builder);
        setParentCategoryExtraReducers(builder);
        updateCategoryExtraReducers(builder);
    },
});

export const { resetcategoryState } = categorySlice.actions;

export default categorySlice.reducer;
