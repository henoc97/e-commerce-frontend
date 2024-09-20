import { container } from 'tsyringe';

import { ISubscriptionRepositoryToken } from '../../tokens/tokens';
import { ISubscriptionRepository } from '../../../../domain/repositories/subscription.repository';
import { SubscriptionRepositoryImpl } from '../../../repositories-impls/subscription.repository-impl';
import { SubscriptionService } from '../../../../application/services/subscription.service';

import { CreateSubscription } from '../../../../application/use-cases/subscription.use-cases/create-subscription.use-case';
import { GetByIdSubscription } from '../../../../application/use-cases/subscription.use-cases/get-by-id-subscription.use-case';
import { UpdateSubscription } from '../../../../application/use-cases/subscription.use-cases/update-subscription.use-case';
import { RemoveSubscription } from '../../../../application/use-cases/subscription.use-cases/remove-subscription.use-case';
import { GetByVendorSubscription } from '../../../../application/use-cases/subscription.use-cases/get-by-vendor-subscription.use-case';
import { GetActiveSubscription } from '../../../../application/use-cases/subscription.use-cases/get-active-subscription.use-case';
import { GetExpiredSubscription } from '../../../../application/use-cases/subscription.use-cases/get-expired-subscription.use-case';
import { GetExpiringSoonSubscription } from '../../../../application/use-cases/subscription.use-cases/get-expiring-soon-subscription.use-case';
import { GetLatestSubscription } from '../../../../application/use-cases/subscription.use-cases/get-latest-subscription.use-case';
import { CountByVendorSubscription } from '../../../../application/use-cases/subscription.use-cases/count-by-vendor-subscription.use-case';

// Registering dependencies

/**
 * Register the SubscriptionRepository's concrete implementation
 */
container.register<ISubscriptionRepository>(ISubscriptionRepositoryToken, {
    useClass: SubscriptionRepositoryImpl,
});
container.register<SubscriptionService>(SubscriptionService, {
    useClass: SubscriptionService,
});

container.register<CreateSubscription>(CreateSubscription, {
    useClass: CreateSubscription,
});

container.register<GetByIdSubscription>(GetByIdSubscription, {
    useClass: GetByIdSubscription,
});

container.register<UpdateSubscription>(UpdateSubscription, {
    useClass: UpdateSubscription,
});

container.register<RemoveSubscription>(RemoveSubscription, {
    useClass: RemoveSubscription,
});

container.register<GetByVendorSubscription>(GetByVendorSubscription, {
    useClass: GetByVendorSubscription,
});

container.register<GetActiveSubscription>(GetActiveSubscription, {
    useClass: GetActiveSubscription,
});

container.register<GetExpiredSubscription>(GetExpiredSubscription, {
    useClass: GetExpiredSubscription,
});

container.register<GetExpiringSoonSubscription>(GetExpiringSoonSubscription, {
    useClass: GetExpiringSoonSubscription,
});

container.register<GetLatestSubscription>(GetLatestSubscription, {
    useClass: GetLatestSubscription,
});

container.register<CountByVendorSubscription>(CountByVendorSubscription, {
    useClass: CountByVendorSubscription,
});

// Exporting the container
export { container };
