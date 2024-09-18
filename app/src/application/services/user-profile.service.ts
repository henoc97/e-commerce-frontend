import { IUserProfileRepository } from '../../domain/repositories/user-profile.repository';
import { UserProfile } from '../../domain/entities/user-profile.entity';

/**
 * Service class for handling UserProfile-related operations.
 * It provides methods that call the underlying repository.
 */
export class UserProfileService {
    /**
     * Constructor for UserProfileService.
     * Injects the repository dependency.
     *
     * @param userProfileRepository - The repository that handles UserProfile data operations.
     */
    constructor(
        private readonly userProfileRepository: IUserProfileRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param profile - The UserProfile required by the repository method.
     * @returns Promise<UserProfile> - The result from the repository method.
     */
    public async create(profile: UserProfile): Promise<UserProfile> {
        return await this.userProfileRepository.create(profile);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<UserProfile | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<UserProfile | null> {
        return await this.userProfileRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<UserProfile> - The result from the repository method.
     */
    public async update(
        id: number,
        updates: Partial<UserProfile>
    ): Promise<UserProfile> {
        return await this.userProfileRepository.update(
            id,
            updates
        );
    }

    /**
     * Service method for remove.
     * Calls the repository's remove method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async remove(id: number): Promise<boolean> {
        return await this.userProfileRepository.remove(id);
    }

    /**
     * Service method for getByUserId.
     * Calls the repository's getByUserId method.
     * @param userId - The number required by the repository method.
     * @returns Promise<UserProfile | null> - The result from the repository method.
     */
    public async getByUserId(userId: number): Promise<UserProfile | null> {
        return await this.userProfileRepository.getByUserId(userId);
    }

    /**
     * Service method for updatePhone.
     * Calls the repository's updatePhone method.
     * @param userId - The number required by the repository method.
     * @param phone - The string required by the repository method.
     * @returns Promise<UserProfile> - The result from the repository method.
     */
    public async updatePhone(
        userId: number,
        phone: string
    ): Promise<UserProfile> {
        return await this.userProfileRepository.updatePhone(userId, phone);
    }

    /**
     * Service method for updateBirthday.
     * Calls the repository's updateBirthday method.
     * @param userId - The number required by the repository method.
     * @param birthday - The Date required by the repository method.
     * @returns Promise<UserProfile> - The result from the repository method.
     */
    public async updateBirthday(
        userId: number,
        birthday: Date
    ): Promise<UserProfile> {
        return await this.userProfileRepository.updateBirthday(
            userId,
            birthday
        );
    }

    /**
     * Service method for updateGender.
     * Calls the repository's updateGender method.
     * @param userId - The number required by the repository method.
     * @param gender - The string required by the repository method.
     * @returns Promise<UserProfile> - The result from the repository method.
     */
    public async updateGender(
        userId: number,
        gender: string
    ): Promise<UserProfile> {
        return await this.userProfileRepository.updateGender(userId, gender);
    }

    /**
     * Service method for getByGender.
     * Calls the repository's getByGender method.
     * @param gender - The string required by the repository method.
     * @returns Promise<UserProfile[]> - The result from the repository method.
     */
    public async getByGender(gender: string): Promise<UserProfile[]> {
        return await this.userProfileRepository.getByGender(gender);
    }

    /**
     * Service method for getByBirthdayRange.
     * Calls the repository's getByBirthdayRange method.
     * @param startDate - The Date required by the repository method.
     * @param endDate - The Date required by the repository method.
     * @returns Promise<UserProfile[]> - The result from the repository method.
     */
    public async getByBirthdayRange(
        startDate: Date,
        endDate: Date
    ): Promise<UserProfile[]> {
        return await this.userProfileRepository.getByBirthdayRange(
            startDate,
            endDate
        );
    }

    /**
     * Service method for isPhoneInUse.
     * Calls the repository's isPhoneInUse method.
     * @param phone - The string required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async isPhoneInUse(phone: string): Promise<boolean> {
        return await this.userProfileRepository.isPhoneInUse(phone);
    }

    /**
     * Service method for exists.
     * Calls the repository's exists method.
     * @param userId - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async exists(userId: number): Promise<boolean> {
        return await this.userProfileRepository.exists(userId);
    }

    /**
     * Service method for getRecentlyUpdated.
     * Calls the repository's getRecentlyUpdated method.
     * @param limit - The number required by the repository method.
     * @returns Promise<UserProfile[]> - The result from the repository method.
     */
    public async getRecentlyUpdated(limit: number): Promise<UserProfile[]> {
        return await this.userProfileRepository.getRecentlyUpdated(limit);
    }

    /**
     * Service method for findMatches.
     * Calls the repository's findMatches method.
     * @param criteria - The Partial required by the repository method.
     * @returns Promise<UserProfile[]> - The result from the repository method.
     */
    public async findMatches(
        criteria: Partial<UserProfile>
    ): Promise<UserProfile[]> {
        return await this.userProfileRepository.findMatches(
            criteria
        );
    }
}
