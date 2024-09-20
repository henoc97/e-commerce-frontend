import { container } from 'tsyringe';

import { IUserRepositoryToken } from '../../tokens/tokens';
import { IUserRepository } from '../../../../domain/repositories/user.repository';
import { UserRepositoryImpl } from '../../../repositories-impls/user.repository-impl';
import { UserService } from '../../../../application/services/user.service';

import { CreateUser } from '../../../../application/use-cases/user.use-cases/create-user.use-case';
import { GetByIdUser } from '../../../../application/use-cases/user.use-cases/get-by-id-user.use-case';
import { UpdateUser } from '../../../../application/use-cases/user.use-cases/update-user.use-case';
import { DeleteUser } from '../../../../application/use-cases/user.use-cases/delete-user.use-case';
import { GetByRoleUser } from '../../../../application/use-cases/user.use-cases/get-by-role-user.use-case';
import { AddAddressUser } from '../../../../application/use-cases/user.use-cases/add-address-user.use-case';
import { RemoveAddressUser } from '../../../../application/use-cases/user.use-cases/remove-address-user.use-case';
import { AddOrderUser } from '../../../../application/use-cases/user.use-cases/add-order-user.use-case';
import { RemoveOrderUser } from '../../../../application/use-cases/user.use-cases/remove-order-user.use-case';
import { AddNotificationUser } from '../../../../application/use-cases/user.use-cases/add-notification-user.use-case';
import { RemoveNotificationUser } from '../../../../application/use-cases/user.use-cases/remove-notification-user.use-case';
import { AddSubsiteUser } from '../../../../application/use-cases/user.use-cases/add-subsite-user.use-case';
import { RemoveSubsiteUser } from '../../../../application/use-cases/user.use-cases/remove-subsite-user.use-case';
import { GetActivityLogUser } from '../../../../application/use-cases/user.use-cases/get-activity-log-user.use-case';
import { CreateAuditLogUser } from '../../../../application/use-cases/user.use-cases/create-audit-log-user.use-case';
import { GetAuditLogsUser } from '../../../../application/use-cases/user.use-cases/get-audit-logs-user.use-case';
import { GetByEmailUser } from '../../../../application/use-cases/user.use-cases/get-by-email-user.use-case';
import { UpdateProfileUser } from '../../../../application/use-cases/user.use-cases/update-profile-user.use-case';
import { UpdatePasswordUser } from '../../../../application/use-cases/user.use-cases/update-password-user.use-case';
import { GetOrdersUser } from '../../../../application/use-cases/user.use-cases/get-orders-user.use-case';
import { GetAddressesUser } from '../../../../application/use-cases/user.use-cases/get-addresses-user.use-case';
import { GetReviewsUser } from '../../../../application/use-cases/user.use-cases/get-reviews-user.use-case';
import { GetCartUser } from '../../../../application/use-cases/user.use-cases/get-cart-user.use-case';
import { GetTicketsUser } from '../../../../application/use-cases/user.use-cases/get-tickets-user.use-case';
import { GetNotificationsUser } from '../../../../application/use-cases/user.use-cases/get-notifications-user.use-case';
import { GetSubsitesUser } from '../../../../application/use-cases/user.use-cases/get-subsites-user.use-case';
import { GetActiveCountUser } from '../../../../application/use-cases/user.use-cases/get-active-count-user.use-case';
import { GetCountByRoleUser } from '../../../../application/use-cases/user.use-cases/get-count-by-role-user.use-case';
import { GetInactiveUsersUser } from '../../../../application/use-cases/user.use-cases/get-inactive-users-user.use-case';

// Registering dependencies

/**
 * Register the UserRepository's concrete implementation
 */
container.register<IUserRepository>(IUserRepositoryToken, {
    useClass: UserRepositoryImpl,
});
container.register<UserService>(UserService, { useClass: UserService });

container.register<CreateUser>(CreateUser, { useClass: CreateUser });

container.register<GetByIdUser>(GetByIdUser, { useClass: GetByIdUser });

container.register<UpdateUser>(UpdateUser, { useClass: UpdateUser });

container.register<DeleteUser>(DeleteUser, { useClass: DeleteUser });

container.register<GetByRoleUser>(GetByRoleUser, { useClass: GetByRoleUser });

container.register<AddAddressUser>(AddAddressUser, {
    useClass: AddAddressUser,
});

container.register<RemoveAddressUser>(RemoveAddressUser, {
    useClass: RemoveAddressUser,
});

container.register<AddOrderUser>(AddOrderUser, { useClass: AddOrderUser });

container.register<RemoveOrderUser>(RemoveOrderUser, {
    useClass: RemoveOrderUser,
});

container.register<AddNotificationUser>(AddNotificationUser, {
    useClass: AddNotificationUser,
});

container.register<RemoveNotificationUser>(RemoveNotificationUser, {
    useClass: RemoveNotificationUser,
});

container.register<AddSubsiteUser>(AddSubsiteUser, {
    useClass: AddSubsiteUser,
});

container.register<RemoveSubsiteUser>(RemoveSubsiteUser, {
    useClass: RemoveSubsiteUser,
});

container.register<GetActivityLogUser>(GetActivityLogUser, {
    useClass: GetActivityLogUser,
});

container.register<CreateAuditLogUser>(CreateAuditLogUser, {
    useClass: CreateAuditLogUser,
});

container.register<GetAuditLogsUser>(GetAuditLogsUser, {
    useClass: GetAuditLogsUser,
});

container.register<GetByEmailUser>(GetByEmailUser, {
    useClass: GetByEmailUser,
});

container.register<UpdateProfileUser>(UpdateProfileUser, {
    useClass: UpdateProfileUser,
});

container.register<UpdatePasswordUser>(UpdatePasswordUser, {
    useClass: UpdatePasswordUser,
});

container.register<GetOrdersUser>(GetOrdersUser, { useClass: GetOrdersUser });

container.register<GetAddressesUser>(GetAddressesUser, {
    useClass: GetAddressesUser,
});

container.register<GetReviewsUser>(GetReviewsUser, {
    useClass: GetReviewsUser,
});

container.register<GetCartUser>(GetCartUser, { useClass: GetCartUser });

container.register<GetTicketsUser>(GetTicketsUser, {
    useClass: GetTicketsUser,
});

container.register<GetNotificationsUser>(GetNotificationsUser, {
    useClass: GetNotificationsUser,
});

container.register<GetSubsitesUser>(GetSubsitesUser, {
    useClass: GetSubsitesUser,
});

container.register<GetActiveCountUser>(GetActiveCountUser, {
    useClass: GetActiveCountUser,
});

container.register<GetCountByRoleUser>(GetCountByRoleUser, {
    useClass: GetCountByRoleUser,
});

container.register<GetInactiveUsersUser>(GetInactiveUsersUser, {
    useClass: GetInactiveUsersUser,
});

// Exporting the container
export { container };
