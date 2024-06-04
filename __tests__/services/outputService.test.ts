import { describe, expect, test, jest } from '@jest/globals';
import { OutputService } from '../../src/services/outputService';
import { commissionDto } from '../../src/modules/calculateUserCommissionModule';

describe('OutputService.', () => {
  test('Should log formatted commission data to the console.', () => {
    const commissionData: commissionDto[] = [
      { commission: 1.23456 },
      { commission: 5.6789 },
      { commission: 0.123 },
      { error: 'error' },
    ];

    const mockFn = jest.spyOn(console, 'log').mockImplementation(() => {});

    OutputService.outputInConsole(commissionData);

    expect(mockFn).toHaveBeenCalledTimes(commissionData.length);
    expect(mockFn).toHaveBeenNthCalledWith(1, '1.23');
    expect(mockFn).toHaveBeenNthCalledWith(2, '5.68');
    expect(mockFn).toHaveBeenNthCalledWith(3, '0.12');
    expect(mockFn).toHaveBeenNthCalledWith(4, 'error');

    mockFn.mockRestore();
  });
});
