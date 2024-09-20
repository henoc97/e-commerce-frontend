import { container } from 'tsyringe';

import { IPromotionRepositoryToken } from '../../tokens/tokens';
import { IPromotionRepository } from '../../../../domain/repositories/promotion.repository';
import { PromotionRepositoryImpl } from '../../../repositories-impls/promotion.repository-impl';
import { PromotionService } from '../../../../application/services/promotion.service';

import { CreatePromotion } from '../../../../application/use-cases/promotion.use-cases/create-promotion.use-case';
import { GetByIdPromotion } from '../../../../application/use-cases/promotion.use-cases/get-by-id-promotion.use-case';
import { ModifyPromotion } from '../../../../application/use-cases/promotion.use-cases/modify-promotion.use-case';
import { RemovePromotion } from '../../../../application/use-cases/promotion.use-cases/remove-promotion.use-case';
import { GetByProductPromotion } from '../../../../application/use-cases/promotion.use-cases/get-by-product-promotion.use-case';
import { GetActiveBetweenPromotion } from '../../../../application/use-cases/promotion.use-cases/get-active-between-promotion.use-case';
import { GetActivePromotion } from '../../../../application/use-cases/promotion.use-cases/get-active-promotion.use-case';
import { GetBestForProductPromotion } from '../../../../application/use-cases/promotion.use-cases/get-best-for-product-promotion.use-case';
import { CombinePromotion } from '../../../../application/use-cases/promotion.use-cases/combine-promotion.use-case';
import { ApplyToProductPromotion } from '../../../../application/use-cases/promotion.use-cases/apply-to-product-promotion.use-case';

// Registering dependencies

/**
 * Register the PromotionRepository's concrete implementation
 */
container.register<IPromotionRepository>(IPromotionRepositoryToken, {
    useClass: PromotionRepositoryImpl,
});
container.register<PromotionService>(PromotionService, {
    useClass: PromotionService,
});

container.register<CreatePromotion>(CreatePromotion, {
    useClass: CreatePromotion,
});

container.register<GetByIdPromotion>(GetByIdPromotion, {
    useClass: GetByIdPromotion,
});

container.register<ModifyPromotion>(ModifyPromotion, {
    useClass: ModifyPromotion,
});

container.register<RemovePromotion>(RemovePromotion, {
    useClass: RemovePromotion,
});

container.register<GetByProductPromotion>(GetByProductPromotion, {
    useClass: GetByProductPromotion,
});

container.register<GetActiveBetweenPromotion>(GetActiveBetweenPromotion, {
    useClass: GetActiveBetweenPromotion,
});

container.register<GetActivePromotion>(GetActivePromotion, {
    useClass: GetActivePromotion,
});

container.register<GetBestForProductPromotion>(GetBestForProductPromotion, {
    useClass: GetBestForProductPromotion,
});

container.register<CombinePromotion>(CombinePromotion, {
    useClass: CombinePromotion,
});

container.register<ApplyToProductPromotion>(ApplyToProductPromotion, {
    useClass: ApplyToProductPromotion,
});

// Exporting the container
export { container };
