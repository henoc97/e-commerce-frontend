import { Subsite } from '../../../domain/entities/subsite.entity';
import { UserService } from '../../services/user.service';

/**
 * Use case class for getSubsites.
 * This class encapsulates the business logic for getSubsites.
 * It interacts with the User service to perform operations on the user repository.
 */
export class GetSubsitesUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getSubsites use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Subsite[]>.
     */
    async execute(userId: number): Promise<Subsite[]> {
        const result = await this.service.getSubsites(userId);

        return result;
    }
}
