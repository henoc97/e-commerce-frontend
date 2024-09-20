import { createSlice } from '@reduxjs/toolkit';

import { AuditLog } from '../../../domain/entities/audit-log.entity';

import { createAuditLogExtraReducers } from '../extra-reducers/audit-log.extra-reducers/create-audit-log.extra-reducers';
import { deleteAuditLogExtraReducers } from '../extra-reducers/audit-log.extra-reducers/delete-audit-log.extra-reducers';
import { getByActionAuditLogExtraReducers } from '../extra-reducers/audit-log.extra-reducers/get-by-action-audit-log.extra-reducers';
import { getByDateRangeAuditLogExtraReducers } from '../extra-reducers/audit-log.extra-reducers/get-by-date-range-audit-log.extra-reducers';
import { getByEntityAuditLogExtraReducers } from '../extra-reducers/audit-log.extra-reducers/get-by-entity-audit-log.extra-reducers';
import { getByIdAuditLogExtraReducers } from '../extra-reducers/audit-log.extra-reducers/get-by-id-audit-log.extra-reducers';
import { getByUserAuditLogExtraReducers } from '../extra-reducers/audit-log.extra-reducers/get-by-user-audit-log.extra-reducers';
import { getRecentAuditLogExtraReducers } from '../extra-reducers/audit-log.extra-reducers/get-recent-audit-log.extra-reducers';
import { updateAuditLogExtraReducers } from '../extra-reducers/audit-log.extra-reducers/update-audit-log.extra-reducers';
import { validateAuditLogExtraReducers } from '../extra-reducers/audit-log.extra-reducers/validate-audit-log.extra-reducers';

interface AuditLogState {
    auditLogs: AuditLog[];
    loading: boolean;
    success: boolean;
    error: string | null;
}

const initialState: AuditLogState = {
    auditLogs: [],
    loading: false,
    success: false,
    error: null,
};

const auditLogSlice = createSlice({
    name: 'auditLog',
    initialState,
    reducers: {
        resetauditLogState: (state) => {
            (state.auditLogs = []), (state.loading = false);
            state.success = false;
            state.error = null;
        },
    },
    extraReducers: (builder: any) => {
        createAuditLogExtraReducers(builder);
        deleteAuditLogExtraReducers(builder);
        getByActionAuditLogExtraReducers(builder);
        getByDateRangeAuditLogExtraReducers(builder);
        getByEntityAuditLogExtraReducers(builder);
        getByIdAuditLogExtraReducers(builder);
        getByUserAuditLogExtraReducers(builder);
        getRecentAuditLogExtraReducers(builder);
        updateAuditLogExtraReducers(builder);
        validateAuditLogExtraReducers(builder);
    },
});

export const { resetauditLogState } = auditLogSlice.actions;

export default auditLogSlice.reducer;
