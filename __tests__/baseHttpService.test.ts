import { describe, expect, test, jest, afterEach } from '@jest/globals';
import { axios } from '../src/config/axios';
import { BaseHttpServices } from '../src/services/baseHttpService';
import { AxiosResponse } from 'axios';

jest.mock('../src/config/axios');

describe('BaseHttpServices.', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('Should return response if successful.', async () => {
    // @ts-ignore
    const mockResponse: AxiosResponse = {
      data: {
        percents: 0.3,
        min: {
          amount: 0.5,
          currency: 'EUR',
        },
      },
    };
    jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResponse);
    const baseHttpServices = new BaseHttpServices();
    const response = await baseHttpServices.get('/cash-in', undefined);

    expect(response).toEqual(mockResponse);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('/cash-in', undefined);
  });
});
