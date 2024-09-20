import { useAppDispatch, useAppSelector } from '../index.hook';

import { AuditLog } from '../../../domain/entities/audit-log.entity';

import { createAuditLog } from '../../states/thunks/audit-log.thunks/create-audit-log.thunk';
import { deleteAuditLog } from '../../states/thunks/audit-log.thunks/delete-audit-log.thunk';
import { getByActionAuditLog } from '../../states/thunks/audit-log.thunks/get-by-action-audit-log.thunk';
import { getByDateRangeAuditLog } from '../../states/thunks/audit-log.thunks/get-by-date-range-audit-log.thunk';
import { getByEntityAuditLog } from '../../states/thunks/audit-log.thunks/get-by-entity-audit-log.thunk';
import { getByIdAuditLog } from '../../states/thunks/audit-log.thunks/get-by-id-audit-log.thunk';
import { getByUserAuditLog } from '../../states/thunks/audit-log.thunks/get-by-user-audit-log.thunk';
import { getRecentAuditLog } from '../../states/thunks/audit-log.thunks/get-recent-audit-log.thunk';
import { updateAuditLog } from '../../states/thunks/audit-log.thunks/update-audit-log.thunk';
import { validateAuditLog } from '../../states/thunks/audit-log.thunks/validate-audit-log.thunk';

export const useAuditLog: any = () => {
    const dispatch = useAppDispatch();
    const auditLogs = useAppSelector((state: any) => state.auditLogs);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCreateAuditLog = (log: AuditLog) => {
        dispatch(createAuditLog({ log }));
    };

    const handleDeleteAuditLog = (id: number) => {
        dispatch(deleteAuditLog({ id }));
    };

    const handleGetByActionAuditLog = (action: string) => {
        dispatch(getByActionAuditLog({ action }));
    };

    const handleGetByDateRangeAuditLog = (startDate: Date, endDate: Date) => {
        dispatch(getByDateRangeAuditLog({ startDate, endDate }));
    };

    const handleGetByEntityAuditLog = (entity: string, entityId: number) => {
        dispatch(getByEntityAuditLog({ entity, entityId }));
    };

    const handleGetByIdAuditLog = (id: number) => {
        dispatch(getByIdAuditLog({ id }));
    };

    const handleGetByUserAuditLog = (userId: number) => {
        dispatch(getByUserAuditLog({ userId }));
    };

    const handleGetRecentAuditLog = (limit: number) => {
        dispatch(getRecentAuditLog({ limit }));
    };

    const handleUpdateAuditLog = (id: number, updatedLog: AuditLog) => {
        dispatch(updateAuditLog({ id, updatedLog }));
    };

    const handleValidateAuditLog = (log: AuditLog) => {
        dispatch(validateAuditLog({ log }));
    };

    return {
        ...auditLogs,
        loading,
        success,
        error,
        handleCreateAuditLog,
        handleDeleteAuditLog,
        handleGetByActionAuditLog,
        handleGetByDateRangeAuditLog,
        handleGetByEntityAuditLog,
        handleGetByIdAuditLog,
        handleGetByUserAuditLog,
        handleGetRecentAuditLog,
        handleUpdateAuditLog,
        handleValidateAuditLog,
    };
};
