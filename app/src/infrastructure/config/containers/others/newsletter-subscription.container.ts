import { container } from 'tsyringe';

import { INewsletterSubscriptionRepositoryToken } from '../../tokens/tokens';
import { INewsletterSubscriptionRepository } from '../../../../domain/repositories/newsletter-subscription.repository';
import { NewsletterSubscriptionRepositoryImpl } from '../../../repositories-impls/newsletter-subscription.repository-impl';
import { NewsletterSubscriptionService } from '../../../../application/services/newsletter-subscription.service';

import { GetByIdNewsletterSubscription } from '../../../../application/use-cases/newsletter-subscription.use-cases/get-by-id-newsletter-subscription.use-case';
import { DeleteNewsletterSubscription } from '../../../../application/use-cases/newsletter-subscription.use-cases/delete-newsletter-subscription.use-case';
import { ListAllNewsletterSubscription } from '../../../../application/use-cases/newsletter-subscription.use-cases/list-all-newsletter-subscription.use-case';
import { GetByEmailNewsletterSubscription } from '../../../../application/use-cases/newsletter-subscription.use-cases/get-by-email-newsletter-subscription.use-case';
import { IsSubscribedNewsletterSubscription } from '../../../../application/use-cases/newsletter-subscription.use-cases/is-subscribed-newsletter-subscription.use-case';
import { CountAllNewsletterSubscription } from '../../../../application/use-cases/newsletter-subscription.use-cases/count-all-newsletter-subscription.use-case';

// Registering dependencies

/**
 * Register the NewsletterSubscriptionRepository's concrete implementation
 */
container.register<INewsletterSubscriptionRepository>(
    INewsletterSubscriptionRepositoryToken,
    { useClass: NewsletterSubscriptionRepositoryImpl }
);
container.register<NewsletterSubscriptionService>(
    NewsletterSubscriptionService,
    { useClass: NewsletterSubscriptionService }
);

container.register<GetByIdNewsletterSubscription>(
    GetByIdNewsletterSubscription,
    { useClass: GetByIdNewsletterSubscription }
);

container.register<DeleteNewsletterSubscription>(DeleteNewsletterSubscription, {
    useClass: DeleteNewsletterSubscription,
});

container.register<ListAllNewsletterSubscription>(
    ListAllNewsletterSubscription,
    { useClass: ListAllNewsletterSubscription }
);

container.register<GetByEmailNewsletterSubscription>(
    GetByEmailNewsletterSubscription,
    { useClass: GetByEmailNewsletterSubscription }
);

container.register<IsSubscribedNewsletterSubscription>(
    IsSubscribedNewsletterSubscription,
    { useClass: IsSubscribedNewsletterSubscription }
);

container.register<CountAllNewsletterSubscription>(
    CountAllNewsletterSubscription,
    { useClass: CountAllNewsletterSubscription }
);

// Exporting the container
export { container };
