import { SubsiteService } from '../../services/subsite.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for countByUser.
 * This class encapsulates the business logic for countByUser.
 * It interacts with the Subsite service to perform operations on the subsite repository.
 */
@injectable()
export class CountByUserSubsite {
    constructor(private readonly service: SubsiteService) {}

    /**
     * Execute the countByUser use case.
     * @param userId - The number required by the service method.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(userId: number): Promise<number> {
        const result = await this.service.countByUser(userId);

        return result;
    }
}
