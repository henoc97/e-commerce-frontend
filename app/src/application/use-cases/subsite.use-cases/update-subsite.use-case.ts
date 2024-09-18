import { SubsiteService } from '../../services/subsite.service';
import { Subsite } from '../../../domain/entities/subsite.entity';

/**
 * Use case class for update.
 * This class encapsulates the business logic for update.
 * It interacts with the Subsite service to perform operations on the subsite repository.
 */
export class UpdateSubsite {
    constructor(private readonly service: SubsiteService) {}

    /**
     * Execute the update use case.
     * @param id - The number required by the service method.
     * @param updates - The Partial required by the service method.
     * @returns A promise with the service result of type Promise<Subsite>.
     */
    async execute(id: number, updates: Partial<Subsite>): Promise<Subsite> {
        const result = await this.service.update(id, updates);

        return result;
    }
}
