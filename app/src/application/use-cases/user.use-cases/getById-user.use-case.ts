import { UserService } from '../../services/user.service';
import { User } from '../../../domain/entities/user.entity';

/**
 * Use case class for getById.
 * This class encapsulates the business logic for getById.
 * It interacts with the User service to perform operations on the user repository.
 */
export class GetByIdUser {
    constructor(private readonly service: UserService) {}

    /**
     * Execute the getById use case.
     * @param id - The number required by the service method.
     * @returns A promise with the service result of type Promise<User | null>.
     */
    async execute(id: number): Promise<User | null> {
        const result = await this.service.getById(id);

        if (!result) return null;

        return result;
    }
}
