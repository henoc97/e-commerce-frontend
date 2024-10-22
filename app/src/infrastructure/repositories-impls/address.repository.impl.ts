// app/src/infrastructure/repositories-impls/address.repository.impl.ts

import { injectable } from 'tsyringe';
import client from '../config/graphql/apollo-client';
import {
    GET_ADDRESS_BY_ID,
    GET_ADDRESSES_BY_CITY,
    CREATE_ADDRESS,
    UPDATE_ADDRESS,
    DELETE_ADDRESS,
    GET_ADDRESSES_BY_COUNTRY,
    GET_ADDRESSES_BY_STATE,
    GET_ADDRESSES_BY_POSTAL_CODE,
    GET_ADDRESSES_BY_USER,
} from '../config/graphql/queries/address.queries';
import { Address } from '../../domain/entities/address.entity';
import { IAddressRepository } from '../../domain/repositories/address.repository';

@injectable()
export class AddressRepositoryImpl implements IAddressRepository {
    getByUserIdAndId(
        userId: number,
        addressId: number
    ): Promise<Address | null> {
        throw new Error('Method not implemented.');
    }
    async getById(id: number): Promise<Address | null> {
        const { data } = await client.query({
            query: GET_ADDRESS_BY_ID,
            variables: { id },
        });
        return data.address;
    }

    async getByCity(city: string): Promise<Address[]> {
        const { data } = await client.query({
            query: GET_ADDRESSES_BY_CITY,
            variables: { city },
        });
        return data.addressesByCity;
    }

    async create(address: Address): Promise<Address> {
        const { data } = await client.mutate({
            mutation: CREATE_ADDRESS,
            variables: { addressInput: address },
        });
        return data.createNewAddress;
    }

    async updateById(
        id: number,
        updateData: Partial<Address>
    ): Promise<Address> {
        const { data } = await client.mutate({
            mutation: UPDATE_ADDRESS,
            variables: { id, addressInput: updateData },
        });
        return data.updateAddress;
    }

    async deleteById(id: number): Promise<boolean> {
        const { data } = await client.mutate({
            mutation: DELETE_ADDRESS,
            variables: { id },
        });
        return data.deleteAddress;
    }

    async getByCountry(country: string): Promise<Address[]> {
        const { data } = await client.query({
            query: GET_ADDRESSES_BY_COUNTRY,
            variables: { country },
        });
        return data.addressesByCountry;
    }

    async getByState(state: string): Promise<Address[]> {
        const { data } = await client.query({
            query: GET_ADDRESSES_BY_STATE,
            variables: { state },
        });
        return data.addressesByState;
    }

    async getByPostalCode(postalCode: string): Promise<Address[]> {
        const { data } = await client.query({
            query: GET_ADDRESSES_BY_POSTAL_CODE,
            variables: { postalCode },
        });
        return data.addressesByPostalCode;
    }

    async getAllByUserId(userId: number): Promise<Address[]> {
        const { data } = await client.query({
            query: GET_ADDRESSES_BY_USER,
            variables: { userId },
        });
        return data.addressesByUser;
    }
}
