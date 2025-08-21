import { fetchProducts } from '../fetchProducts';

// Mock axios to avoid real HTTP calls in tests
jest.mock('axios');

describe('fetchProducts', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return products list when id is empty', async () => {
    const mockResponse = {
      data: {
        page: 1,
        per_page: 5,
        total: 6,
        total_pages: 2,
        data: [
          { id: 1, name: 'cerulean', year: 2000, color: '#98B2D1', pantone_value: '15-4020' }
        ]
      }
    };

    const axios = require('axios');
    axios.get.mockResolvedValue(mockResponse);

    const result = await fetchProducts('');

    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining('/api/unknown'),
      { params: { page: 1, per_page: 5 } }
    );
    expect(result).toEqual(mockResponse.data);
  });

  it('should return single product wrapped in list format when id is provided', async () => {
    const mockResponse = {
      data: {
        data: { id: 2, name: 'fuchsia rose', year: 2001, color: '#C74375', pantone_value: '17-2031' }
      }
    };

    const axios = require('axios');
    axios.get.mockResolvedValue(mockResponse);

    const result = await fetchProducts('2');

    expect(axios.get).toHaveBeenCalledWith(
      expect.stringContaining('/api/unknown/2')
    );
    expect(result).toEqual({
      page: 1,
      per_page: 1,
      total: 1,
      total_pages: 1,
      data: [mockResponse.data.data],
    });
  });
});