import { useAppDispatch, useAppSelector } from '../index.hook';

import { Shop } from '../../../domain/entities/shop.entity';

import { addCategoryShop } from '../../states/thunks/shop.thunks/add-category-shop.thunk';
import { addOrderShop } from '../../states/thunks/shop.thunks/add-order-shop.thunk';
import { addProductShop } from '../../states/thunks/shop.thunks/add-product-shop.thunk';
import { associateMarketplaceShop } from '../../states/thunks/shop.thunks/associate-marketplace-shop.thunk';
import { createShop } from '../../states/thunks/shop.thunks/create-shop.thunk';
import { deleteShop } from '../../states/thunks/shop.thunks/delete-shop.thunk';
import { getByIdShop } from '../../states/thunks/shop.thunks/get-by-id-shop.thunk';
import { getMarketplaceShop } from '../../states/thunks/shop.thunks/get-marketplace-shop.thunk';
import { getMostRecentShop } from '../../states/thunks/shop.thunks/get-most-recent-shop.thunk';
import { getOrderReportShop } from '../../states/thunks/shop.thunks/get-order-report-shop.thunk';
import { getTopProductShop } from '../../states/thunks/shop.thunks/get-top-product-shop.thunk';
import { getTotalSalesShop } from '../../states/thunks/shop.thunks/get-total-sales-shop.thunk';
import { listByVendorShop } from '../../states/thunks/shop.thunks/list-by-vendor-shop.thunk';
import { listCategoriesShop } from '../../states/thunks/shop.thunks/list-categories-shop.thunk';
import { listOrdersShop } from '../../states/thunks/shop.thunks/list-orders-shop.thunk';
import { listProductsShop } from '../../states/thunks/shop.thunks/list-products-shop.thunk';
import { removeCategoryShop } from '../../states/thunks/shop.thunks/remove-category-shop.thunk';
import { removeProductShop } from '../../states/thunks/shop.thunks/remove-product-shop.thunk';
import { searchByNameShop } from '../../states/thunks/shop.thunks/search-by-name-shop.thunk';
import { updateShop } from '../../states/thunks/shop.thunks/update-shop.thunk';

export const useShop: any = () => {
    const dispatch = useAppDispatch();
    const shops = useAppSelector((state: any) => state.shops);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleAddCategoryShop = (shopId: number, category: Category) => {
        dispatch(addCategoryShop({ shopId, category }));
    };

    const handleAddOrderShop = (shopId: number, order: Order) => {
        dispatch(addOrderShop({ shopId, order }));
    };

    const handleAddProductShop = (shopId: number, product: Product) => {
        dispatch(addProductShop({ shopId, product }));
    };

    const handleAssociateMarketplaceShop = (
        shopId: number,
        marketplace: Marketplace
    ) => {
        dispatch(associateMarketplaceShop({ shopId, marketplace }));
    };

    const handleCreateShop = (shop: Shop) => {
        dispatch(createShop({ shop }));
    };

    const handleDeleteShop = (id: number) => {
        dispatch(deleteShop({ id }));
    };

    const handleGetByIdShop = (id: number) => {
        dispatch(getByIdShop({ id }));
    };

    const handleGetMarketplaceShop = (shopId: number) => {
        dispatch(getMarketplaceShop({ shopId }));
    };

    const handleGetMostRecentShop = () => {
        dispatch(getMostRecentShop({}));
    };

    const handleGetOrderReportShop = (
        shopId: number,
        startDate: Date,
        endDate: Date
    ) => {
        dispatch(getOrderReportShop({ shopId, startDate, endDate }));
    };

    const handleGetTopProductShop = (shopId: number) => {
        dispatch(getTopProductShop({ shopId }));
    };

    const handleGetTotalSalesShop = (shopId: number) => {
        dispatch(getTotalSalesShop({ shopId }));
    };

    const handleListByVendorShop = (vendorId: number) => {
        dispatch(listByVendorShop({ vendorId }));
    };

    const handleListCategoriesShop = (shopId: number) => {
        dispatch(listCategoriesShop({ shopId }));
    };

    const handleListOrdersShop = (shopId: number) => {
        dispatch(listOrdersShop({ shopId }));
    };

    const handleListProductsShop = (shopId: number) => {
        dispatch(listProductsShop({ shopId }));
    };

    const handleRemoveCategoryShop = (shopId: number, categoryId: number) => {
        dispatch(removeCategoryShop({ shopId, categoryId }));
    };

    const handleRemoveProductShop = (shopId: number, productId: number) => {
        dispatch(removeProductShop({ shopId, productId }));
    };

    const handleSearchByNameShop = (name: string) => {
        dispatch(searchByNameShop({ name }));
    };

    const handleUpdateShop = (id: number, updates: Partial<Shop>) => {
        dispatch(updateShop({ id, updates }));
    };

    return {
        ...shops,
        loading,
        success,
        error,
        handleAddCategoryShop,
        handleAddOrderShop,
        handleAddProductShop,
        handleAssociateMarketplaceShop,
        handleCreateShop,
        handleDeleteShop,
        handleGetByIdShop,
        handleGetMarketplaceShop,
        handleGetMostRecentShop,
        handleGetOrderReportShop,
        handleGetTopProductShop,
        handleGetTotalSalesShop,
        handleListByVendorShop,
        handleListCategoriesShop,
        handleListOrdersShop,
        handleListProductsShop,
        handleRemoveCategoryShop,
        handleRemoveProductShop,
        handleSearchByNameShop,
        handleUpdateShop,
    };
};
