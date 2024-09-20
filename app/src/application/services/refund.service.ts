import { injectable, inject } from 'tsyringe';
import type { IRefundRepository } from '../../domain/repositories/refund.repository';
import { IRefundRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { Refund } from '../../domain/entities/refund.entity';

/**
 * Service class for handling Refund-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class RefundService {
    /**
     * Constructor for RefundService.
     * Injects the repository dependency.
     *
     * @param refundRepository - The repository that handles Refund data operations.
     */
    constructor(
        @inject(IRefundRepositoryToken)
        private readonly refundRepository: IRefundRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param refund - The Refund required by the repository method.
     * @returns Promise<Refund> - The result from the repository method.
     */
    public async create(refund: Refund): Promise<Refund> {
        return await this.refundRepository.create(refund);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Refund | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Refund | null> {
        return await this.refundRepository.getById(id);
    }

    /**
     * Service method for getByOrder.
     * Calls the repository's getByOrder method.
     * @param orderId - The number required by the repository method.
     * @returns Promise<Refund[]> - The result from the repository method.
     */
    public async getByOrder(orderId: number): Promise<Refund[]> {
        return await this.refundRepository.getByOrder(orderId);
    }

    /**
     * Service method for modify.
     * Calls the repository's modify method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<Refund> - The result from the repository method.
     */
    public async modify(id: number, updates: Partial<Refund>): Promise<Refund> {
        return await this.refundRepository.modify(id, updates);
    }

    /**
     * Service method for remove.
     * Calls the repository's remove method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async remove(id: number): Promise<boolean> {
        return await this.refundRepository.remove(id);
    }

    /**
     * Service method for isEligible.
     * Calls the repository's isEligible method.
     * @param refund - The Refund required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async isEligible(refund: Refund): Promise<boolean> {
        return await this.refundRepository.isEligible(refund);
    }

    /**
     * Service method for process.
     * Calls the repository's process method.
     * @param id - The number required by the repository method.
     * @param status - The RefundStatus required by the repository method.
     * @returns Promise<Refund> - The result from the repository method.
     */
    public async process(id: number, status: RefundStatus): Promise<Refund> {
        return await this.refundRepository.process(id, status);
    }

    /**
     * Service method for getByStatus.
     * Calls the repository's getByStatus method.
     * @param status - The RefundStatus required by the repository method.
     * @returns Promise<Refund[]> - The result from the repository method.
     */
    public async getByStatus(status: RefundStatus): Promise<Refund[]> {
        return await this.refundRepository.getByStatus(status);
    }

    /**
     * Service method for cancel.
     * Calls the repository's cancel method.
     * @param id - The number required by the repository method.
     * @returns Promise<Refund> - The result from the repository method.
     */
    public async cancel(id: number): Promise<Refund> {
        return await this.refundRepository.cancel(id);
    }

    /**
     * Service method for approve.
     * Calls the repository's approve method.
     * @param id - The number required by the repository method.
     * @returns Promise<Refund> - The result from the repository method.
     */
    public async approve(id: number): Promise<Refund> {
        return await this.refundRepository.approve(id);
    }

    /**
     * Service method for issuePartial.
     * Calls the repository's issuePartial method.
     * @param id - The number required by the repository method.
     * @param amount - The number required by the repository method.
     * @returns Promise<Refund> - The result from the repository method.
     */
    public async issuePartial(id: number, amount: number): Promise<Refund> {
        return await this.refundRepository.issuePartial(id, amount);
    }

    /**
     * Service method for getTotalRefunded.
     * Calls the repository's getTotalRefunded method.
     * @param orderId - The number required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async getTotalRefunded(orderId: number): Promise<number> {
        return await this.refundRepository.getTotalRefunded(orderId);
    }
}
