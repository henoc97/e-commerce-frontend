import { SubsiteService } from '../../services/subsite.service';
import { Subsite } from '../../../domain/entities/subsite.entity';

/**
 * Use case class for create.
 * This class encapsulates the business logic for create.
 * It interacts with the Subsite service to perform operations on the subsite repository.
 */
export class CreateSubsite {
    constructor(private readonly service: SubsiteService) {}

    /**
     * Execute the create use case.
     * @param Subsite - The Subsite required by the service method.
     * @returns A promise with the service result of type Promise<Subsite>.
     */
    async execute(Subsite: Subsite): Promise<Subsite> {
        const result = await this.service.create(Subsite);

        return result;
    }
}
