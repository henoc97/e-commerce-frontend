import { UserService } from '../../services/user.service';

/**
 * Use case class for getActiveCount.
 * This class encapsulates the business logic for getActiveCount.
 * It interacts with the User service to perform operations on the user repository.
 */
export class GetActiveCountUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getActiveCount use case.
     * @returns A promise with the service result of type Promise<number>.
     */
    async execute(): Promise<number> {
        const result = await this.service.getActiveCount();

        return result;
    }
}
