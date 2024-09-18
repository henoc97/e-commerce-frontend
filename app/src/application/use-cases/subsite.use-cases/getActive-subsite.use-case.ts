import { SubsiteService } from '../../services/subsite.service';
import { Subsite } from '../../../domain/entities/subsite.entity';

/**
 * Use case class for getActive.
 * This class encapsulates the business logic for getActive.
 * It interacts with the Subsite service to perform operations on the subsite repository.
 */
export class GetActiveSubsite {
    constructor(private readonly service: SubsiteService) {}

    /**
     * Execute the getActive use case.
     * @returns A promise with the service result of type Promise<Subsite[]>.
     */
    async execute(): Promise<Subsite[]> {
        const result = await this.service.getActive();

        return result;
    }
}
