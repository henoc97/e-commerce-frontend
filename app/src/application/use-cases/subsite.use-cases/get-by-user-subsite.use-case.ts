import { SubsiteService } from '../../services/subsite.service';
import { Subsite } from '../../../domain/entities/subsite.entity';

/**
 * Use case class for getByUser.
 * This class encapsulates the business logic for getByUser.
 * It interacts with the Subsite service to perform operations on the subsite repository.
 */
export class GetByUserSubsite {
    constructor(private readonly service: SubsiteService) {}

    /**
     * Execute the getByUser use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<Subsite[]>.
     */
    async execute(userId: number): Promise<Subsite[]> {
        const result = await this.service.getByUser(userId);

        return result;
    }
}
