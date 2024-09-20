import { container } from 'tsyringe';

import { IAddressRepositoryToken } from '../../tokens/tokens';
import { IAddressRepository } from '../../../../domain/repositories/address.repository';
import { AddressRepositoryImpl } from '../../../repositories-impls/address.repository-impl';
import { AddressService } from '../../../../application/services/address.service';

import { CreateAddress } from '../../../../application/use-cases/address.use-cases/create-address.use-case';
import { GetByIdAddress } from '../../../../application/use-cases/address.use-cases/get-by-id-address.use-case';
import { UpdateByIdAddress } from '../../../../application/use-cases/address.use-cases/update-by-id-address.use-case';
import { DeleteByIdAddress } from '../../../../application/use-cases/address.use-cases/delete-by-id-address.use-case';
import { GetAllByUserIdAddress } from '../../../../application/use-cases/address.use-cases/get-all-by-user-id-address.use-case';
import { GetByCityAddress } from '../../../../application/use-cases/address.use-cases/get-by-city-address.use-case';
import { GetByStateAddress } from '../../../../application/use-cases/address.use-cases/get-by-state-address.use-case';
import { GetByCountryAddress } from '../../../../application/use-cases/address.use-cases/get-by-country-address.use-case';
import { GetByPostalCodeAddress } from '../../../../application/use-cases/address.use-cases/get-by-postal-code-address.use-case';

// Registering dependencies

/**
 * Register the AddressRepository's concrete implementation
 */
container.register<IAddressRepository>(IAddressRepositoryToken, {
    useClass: AddressRepositoryImpl,
});
container.register<AddressService>(AddressService, {
    useClass: AddressService,
});

container.register<CreateAddress>(CreateAddress, { useClass: CreateAddress });

container.register<GetByIdAddress>(GetByIdAddress, {
    useClass: GetByIdAddress,
});

container.register<UpdateByIdAddress>(UpdateByIdAddress, {
    useClass: UpdateByIdAddress,
});

container.register<DeleteByIdAddress>(DeleteByIdAddress, {
    useClass: DeleteByIdAddress,
});

container.register<GetAllByUserIdAddress>(GetAllByUserIdAddress, {
    useClass: GetAllByUserIdAddress,
});

container.register<GetByCityAddress>(GetByCityAddress, {
    useClass: GetByCityAddress,
});

container.register<GetByStateAddress>(GetByStateAddress, {
    useClass: GetByStateAddress,
});

container.register<GetByCountryAddress>(GetByCountryAddress, {
    useClass: GetByCountryAddress,
});

container.register<GetByPostalCodeAddress>(GetByPostalCodeAddress, {
    useClass: GetByPostalCodeAddress,
});

// Exporting the container
export { container };
