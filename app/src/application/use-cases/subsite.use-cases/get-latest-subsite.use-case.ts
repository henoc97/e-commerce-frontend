import { SubsiteService } from '../../services/subsite.service';
import { Subsite } from '../../../domain/entities/subsite.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for getLatest.
 * This class encapsulates the business logic for getLatest.
 * It interacts with the Subsite service to perform operations on the subsite repository.
 */
@injectable()
export class GetLatestSubsite {
    constructor(private readonly service: SubsiteService) {}

    /**
     * Execute the getLatest use case.
     * @returns A promise with the service result of type Promise<Subsite>.
     */
    async execute(): Promise<Subsite> {
        const result = await this.service.getLatest();

        return result;
    }
}
