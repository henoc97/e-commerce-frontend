import { createSlice } from '@reduxjs/toolkit';

import { Address } from '../../../domain/entities/address.entity';

import { createAddressExtraReducers } from '../extra-reducers/address.extra-reducers/create-address.extra-reducers';
import { deleteByIdAddressExtraReducers } from '../extra-reducers/address.extra-reducers/delete-by-id-address.extra-reducers';
import { getAllByUserIdAddressExtraReducers } from '../extra-reducers/address.extra-reducers/get-all-by-user-id-address.extra-reducers';
import { getByCityAddressExtraReducers } from '../extra-reducers/address.extra-reducers/get-by-city-address.extra-reducers';
import { getByCountryAddressExtraReducers } from '../extra-reducers/address.extra-reducers/get-by-country-address.extra-reducers';
import { getByIdAddressExtraReducers } from '../extra-reducers/address.extra-reducers/get-by-id-address.extra-reducers';
import { getByPostalCodeAddressExtraReducers } from '../extra-reducers/address.extra-reducers/get-by-postal-code-address.extra-reducers';
import { getByStateAddressExtraReducers } from '../extra-reducers/address.extra-reducers/get-by-state-address.extra-reducers';
import { getByUserIdAndIdAddressExtraReducers } from '../extra-reducers/address.extra-reducers/get-by-user-id-and-id-address.extra-reducers';
import { updateByIdAddressExtraReducers } from '../extra-reducers/address.extra-reducers/update-by-id-address.extra-reducers';

interface AddressState {
    addresss: Address[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: AddressState = {
    addresss: [],
    loading: false,
    success: false,
    error: null,
};

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        resetaddressState: (state) => {
            (state.addresss = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        createAddressExtraReducers(builder);
        deleteByIdAddressExtraReducers(builder);
        getAllByUserIdAddressExtraReducers(builder);
        getByCityAddressExtraReducers(builder);
        getByCountryAddressExtraReducers(builder);
        getByIdAddressExtraReducers(builder);
        getByPostalCodeAddressExtraReducers(builder);
        getByStateAddressExtraReducers(builder);
        getByUserIdAndIdAddressExtraReducers(builder);
        updateByIdAddressExtraReducers(builder);
    },
});

export const { resetaddressState } = addressSlice.actions;

export default addressSlice.reducer;
