import { SubsiteService } from '../../services/subsite.service';
import { Subsite } from '../../../domain/entities/subsite.entity';

import { injectable } from 'tsyringe';
/**
 * Use case class for updateConfig.
 * This class encapsulates the business logic for updateConfig.
 * It interacts with the Subsite service to perform operations on the subsite repository.
 */
@injectable()
export class UpdateConfigSubsite {
    constructor(private readonly service: SubsiteService) {}

    /**
     * Execute the updateConfig use case.
     * @param id - The number required by the service method.
     * @param config - The any required by the service method.
     * @returns A promise with the service result of type Promise<Subsite>.
     */
    async execute(id: number, config: any): Promise<Subsite> {
        const result = await this.service.updateConfig(id, config);

        return result;
    }
}
