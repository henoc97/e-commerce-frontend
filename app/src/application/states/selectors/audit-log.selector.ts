import { RootState } from '../store/store';

export const selectAuditLogs = (state: RootState) => state.auditLog.auditLogs;
export const selectAuditLogLoading = (state: RootState) =>
    state.auditLog.loading;
export const selectAuditLogSuccess = (state: RootState) =>
    state.auditLog.success;
export const selectAuditLogError = (state: RootState) => state.auditLog.error;
