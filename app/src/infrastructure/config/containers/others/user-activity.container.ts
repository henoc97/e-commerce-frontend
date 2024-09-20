import { container } from 'tsyringe';

import { IUserActivityRepositoryToken } from '../../tokens/tokens';
import { IUserActivityRepository } from '../../../../domain/repositories/user-activity.repository';
import { UserActivityRepositoryImpl } from '../../../repositories-impls/user-activity.repository-impl';
import { UserActivityService } from '../../../../application/services/user-activity.service';

import { CreateUserActivity } from '../../../../application/use-cases/user-activity.use-cases/create-user-activity.use-case';
import { FindByIdUserActivity } from '../../../../application/use-cases/user-activity.use-cases/find-by-id-user-activity.use-case';
import { ListByUserUserActivity } from '../../../../application/use-cases/user-activity.use-cases/list-by-user-user-activity.use-case';
import { ListByProductUserActivity } from '../../../../application/use-cases/user-activity.use-cases/list-by-product-user-activity.use-case';
import { UpdateUserActivity } from '../../../../application/use-cases/user-activity.use-cases/update-user-activity.use-case';
import { DeleteUserActivity } from '../../../../application/use-cases/user-activity.use-cases/delete-user-activity.use-case';
import { ListByDateRangeUserActivity } from '../../../../application/use-cases/user-activity.use-cases/list-by-date-range-user-activity.use-case';
import { ValidateUserActivity } from '../../../../application/use-cases/user-activity.use-cases/validate-user-activity.use-case';
import { CountByUserUserActivity } from '../../../../application/use-cases/user-activity.use-cases/count-by-user-user-activity.use-case';
import { GetRecentByUserUserActivity } from '../../../../application/use-cases/user-activity.use-cases/get-recent-by-user-user-activity.use-case';

// Registering dependencies

/**
 * Register the UserActivityRepository's concrete implementation
 */
container.register<IUserActivityRepository>(IUserActivityRepositoryToken, {
    useClass: UserActivityRepositoryImpl,
});
container.register<UserActivityService>(UserActivityService, {
    useClass: UserActivityService,
});

container.register<CreateUserActivity>(CreateUserActivity, {
    useClass: CreateUserActivity,
});

container.register<FindByIdUserActivity>(FindByIdUserActivity, {
    useClass: FindByIdUserActivity,
});

container.register<ListByUserUserActivity>(ListByUserUserActivity, {
    useClass: ListByUserUserActivity,
});

container.register<ListByProductUserActivity>(ListByProductUserActivity, {
    useClass: ListByProductUserActivity,
});

container.register<UpdateUserActivity>(UpdateUserActivity, {
    useClass: UpdateUserActivity,
});

container.register<DeleteUserActivity>(DeleteUserActivity, {
    useClass: DeleteUserActivity,
});

container.register<ListByDateRangeUserActivity>(ListByDateRangeUserActivity, {
    useClass: ListByDateRangeUserActivity,
});

container.register<ValidateUserActivity>(ValidateUserActivity, {
    useClass: ValidateUserActivity,
});

container.register<CountByUserUserActivity>(CountByUserUserActivity, {
    useClass: CountByUserUserActivity,
});

container.register<GetRecentByUserUserActivity>(GetRecentByUserUserActivity, {
    useClass: GetRecentByUserUserActivity,
});

// Exporting the container
export { container };
