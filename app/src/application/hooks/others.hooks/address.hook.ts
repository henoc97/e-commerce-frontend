import { useAppDispatch, useAppSelector } from '../index.hook';

import { Address } from '../../../domain/entities/address.entity';

import { createAddress } from '../../states/thunks/address.thunks/create-address.thunk';
import { deleteByIdAddress } from '../../states/thunks/address.thunks/delete-by-id-address.thunk';
import { getAllByUserIdAddress } from '../../states/thunks/address.thunks/get-all-by-user-id-address.thunk';
import { getByCityAddress } from '../../states/thunks/address.thunks/get-by-city-address.thunk';
import { getByCountryAddress } from '../../states/thunks/address.thunks/get-by-country-address.thunk';
import { getByIdAddress } from '../../states/thunks/address.thunks/get-by-id-address.thunk';
import { getByPostalCodeAddress } from '../../states/thunks/address.thunks/get-by-postal-code-address.thunk';
import { getByStateAddress } from '../../states/thunks/address.thunks/get-by-state-address.thunk';
import { getByUserIdAndIdAddress } from '../../states/thunks/address.thunks/get-by-user-id-and-id-address.thunk';
import { updateByIdAddress } from '../../states/thunks/address.thunks/update-by-id-address.thunk';

export const useAddress: any = () => {
    const dispatch = useAppDispatch();
    const addresss = useAppSelector((state: any) => state.addresss);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCreateAddress = (address: Address) => {
        dispatch(createAddress({ address }));
    };

    const handleDeleteByIdAddress = (id: number) => {
        dispatch(deleteByIdAddress({ id }));
    };

    const handleGetAllByUserIdAddress = (userId: number) => {
        dispatch(getAllByUserIdAddress({ userId }));
    };

    const handleGetByCityAddress = (city: string) => {
        dispatch(getByCityAddress({ city }));
    };

    const handleGetByCountryAddress = (country: string) => {
        dispatch(getByCountryAddress({ country }));
    };

    const handleGetByIdAddress = (id: number) => {
        dispatch(getByIdAddress({ id }));
    };

    const handleGetByPostalCodeAddress = (postalCode: string) => {
        dispatch(getByPostalCodeAddress({ postalCode }));
    };

    const handleGetByStateAddress = (state: string) => {
        dispatch(getByStateAddress({ state }));
    };

    const handleGetByUserIdAndIdAddress = (
        userId: number,
        addressId: number
    ) => {
        dispatch(getByUserIdAndIdAddress({ userId, addressId }));
    };

    const handleUpdateByIdAddress = (
        id: number,
        updateData: Partial<Address>
    ) => {
        dispatch(updateByIdAddress({ id, updateData }));
    };

    return {
        ...addresss,
        loading,
        success,
        error,
        handleCreateAddress,
        handleDeleteByIdAddress,
        handleGetAllByUserIdAddress,
        handleGetByCityAddress,
        handleGetByCountryAddress,
        handleGetByIdAddress,
        handleGetByPostalCodeAddress,
        handleGetByStateAddress,
        handleGetByUserIdAndIdAddress,
        handleUpdateByIdAddress,
    };
};
