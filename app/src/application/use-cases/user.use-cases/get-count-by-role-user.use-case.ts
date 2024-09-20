import { UserRole } from '../../../domain/enums/user-role.enum';
import { UserService } from '../../services/user.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getCountByRole.
 * This class encapsulates the business logic for getCountByRole.
 * It interacts with the User service to perform operations on the user repository.
 */
@injectable()
export class GetCountByRoleUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getCountByRole use case.
     * @param role - The UserRole required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(role: UserRole): Promise<number> {
        const result = await this.service.getCountByRole(role);

        return result;
    }
}
