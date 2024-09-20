import { useAppDispatch, useAppSelector } from '../index.hook';

import { Marketplace } from '../../../domain/entities/marketplace.entity';

import { addShopMarketplace } from '../../states/thunks/marketplace.thunks/add-shop-marketplace.thunk';
import { createMarketplace } from '../../states/thunks/marketplace.thunks/create-marketplace.thunk';
import { deleteMarketplace } from '../../states/thunks/marketplace.thunks/delete-marketplace.thunk';
import { getByIdMarketplace } from '../../states/thunks/marketplace.thunks/get-by-id-marketplace.thunk';
import { getMarketplaceByShopIdMarketplace } from '../../states/thunks/marketplace.thunks/get-marketplace-by-shop-id-marketplace.thunk';
import { getShopsMarketplace } from '../../states/thunks/marketplace.thunks/get-shops-marketplace.thunk';
import { listMarketplace } from '../../states/thunks/marketplace.thunks/list-marketplace.thunk';
import { removeShopMarketplace } from '../../states/thunks/marketplace.thunks/remove-shop-marketplace.thunk';
import { updateMarketplace } from '../../states/thunks/marketplace.thunks/update-marketplace.thunk';

export const useMarketplace: any = () => {
    const dispatch = useAppDispatch();
    const marketplaces = useAppSelector((state: any) => state.marketplaces);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleAddShopMarketplace = (marketplaceId: number, shop: Shop) => {
        dispatch(addShopMarketplace({ marketplaceId, shop }));
    };

    const handleCreateMarketplace = (marketplace: Marketplace) => {
        dispatch(createMarketplace({ marketplace }));
    };

    const handleDeleteMarketplace = (id: number) => {
        dispatch(deleteMarketplace({ id }));
    };

    const handleGetByIdMarketplace = (id: number) => {
        dispatch(getByIdMarketplace({ id }));
    };

    const handleGetMarketplaceByShopIdMarketplace = (shopId: number) => {
        dispatch(getMarketplaceByShopIdMarketplace({ shopId }));
    };

    const handleGetShopsMarketplace = (marketplaceId: number) => {
        dispatch(getShopsMarketplace({ marketplaceId }));
    };

    const handleListMarketplace = () => {
        dispatch(listMarketplace({}));
    };

    const handleRemoveShopMarketplace = (
        marketplaceId: number,
        shopId: number
    ) => {
        dispatch(removeShopMarketplace({ marketplaceId, shopId }));
    };

    const handleUpdateMarketplace = (
        id: number,
        data: Partial<Marketplace>
    ) => {
        dispatch(updateMarketplace({ id, data }));
    };

    return {
        ...marketplaces,
        loading,
        success,
        error,
        handleAddShopMarketplace,
        handleCreateMarketplace,
        handleDeleteMarketplace,
        handleGetByIdMarketplace,
        handleGetMarketplaceByShopIdMarketplace,
        handleGetShopsMarketplace,
        handleListMarketplace,
        handleRemoveShopMarketplace,
        handleUpdateMarketplace,
    };
};
