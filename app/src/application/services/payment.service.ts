import { injectable, inject } from 'tsyringe';
import type { IPaymentRepository } from '../../domain/repositories/payment.repository';
import { IPaymentRepositoryToken } from '../../infrastructure/repositories/config/tokens';
import { Payment } from '../../domain/entities/payment.entity';

/**
 * Service class for handling Payment-related operations.
 * It provides methods that call the underlying repository.
 */
@injectable()
export class PaymentService {
    /**
     * Constructor for PaymentService.
     * Injects the repository dependency.
     *
     * @param paymentRepository - The repository that handles Payment data operations.
     */
    constructor(
        @inject(IPaymentRepositoryToken)
        private readonly paymentRepository: IPaymentRepository
    ) {}

    /**
     * Service method for create.
     * Calls the repository's create method.
     * @param payment - The Payment required by the repository method.
     * @returns Promise<Payment> - The result from the repository method.
     */
    public async create(payment: Payment): Promise<Payment> {
        return await this.paymentRepository.create(payment);
    }

    /**
     * Service method for getById.
     * Calls the repository's getById method.
     * @param id - The number required by the repository method.
     * @returns Promise<Payment | null> - The result from the repository method.
     */
    public async getById(id: number): Promise<Payment | null> {
        return await this.paymentRepository.getById(id);
    }

    /**
     * Service method for update.
     * Calls the repository's update method.
     * @param id - The number required by the repository method.
     * @param updates - The Partial required by the repository method.
     * @returns Promise<Payment> - The result from the repository method.
     */
    public async update(
        id: number,
        updates: Partial<Payment>
    ): Promise<Payment> {
        return await this.paymentRepository.update(id, updates);
    }

    /**
     * Service method for delete.
     * Calls the repository's delete method.
     * @param id - The number required by the repository method.
     * @returns Promise<boolean> - The result from the repository method.
     */
    public async delete(id: number): Promise<boolean> {
        return await this.paymentRepository.delete(id);
    }

    /**
     * Service method for getByOrderId.
     * Calls the repository's getByOrderId method.
     * @param orderId - The number required by the repository method.
     * @returns Promise<Payment[]> - The result from the repository method.
     */
    public async getByOrderId(orderId: number): Promise<Payment[]> {
        return await this.paymentRepository.getByOrderId(orderId);
    }

    /**
     * Service method for getByMethod.
     * Calls the repository's getByMethod method.
     * @param method - The string required by the repository method.
     * @returns Promise<Payment[]> - The result from the repository method.
     */
    public async getByMethod(method: string): Promise<Payment[]> {
        return await this.paymentRepository.getByMethod(method);
    }

    /**
     * Service method for getByStatus.
     * Calls the repository's getByStatus method.
     * @param status - The PaymentStatus required by the repository method.
     * @returns Promise<Payment[]> - The result from the repository method.
     */
    public async getByStatus(status: PaymentStatus): Promise<Payment[]> {
        return await this.paymentRepository.getByStatus(status);
    }

    /**
     * Service method for getByDateRange.
     * Calls the repository's getByDateRange method.
     * @param startDate - The Date required by the repository method.
     * @param endDate - The Date required by the repository method.
     * @returns Promise<Payment[]> - The result from the repository method.
     */
    public async getByDateRange(
        startDate: Date,
        endDate: Date
    ): Promise<Payment[]> {
        return await this.paymentRepository.getByDateRange(startDate, endDate);
    }

    /**
     * Service method for getTotalAmountByDateRange.
     * Calls the repository's getTotalAmountByDateRange method.
     * @param startDate - The Date required by the repository method.
     * @param endDate - The Date required by the repository method.
     * @returns Promise<number> - The result from the repository method.
     */
    public async getTotalAmountByDateRange(
        startDate: Date,
        endDate: Date
    ): Promise<number> {
        return await this.paymentRepository.getTotalAmountByDateRange(
            startDate,
            endDate
        );
    }

    /**
     * Service method for getMostRecentPaymentByOrderId.
     * Calls the repository's getMostRecentPaymentByOrderId method.
     * @param orderId - The number required by the repository method.
     * @returns Promise<Payment | null> - The result from the repository method.
     */
    public async getMostRecentPaymentByOrderId(
        orderId: number
    ): Promise<Payment | null> {
        return await this.paymentRepository.getMostRecentPaymentByOrderId(
            orderId
        );
    }

    /**
     * Service method for getPaymentsGroupedByMethod.
     * Calls the repository's getPaymentsGroupedByMethod method.
     * @returns Promise<Map<string, Payment[]>> - The result from the repository method.
     */
    public async getPaymentsGroupedByMethod(): Promise<Map<string, Payment[]>> {
        return await this.paymentRepository.getPaymentsGroupedByMethod();
    }
}
