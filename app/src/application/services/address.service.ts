import { IAddressRepository } from '../../domain/repositories/address.repository';
import { Address } from '../../domain/entities/address.entity';

/**
 * Service class for handling Address-related operations.
 * It provides methods that call the underlying repository.
 */
export class AddressService {
    /**
     * Constructor for AddressService.
     * Injects the repository dependency.
     *
     * @param addressRepository - The repository that handles Address data operations.
     */
    constructor(private readonly addressRepository: IAddressRepository) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param address - The Address required by the repository method.
     * @returns Promise<Address> - The result from the repository method.
     */
    public async create(address: Address): Promise<Address> {
        return await this.addressRepository.create(address);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Address | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Address | null> {
        return await this.addressRepository.getById(id);
    }

    /**
     * Service method for updateById.
     * Calls the repository's updateById method.
     * @param id - The number required by the repository method.
     * @param updateData - The Partial required by the repository method.
     * @returns Promise<Address> - The result from the repository method.
     */
    public async updateById(
        id: number,
        updateData: Partial<Address>
    ): Promise<Address> {
        return await this.addressRepository.updateById(id, updateData);
    }

    /**
     * Service method for deleteById.
     * Calls the repository's deleteById method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async deleteById(id: number): Promise<boolean> {
        return await this.addressRepository.deleteById(id);
    }

    /**
     * Service method for getAllByUserId.
     * Calls the repository's getAllByUserId method.
     * @param userId - The number required by the repository method.
     * @returns Promise<Address[]> - The result from the repository method.
     */
    public async getAllByUserId(userId: number): Promise<Address[]> {
        return await this.addressRepository.getAllByUserId(userId);
    }

    /**
     * Service method for getByUserIdAndId.
     * Calls the repository's getByUserIdAndId method.
     * @param userId - The number required by the repository method.
     * @param addressId - The number required by the repository method.
     * @returns Promise<Address | null> - The result from the repository method.
     */
    public async getByUserIdAndId(
        userId: number,
        addressId: number
    ): Promise<Address | null> {
        return await this.addressRepository.getByUserIdAndId(userId, addressId);
    }

    /**
     * Service method for getByCity.
     * Calls the repository's getByCity method.
     * @param city - The string required by the repository method.
     * @returns Promise<Address[]> - The result from the repository method.
     */
    public async getByCity(city: string): Promise<Address[]> {
        return await this.addressRepository.getByCity(city);
    }

    /**
     * Service method for getByState.
     * Calls the repository's getByState method.
     * @param state - The string required by the repository method.
     * @returns Promise<Address[]> - The result from the repository method.
     */
    public async getByState(state: string): Promise<Address[]> {
        return await this.addressRepository.getByState(state);
    }

    /**
     * Service method for getByCountry.
     * Calls the repository's getByCountry method.
     * @param country - The string required by the repository method.
     * @returns Promise<Address[]> - The result from the repository method.
     */
    public async getByCountry(country: string): Promise<Address[]> {
        return await this.addressRepository.getByCountry(country);
    }

    /**
     * Service method for getByPostalCode.
     * Calls the repository's getByPostalCode method.
     * @param postalCode - The string required by the repository method.
     * @returns Promise<Address[]> - The result from the repository method.
     */
    public async getByPostalCode(postalCode: string): Promise<Address[]> {
        return await this.addressRepository.getByPostalCode(postalCode);
    }
}
