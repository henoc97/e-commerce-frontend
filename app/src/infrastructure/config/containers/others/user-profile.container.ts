import { container } from 'tsyringe';

import { IUserProfileRepositoryToken } from '../../tokens/tokens';
import { IUserProfileRepository } from '../../../../domain/repositories/user-profile.repository';
import { UserProfileRepositoryImpl } from '../../../repositories-impls/user-profile.repository-impl';
import { UserProfileService } from '../../../../application/services/user-profile.service';

import { CreateUserProfile } from '../../../../application/use-cases/user-profile.use-cases/create-user-profile.use-case';
import { GetByIdUserProfile } from '../../../../application/use-cases/user-profile.use-cases/get-by-id-user-profile.use-case';
import { UpdateUserProfile } from '../../../../application/use-cases/user-profile.use-cases/update-user-profile.use-case';
import { RemoveUserProfile } from '../../../../application/use-cases/user-profile.use-cases/remove-user-profile.use-case';
import { GetByUserIdUserProfile } from '../../../../application/use-cases/user-profile.use-cases/get-by-user-id-user-profile.use-case';
import { UpdatePhoneUserProfile } from '../../../../application/use-cases/user-profile.use-cases/update-phone-user-profile.use-case';
import { UpdateBirthdayUserProfile } from '../../../../application/use-cases/user-profile.use-cases/update-birthday-user-profile.use-case';
import { UpdateGenderUserProfile } from '../../../../application/use-cases/user-profile.use-cases/update-gender-user-profile.use-case';
import { GetByGenderUserProfile } from '../../../../application/use-cases/user-profile.use-cases/get-by-gender-user-profile.use-case';
import { GetByBirthdayRangeUserProfile } from '../../../../application/use-cases/user-profile.use-cases/get-by-birthday-range-user-profile.use-case';
import { IsPhoneInUseUserProfile } from '../../../../application/use-cases/user-profile.use-cases/is-phone-in-use-user-profile.use-case';
import { ExistsUserProfile } from '../../../../application/use-cases/user-profile.use-cases/exists-user-profile.use-case';
import { GetRecentlyUpdatedUserProfile } from '../../../../application/use-cases/user-profile.use-cases/get-recently-updated-user-profile.use-case';
import { FindMatchesUserProfile } from '../../../../application/use-cases/user-profile.use-cases/find-matches-user-profile.use-case';

// Registering dependencies

/**
 * Register the UserProfileRepository's concrete implementation
 */
container.register<IUserProfileRepository>(IUserProfileRepositoryToken, {
    useClass: UserProfileRepositoryImpl,
});
container.register<UserProfileService>(UserProfileService, {
    useClass: UserProfileService,
});

container.register<CreateUserProfile>(CreateUserProfile, {
    useClass: CreateUserProfile,
});

container.register<GetByIdUserProfile>(GetByIdUserProfile, {
    useClass: GetByIdUserProfile,
});

container.register<UpdateUserProfile>(UpdateUserProfile, {
    useClass: UpdateUserProfile,
});

container.register<RemoveUserProfile>(RemoveUserProfile, {
    useClass: RemoveUserProfile,
});

container.register<GetByUserIdUserProfile>(GetByUserIdUserProfile, {
    useClass: GetByUserIdUserProfile,
});

container.register<UpdatePhoneUserProfile>(UpdatePhoneUserProfile, {
    useClass: UpdatePhoneUserProfile,
});

container.register<UpdateBirthdayUserProfile>(UpdateBirthdayUserProfile, {
    useClass: UpdateBirthdayUserProfile,
});

container.register<UpdateGenderUserProfile>(UpdateGenderUserProfile, {
    useClass: UpdateGenderUserProfile,
});

container.register<GetByGenderUserProfile>(GetByGenderUserProfile, {
    useClass: GetByGenderUserProfile,
});

container.register<GetByBirthdayRangeUserProfile>(
    GetByBirthdayRangeUserProfile,
    { useClass: GetByBirthdayRangeUserProfile }
);

container.register<IsPhoneInUseUserProfile>(IsPhoneInUseUserProfile, {
    useClass: IsPhoneInUseUserProfile,
});

container.register<ExistsUserProfile>(ExistsUserProfile, {
    useClass: ExistsUserProfile,
});

container.register<GetRecentlyUpdatedUserProfile>(
    GetRecentlyUpdatedUserProfile,
    { useClass: GetRecentlyUpdatedUserProfile }
);

container.register<FindMatchesUserProfile>(FindMatchesUserProfile, {
    useClass: FindMatchesUserProfile,
});

// Exporting the container
export { container };
