import { useAppDispatch, useAppSelector } from '../index.hook';

import { Vendor } from '../../../domain/entities/vendor.entity';

import { addProductVendor } from '../../states/thunks/vendor.thunks/add-product-vendor.thunk';
import { createVendor } from '../../states/thunks/vendor.thunks/create-vendor.thunk';
import { deleteVendor } from '../../states/thunks/vendor.thunks/delete-vendor.thunk';
import { findByIdVendor } from '../../states/thunks/vendor.thunks/find-by-id-vendor.thunk';
import { findByStoreNameVendor } from '../../states/thunks/vendor.thunks/find-by-store-name-vendor.thunk';
import { findBySubscriptionVendor } from '../../states/thunks/vendor.thunks/find-by-subscription-vendor.thunk';
import { findByUserVendor } from '../../states/thunks/vendor.thunks/find-by-user-vendor.thunk';
import { getLatestVendor } from '../../states/thunks/vendor.thunks/get-latest-vendor.thunk';
import { getProductsVendor } from '../../states/thunks/vendor.thunks/get-products-vendor.thunk';
import { getShopVendor } from '../../states/thunks/vendor.thunks/get-shop-vendor.thunk';
import { getSubscriptionVendor } from '../../states/thunks/vendor.thunks/get-subscription-vendor.thunk';
import { getallVendor } from '../../states/thunks/vendor.thunks/getall-vendor.thunk';
import { removeProductVendor } from '../../states/thunks/vendor.thunks/remove-product-vendor.thunk';
import { setShopVendor } from '../../states/thunks/vendor.thunks/set-shop-vendor.thunk';
import { updateVendor } from '../../states/thunks/vendor.thunks/update-vendor.thunk';

export const useVendor: any = () => {
    const dispatch = useAppDispatch();
    const vendors = useAppSelector((state: any) => state.vendors);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleAddProductVendor = (vendorId: number, product: Product) => {
        dispatch(addProductVendor({ vendorId, product }));
    };

    const handleCreateVendor = (vendor: Vendor) => {
        dispatch(createVendor({ vendor }));
    };

    const handleDeleteVendor = (id: number) => {
        dispatch(deleteVendor({ id }));
    };

    const handleFindByIdVendor = (id: number) => {
        dispatch(findByIdVendor({ id }));
    };

    const handleFindByStoreNameVendor = (storeName: string) => {
        dispatch(findByStoreNameVendor({ storeName }));
    };

    const handleFindBySubscriptionVendor = (subscriptionId: number) => {
        dispatch(findBySubscriptionVendor({ subscriptionId }));
    };

    const handleFindByUserVendor = (userId: number) => {
        dispatch(findByUserVendor({ userId }));
    };

    const handleGetLatestVendor = () => {
        dispatch(getLatestVendor({}));
    };

    const handleGetProductsVendor = (vendorId: number) => {
        dispatch(getProductsVendor({ vendorId }));
    };

    const handleGetShopVendor = (vendorId: number) => {
        dispatch(getShopVendor({ vendorId }));
    };

    const handleGetSubscriptionVendor = (vendorId: number) => {
        dispatch(getSubscriptionVendor({ vendorId }));
    };

    const handleGetallVendor = () => {
        dispatch(getallVendor({}));
    };

    const handleRemoveProductVendor = (vendorId: number, productId: number) => {
        dispatch(removeProductVendor({ vendorId, productId }));
    };

    const handleSetShopVendor = (vendorId: number, shop: Shop) => {
        dispatch(setShopVendor({ vendorId, shop }));
    };

    const handleUpdateVendor = (id: number, data: Partial<Vendor>) => {
        dispatch(updateVendor({ id, data }));
    };

    return {
        ...vendors,
        loading,
        success,
        error,
        handleAddProductVendor,
        handleCreateVendor,
        handleDeleteVendor,
        handleFindByIdVendor,
        handleFindByStoreNameVendor,
        handleFindBySubscriptionVendor,
        handleFindByUserVendor,
        handleGetLatestVendor,
        handleGetProductsVendor,
        handleGetShopVendor,
        handleGetSubscriptionVendor,
        handleGetallVendor,
        handleRemoveProductVendor,
        handleSetShopVendor,
        handleUpdateVendor,
    };
};
