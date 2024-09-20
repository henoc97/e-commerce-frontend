import { useAppDispatch, useAppSelector } from '../index.hook';

import { NewsletterSubscription } from '../../../domain/entities/newsletter-subscription.entity';

import { countAllNewsletterSubscription } from '../../states/thunks/newsletter-subscription.thunks/count-all-newsletter-subscription.thunk';
import { createNewsletterSubscription } from '../../states/thunks/newsletter-subscription.thunks/create-newsletter-subscription.thunk';
import { deleteNewsletterSubscription } from '../../states/thunks/newsletter-subscription.thunks/delete-newsletter-subscription.thunk';
import { getByEmailNewsletterSubscription } from '../../states/thunks/newsletter-subscription.thunks/get-by-email-newsletter-subscription.thunk';
import { getByIdNewsletterSubscription } from '../../states/thunks/newsletter-subscription.thunks/get-by-id-newsletter-subscription.thunk';
import { isSubscribedNewsletterSubscription } from '../../states/thunks/newsletter-subscription.thunks/is-subscribed-newsletter-subscription.thunk';
import { listAllNewsletterSubscription } from '../../states/thunks/newsletter-subscription.thunks/list-all-newsletter-subscription.thunk';

export const useNewsletterSubscription: any = () => {
    const dispatch = useAppDispatch();
    const newsletterSubscriptions = useAppSelector(
        (state: any) => state.newsletterSubscriptions
    );
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCountAllNewsletterSubscription = () => {
        dispatch(countAllNewsletterSubscription({}));
    };

    const handleCreateNewsletterSubscription = (
        subscription: NewsletterSubscription
    ) => {
        dispatch(createNewsletterSubscription({ subscription }));
    };

    const handleDeleteNewsletterSubscription = (id: number) => {
        dispatch(deleteNewsletterSubscription({ id }));
    };

    const handleGetByEmailNewsletterSubscription = (email: string) => {
        dispatch(getByEmailNewsletterSubscription({ email }));
    };

    const handleGetByIdNewsletterSubscription = (id: number) => {
        dispatch(getByIdNewsletterSubscription({ id }));
    };

    const handleIsSubscribedNewsletterSubscription = (email: string) => {
        dispatch(isSubscribedNewsletterSubscription({ email }));
    };

    const handleListAllNewsletterSubscription = () => {
        dispatch(listAllNewsletterSubscription({}));
    };

    return {
        ...newsletterSubscriptions,
        loading,
        success,
        error,
        handleCountAllNewsletterSubscription,
        handleCreateNewsletterSubscription,
        handleDeleteNewsletterSubscription,
        handleGetByEmailNewsletterSubscription,
        handleGetByIdNewsletterSubscription,
        handleIsSubscribedNewsletterSubscription,
        handleListAllNewsletterSubscription,
    };
};
