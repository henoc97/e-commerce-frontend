import { createSlice } from '@reduxjs/toolkit';

import { Subsite } from '../../../domain/entities/subsite.entity';

import { countByUserSubsiteExtraReducers } from '../extra-reducers/subsite.extra-reducers/count-by-user-subsite.extra-reducers';
import { createSubsiteExtraReducers } from '../extra-reducers/subsite.extra-reducers/create-subsite.extra-reducers';
import { getActiveSubsiteExtraReducers } from '../extra-reducers/subsite.extra-reducers/get-active-subsite.extra-reducers';
import { getByIdSubsiteExtraReducers } from '../extra-reducers/subsite.extra-reducers/get-by-id-subsite.extra-reducers';
import { getByUserSubsiteExtraReducers } from '../extra-reducers/subsite.extra-reducers/get-by-user-subsite.extra-reducers';
import { getConfigSubsiteExtraReducers } from '../extra-reducers/subsite.extra-reducers/get-config-subsite.extra-reducers';
import { getLatestSubsiteExtraReducers } from '../extra-reducers/subsite.extra-reducers/get-latest-subsite.extra-reducers';
import { removeSubsiteExtraReducers } from '../extra-reducers/subsite.extra-reducers/remove-subsite.extra-reducers';
import { updateConfigSubsiteExtraReducers } from '../extra-reducers/subsite.extra-reducers/update-config-subsite.extra-reducers';
import { updateSubsiteExtraReducers } from '../extra-reducers/subsite.extra-reducers/update-subsite.extra-reducers';
import { validateSubsiteExtraReducers } from '../extra-reducers/subsite.extra-reducers/validate-subsite.extra-reducers';

interface SubsiteState {
    subsites: Subsite[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: SubsiteState = {
    subsites: [],
    loading: false,
    success: false,
    error: null,
};

const subsiteSlice = createSlice({
    name: 'subsite',
    initialState,
    reducers: {
        resetsubsiteState: (state) => {
            (state.subsites = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        countByUserSubsiteExtraReducers(builder);
        createSubsiteExtraReducers(builder);
        getActiveSubsiteExtraReducers(builder);
        getByIdSubsiteExtraReducers(builder);
        getByUserSubsiteExtraReducers(builder);
        getConfigSubsiteExtraReducers(builder);
        getLatestSubsiteExtraReducers(builder);
        removeSubsiteExtraReducers(builder);
        updateConfigSubsiteExtraReducers(builder);
        updateSubsiteExtraReducers(builder);
        validateSubsiteExtraReducers(builder);
    },
});

export const { resetsubsiteState } = subsiteSlice.actions;

export default subsiteSlice.reducer;
