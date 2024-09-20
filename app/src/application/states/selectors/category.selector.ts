import { RootState } from '../store/store';

export const selectCategorys = (state: RootState) => state.category.categorys;
export const selectCategoryLoading = (state: RootState) =>
    state.category.loading;
export const selectCategorySuccess = (state: RootState) =>
    state.category.success;
export const selectCategoryError = (state: RootState) => state.category.error;
