import { SubsiteService } from '../../services/subsite.service';

import { injectable } from 'tsyringe';
/**
 * Use case class for getConfig.
 * This class encapsulates the business logic for getConfig.
 * It interacts with the Subsite service to perform operations on the subsite repository.
 */
@injectable()
export class GetConfigSubsite {
    constructor(private readonly service: SubsiteService) {}

    /**
     * Execute the getConfig use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<any>.
     */
    async execute(id: number): Promise<any> {
        const result = await this.service.getConfig(id);

        return result;
    }
}
