import { container } from 'tsyringe';

import { ICategoryRepositoryToken } from '../../tokens/tokens';
import { ICategoryRepository } from '../../../../domain/repositories/category.repository';
import { CategoryRepositoryImpl } from '../../../repositories-impls/category.repository-impl';
import { CategoryService } from '../../../../application/services/category.service';

import { CreateCategory } from '../../../../application/use-cases/category.use-cases/create-category.use-case';
import { GetByIdCategory } from '../../../../application/use-cases/category.use-cases/get-by-id-category.use-case';
import { UpdateCategory } from '../../../../application/use-cases/category.use-cases/update-category.use-case';
import { DeleteCategory } from '../../../../application/use-cases/category.use-cases/delete-category.use-case';
import { GetChildrenCategory } from '../../../../application/use-cases/category.use-cases/get-children-category.use-case';
import { GetProductsCategory } from '../../../../application/use-cases/category.use-cases/get-products-category.use-case';
import { SetParentCategory } from '../../../../application/use-cases/category.use-cases/set-parent-category.use-case';
import { ExistsCategory } from '../../../../application/use-cases/category.use-cases/exists-category.use-case';
import { GetTopLevelCategoriesCategory } from '../../../../application/use-cases/category.use-cases/get-top-level-categories-category.use-case';
import { GetCategoryHierarchyCategory } from '../../../../application/use-cases/category.use-cases/get-category-hierarchy-category.use-case';

// Registering dependencies

/**
 * Register the CategoryRepository's concrete implementation
 */
container.register<ICategoryRepository>(ICategoryRepositoryToken, {
    useClass: CategoryRepositoryImpl,
});
container.register<CategoryService>(CategoryService, {
    useClass: CategoryService,
});

container.register<CreateCategory>(CreateCategory, {
    useClass: CreateCategory,
});

container.register<GetByIdCategory>(GetByIdCategory, {
    useClass: GetByIdCategory,
});

container.register<UpdateCategory>(UpdateCategory, {
    useClass: UpdateCategory,
});

container.register<DeleteCategory>(DeleteCategory, {
    useClass: DeleteCategory,
});

container.register<GetChildrenCategory>(GetChildrenCategory, {
    useClass: GetChildrenCategory,
});

container.register<GetProductsCategory>(GetProductsCategory, {
    useClass: GetProductsCategory,
});

container.register<SetParentCategory>(SetParentCategory, {
    useClass: SetParentCategory,
});

container.register<ExistsCategory>(ExistsCategory, {
    useClass: ExistsCategory,
});

container.register<GetTopLevelCategoriesCategory>(
    GetTopLevelCategoriesCategory,
    { useClass: GetTopLevelCategoriesCategory }
);

container.register<GetCategoryHierarchyCategory>(GetCategoryHierarchyCategory, {
    useClass: GetCategoryHierarchyCategory,
});

// Exporting the container
export { container };
