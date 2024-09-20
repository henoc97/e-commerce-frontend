import { container } from 'tsyringe';

import { ISubsiteRepositoryToken } from '../../tokens/tokens';
import { ISubsiteRepository } from '../../../../domain/repositories/subsite.repository';
import { SubsiteRepositoryImpl } from '../../../repositories-impls/subsite.repository-impl';
import { SubsiteService } from '../../../../application/services/subsite.service';

import { CreateSubsite } from '../../../../application/use-cases/subsite.use-cases/create-subsite.use-case';
import { GetByIdSubsite } from '../../../../application/use-cases/subsite.use-cases/get-by-id-subsite.use-case';
import { UpdateSubsite } from '../../../../application/use-cases/subsite.use-cases/update-subsite.use-case';
import { RemoveSubsite } from '../../../../application/use-cases/subsite.use-cases/remove-subsite.use-case';
import { GetByUserSubsite } from '../../../../application/use-cases/subsite.use-cases/get-by-user-subsite.use-case';
import { ValidateSubsite } from '../../../../application/use-cases/subsite.use-cases/validate-subsite.use-case';
import { GetConfigSubsite } from '../../../../application/use-cases/subsite.use-cases/get-config-subsite.use-case';
import { UpdateConfigSubsite } from '../../../../application/use-cases/subsite.use-cases/update-config-subsite.use-case';
import { GetLatestSubsite } from '../../../../application/use-cases/subsite.use-cases/get-latest-subsite.use-case';
import { GetActiveSubsite } from '../../../../application/use-cases/subsite.use-cases/get-active-subsite.use-case';
import { CountByUserSubsite } from '../../../../application/use-cases/subsite.use-cases/count-by-user-subsite.use-case';

// Registering dependencies

/**
 * Register the SubsiteRepository's concrete implementation
 */
container.register<ISubsiteRepository>(ISubsiteRepositoryToken, {
    useClass: SubsiteRepositoryImpl,
});
container.register<SubsiteService>(SubsiteService, {
    useClass: SubsiteService,
});

container.register<CreateSubsite>(CreateSubsite, { useClass: CreateSubsite });

container.register<GetByIdSubsite>(GetByIdSubsite, {
    useClass: GetByIdSubsite,
});

container.register<UpdateSubsite>(UpdateSubsite, { useClass: UpdateSubsite });

container.register<RemoveSubsite>(RemoveSubsite, { useClass: RemoveSubsite });

container.register<GetByUserSubsite>(GetByUserSubsite, {
    useClass: GetByUserSubsite,
});

container.register<ValidateSubsite>(ValidateSubsite, {
    useClass: ValidateSubsite,
});

container.register<GetConfigSubsite>(GetConfigSubsite, {
    useClass: GetConfigSubsite,
});

container.register<UpdateConfigSubsite>(UpdateConfigSubsite, {
    useClass: UpdateConfigSubsite,
});

container.register<GetLatestSubsite>(GetLatestSubsite, {
    useClass: GetLatestSubsite,
});

container.register<GetActiveSubsite>(GetActiveSubsite, {
    useClass: GetActiveSubsite,
});

container.register<CountByUserSubsite>(CountByUserSubsite, {
    useClass: CountByUserSubsite,
});

// Exporting the container
export { container };
