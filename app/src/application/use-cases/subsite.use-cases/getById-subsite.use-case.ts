import { SubsiteService } from '../../services/subsite.service';
import { Subsite } from '../../../domain/entities/subsite.entity';

/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the Subsite service to perform operations on the subsite repository.
 */
export class GetByIdSubsite {
    constructor(private readonly service: SubsiteService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<Subsite | null>.
     */
    async execute(id: number): Promise<Subsite | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
