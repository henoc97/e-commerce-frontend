import { useAppDispatch, useAppSelector } from '../index.hook';

import { Subsite } from '../../../domain/entities/subsite.entity';

import { countByUserSubsite } from '../../states/thunks/subsite.thunks/count-by-user-subsite.thunk';
import { createSubsite } from '../../states/thunks/subsite.thunks/create-subsite.thunk';
import { getActiveSubsite } from '../../states/thunks/subsite.thunks/get-active-subsite.thunk';
import { getByIdSubsite } from '../../states/thunks/subsite.thunks/get-by-id-subsite.thunk';
import { getByUserSubsite } from '../../states/thunks/subsite.thunks/get-by-user-subsite.thunk';
import { getConfigSubsite } from '../../states/thunks/subsite.thunks/get-config-subsite.thunk';
import { getLatestSubsite } from '../../states/thunks/subsite.thunks/get-latest-subsite.thunk';
import { removeSubsite } from '../../states/thunks/subsite.thunks/remove-subsite.thunk';
import { updateConfigSubsite } from '../../states/thunks/subsite.thunks/update-config-subsite.thunk';
import { updateSubsite } from '../../states/thunks/subsite.thunks/update-subsite.thunk';
import { validateSubsite } from '../../states/thunks/subsite.thunks/validate-subsite.thunk';

export const useSubsite: any = () => {
    const dispatch = useAppDispatch();
    const subsites = useAppSelector((state: any) => state.subsites);
    const loading = useAppSelector((state: any) => state.loading);
    const success = useAppSelector((state: any) => state.success);
    const error = useAppSelector((state: any) => state.error);

    const handleCountByUserSubsite = (userId: number) => {
        dispatch(countByUserSubsite({ userId }));
    };

    const handleCreateSubsite = (Subsite: Subsite) => {
        dispatch(createSubsite({ Subsite }));
    };

    const handleGetActiveSubsite = () => {
        dispatch(getActiveSubsite({}));
    };

    const handleGetByIdSubsite = (id: number) => {
        dispatch(getByIdSubsite({ id }));
    };

    const handleGetByUserSubsite = (userId: number) => {
        dispatch(getByUserSubsite({ userId }));
    };

    const handleGetConfigSubsite = (id: number) => {
        dispatch(getConfigSubsite({ id }));
    };

    const handleGetLatestSubsite = () => {
        dispatch(getLatestSubsite({}));
    };

    const handleRemoveSubsite = (id: number) => {
        dispatch(removeSubsite({ id }));
    };

    const handleUpdateConfigSubsite = (id: number, config: any) => {
        dispatch(updateConfigSubsite({ id, config }));
    };

    const handleUpdateSubsite = (id: number, updates: Partial<Subsite>) => {
        dispatch(updateSubsite({ id, updates }));
    };

    const handleValidateSubsite = (Subsite: Subsite) => {
        dispatch(validateSubsite({ Subsite }));
    };

    return {
        ...subsites,
        loading,
        success,
        error,
        handleCountByUserSubsite,
        handleCreateSubsite,
        handleGetActiveSubsite,
        handleGetByIdSubsite,
        handleGetByUserSubsite,
        handleGetConfigSubsite,
        handleGetLatestSubsite,
        handleRemoveSubsite,
        handleUpdateConfigSubsite,
        handleUpdateSubsite,
        handleValidateSubsite,
    };
};
