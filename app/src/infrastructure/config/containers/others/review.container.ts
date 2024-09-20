import { container } from 'tsyringe';

import { IReviewRepositoryToken } from '../../tokens/tokens';
import { IReviewRepository } from '../../../../domain/repositories/review.repository';
import { ReviewRepositoryImpl } from '../../../repositories-impls/review.repository-impl';
import { ReviewService } from '../../../../application/services/review.service';

import { CreateReview } from '../../../../application/use-cases/review.use-cases/create-review.use-case';
import { GetByIdReview } from '../../../../application/use-cases/review.use-cases/get-by-id-review.use-case';
import { ModifyReview } from '../../../../application/use-cases/review.use-cases/modify-review.use-case';
import { RemoveReview } from '../../../../application/use-cases/review.use-cases/remove-review.use-case';
import { GetByProductReview } from '../../../../application/use-cases/review.use-cases/get-by-product-review.use-case';
import { GetByUserReview } from '../../../../application/use-cases/review.use-cases/get-by-user-review.use-case';
import { GetByRatingReview } from '../../../../application/use-cases/review.use-cases/get-by-rating-review.use-case';
import { GetByDateRangeReview } from '../../../../application/use-cases/review.use-cases/get-by-date-range-review.use-case';
import { VerifyReview } from '../../../../application/use-cases/review.use-cases/verify-review.use-case';
import { FlagReview } from '../../../../application/use-cases/review.use-cases/flag-review.use-case';
import { GetFlaggedReview } from '../../../../application/use-cases/review.use-cases/get-flagged-review.use-case';
import { GetPopularReview } from '../../../../application/use-cases/review.use-cases/get-popular-review.use-case';
import { GetAverageRatingReview } from '../../../../application/use-cases/review.use-cases/get-average-rating-review.use-case';

// Registering dependencies

/**
 * Register the ReviewRepository's concrete implementation
 */
container.register<IReviewRepository>(IReviewRepositoryToken, {
    useClass: ReviewRepositoryImpl,
});
container.register<ReviewService>(ReviewService, { useClass: ReviewService });

container.register<CreateReview>(CreateReview, { useClass: CreateReview });

container.register<GetByIdReview>(GetByIdReview, { useClass: GetByIdReview });

container.register<ModifyReview>(ModifyReview, { useClass: ModifyReview });

container.register<RemoveReview>(RemoveReview, { useClass: RemoveReview });

container.register<GetByProductReview>(GetByProductReview, {
    useClass: GetByProductReview,
});

container.register<GetByUserReview>(GetByUserReview, {
    useClass: GetByUserReview,
});

container.register<GetByRatingReview>(GetByRatingReview, {
    useClass: GetByRatingReview,
});

container.register<GetByDateRangeReview>(GetByDateRangeReview, {
    useClass: GetByDateRangeReview,
});

container.register<VerifyReview>(VerifyReview, { useClass: VerifyReview });

container.register<FlagReview>(FlagReview, { useClass: FlagReview });

container.register<GetFlaggedReview>(GetFlaggedReview, {
    useClass: GetFlaggedReview,
});

container.register<GetPopularReview>(GetPopularReview, {
    useClass: GetPopularReview,
});

container.register<GetAverageRatingReview>(GetAverageRatingReview, {
    useClass: GetAverageRatingReview,
});

// Exporting the container
export { container };
