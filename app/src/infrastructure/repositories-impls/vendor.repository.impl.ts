import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    ADD_PRODUCT_TO_VENDOR,
    CREATE_VENDOR,
    DELETE_VENDOR,
    FIND_VENDOR_BY_ID,
    FIND_VENDORS_BY_STORE_NAME,
    FIND_VENDORS_BY_SUBSCRIPTION,
    FIND_VENDORS_BY_USER,
    GET_LATEST_VENDOR,
    GET_VENDOR_PRODUCTS,
    GET_VENDOR_SHOP,
    GET_VENDOR_SUBSCRIPTION,
    REMOVE_PRODUCT_FROM_VENDOR,
    SET_VENDOR_SHOP,
    SET_VENDOR_SUBSCRIPTION,
    UPDATE_VENDOR,
    VENDOR_LIST,
} from '../config/graphql/queries/vendor.queries';
import { Vendor } from '../../domain/entities/vendor.entity';
import { Product } from '../../domain/entities/product.entity';
import { Shop } from '../../domain/entities/shop.entity';
import { Subscription } from '../../domain/entities/subscription.entity';
import { IVendorRepository } from '../../domain/repositories/vendor.repository';

@injectable()
export class VendorRepositoryImpl implements IVendorRepository {
    async create(vendor: Vendor): Promise<Vendor> {
        const { data } = await client.mutate({
            mutation: CREATE_VENDOR,
            variables: { vendorDTO: vendor },
        });
        return data.createVendor;
    }

    async findById(id: number): Promise<Vendor | null> {
        const { data } = await client.query({
            query: FIND_VENDOR_BY_ID,
            variables: { vendorId: id },
        });
        return data.findVendorById;
    }

    async update(id: number, data: Partial<Vendor>): Promise<Vendor> {
        const { data: updatedData } = await client.mutate({
            mutation: UPDATE_VENDOR,
            variables: { vendorId: id, vendorDTO: data },
        });
        return updatedData.updateVendor;
    }

    async delete(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_VENDOR,
            variables: { vendorId: id },
        });
        return data.deleteVendor;
    }

    async findByStoreName(storeName: string): Promise<Vendor[]> {
        const { data } = await client.query({
            query: FIND_VENDORS_BY_STORE_NAME,
            variables: { storeName },
        });
        return data.findVendorsByStoreName;
    }

    async addProduct(vendorId: number, product: Product): Promise<Vendor> {
        const { data } = await client.mutate({
            mutation: ADD_PRODUCT_TO_VENDOR,
            variables: { vendorId, productDTO: product },
        });
        return data.addProductToVendor;
    }

    async removeProduct(vendorId: number, productId: number): Promise<Vendor> {
        const { data } = await client.mutate({
            mutation: REMOVE_PRODUCT_FROM_VENDOR,
            variables: { vendorId, productId },
        });
        return data.removeProductFromVendor;
    }

    async getProducts(vendorId: number): Promise<Product[]> {
        const { data } = await client.query({
            query: GET_VENDOR_PRODUCTS,
            variables: { vendorId },
        });
        return data.getVendorProducts;
    }

    async getSubscription(vendorId: number): Promise<Subscription | null> {
        const { data } = await client.query({
            query: GET_VENDOR_SUBSCRIPTION,
            variables: { vendorId },
        });
        return data.getVendorSubscription;
    }

    async setSubscription(vendorId: number, subscription: Subscription): Promise<Vendor> {
        const { data } = await client.mutate({
            mutation: SET_VENDOR_SUBSCRIPTION,
            variables: { vendorId, subscriptionDTO: subscription },
        });
        return data.setVendorSubscription;
    }

    async getShop(vendorId: number): Promise<Shop | null> {
        const { data } = await client.query({
            query: GET_VENDOR_SHOP,
            variables: { vendorId },
        });
        return data.getVendorShop;
    }

    async setShop(vendorId: number, shop: Shop): Promise<Vendor> {
        const { data } = await client.mutate({
            mutation: SET_VENDOR_SHOP,
            variables: { vendorId, shopDTO: shop },
        });
        return data.setVendorShop;
    }

    async findByUser(userId: number): Promise<Vendor[]> {
        const { data } = await client.query({
            query: FIND_VENDORS_BY_USER,
            variables: { userId },
        });
        return data.findVendorsByUser;
    }

    async findBySubscription(subscriptionId: number): Promise<Vendor[]> {
        const { data } = await client.query({
            query: FIND_VENDORS_BY_SUBSCRIPTION,
            variables: { subscriptionId },
        });
        return data.findVendorsBySubscription;
    }

    async getall(): Promise<Vendor[]> {
        const { data } = await client.query({
            query: VENDOR_LIST,
        });
        return data.vendorList;
    }

    async getLatest(): Promise<Vendor | null> {
        const { data } = await client.query({
            query: GET_LATEST_VENDOR,
        });
        return data.getLatestVendor;
    }
}
