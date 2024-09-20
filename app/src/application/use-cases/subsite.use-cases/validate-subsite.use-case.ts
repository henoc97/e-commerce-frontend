import { SubsiteService } from '../../services/subsite.service';
import { Subsite } from '../../../domain/entities/subsite.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for validate.
 * This class encapsulates the business logic for validate.
 * It interacts with the Subsite service to perform operations on the subsite repository.
 */
@injectable()
export class ValidateSubsite {
    constructor(private readonly service: SubsiteService) {}

    /**
     * Execute the validate use case.
     * @param Subsite - The Subsite required by the service method.
     * @returns A promise with the service result of type Promise<boolean>.
     */
    async execute(Subsite: Subsite): Promise<boolean> {
        const result = await this.service.validate(Subsite);

        return result;
    }
}
