import { createAsyncThunk } from '@reduxjs/toolkit';
import { container } from 'tsyringe';

import { GetByNameProductVariant } from '../../../use-cases/product-variant.use-cases/get-by-name-product-variant.use-case';
import { ProductVariant } from '../../../../domain/entities/product-variant.entity';

/**
 * Resolves an instance of the 'GetByNameProductVariant' use case from the dependency injection container.
 *
 * This line of code uses a dependency injection container to obtain an instance of the 'GetByNameProductVariant'
 * class, which is a use case responsible for handling the creation of new orders. The container is
 * typically configured to manage the lifecycle of dependencies and provide instances as needed.
 *
 * @type {GetByNameProductVariant} - The type of the resolved instance, which should match the class or
 * interface that is registered with the dependency injection container.
 *
 * @param {Container} container - The dependency injection container that holds the registered
 * services and use cases. The container is responsible for providing the appropriate instance
 * of 'GetByNameProductVariant' based on its configuration.
 *
 * @returns {GetByNameProductVariant} - An instance of the 'GetByNameProductVariant' use case, which can be used to
 * perform operations related to order creation.
 */
const getByNameProductVariantUseCase: GetByNameProductVariant =
    container.resolve(GetByNameProductVariant);

/**
 * Creates an asynchronous thunk action for Redux Toolkit using 'createAsyncThunk'.
 *
 * This thunk is a function that dispatches a series of Redux actions based on the
 * execution of an asynchronous operation. It handles the asynchronous process,
 * including success and error scenarios, and updates the state accordingly.
 *
 * @template ProductVariant[] - The type of the data that the thunk will return on success.
 * @template productId: number, name: string - The type of the parameters that will be passed to the thunk.
 *
 * @param {string} getByNameProductVariant - The name of the thunk action, typically in the format of
 * 'entityName/thunkName', which will be used as the action type prefix.
 *
 * @param {Function} getByNameProductVariantUseCase.execute - The asynchronous function or use case object
 * that performs the desired operation. This function should return a promise.
 *
 * @param {Object} { productId, name } - The parameters to be passed to the asynchronous
 * function when it is called.
 *
 * @param {Object} param1 - An object containing the 'rejectWithValue' function used to handle
 * errors. It is called with an error message if the asynchronous operation fails.
 *
 * @returns {Promise<ProductVariant[]>} - A promise that resolves to the data returned
 * by the asynchronous operation or rejects with a string error message.
 *
 * @throws {string} - If the asynchronous operation fails, an error message is provided using
 * 'rejectWithValue'. The default message is 'Error while executing getByNameProductVariant' if no specific
 * error message is provided.
 */
export const getByNameProductVariant = createAsyncThunk<
    ProductVariant[],
    { productId: number; name: string },
    { rejectValue: string }
>(
    'productVariant/getByNameProductVariant',
    async ({ productId, name }, { rejectWithValue }) => {
        try {
            const response = await getByNameProductVariantUseCase.execute(
                productId,
                name
            );
            return response;
        } catch (error: any) {
            return rejectWithValue(
                error.message ||
                    'Error while executing getByNameProductVariant in thunk'
            );
        }
    }
);