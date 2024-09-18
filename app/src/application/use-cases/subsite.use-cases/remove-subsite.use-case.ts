import { SubsiteService } from '../../services/subsite.service';

/**
 * Use case class for remove.
 * This class encapsulates the business logic for remove.
 * It interacts with the Subsite service to perform operations on the subsite repository.
 */
export class RemoveSubsite {
    constructor(private readonly service: SubsiteService) {}

    /**
     * Execute the remove use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(id: number): Promise<boolean> {
        const result = await this.service.remove(id);

        return result;
    }
}
