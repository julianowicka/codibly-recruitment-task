import axios from "axios";
import {ProductListResponseModel} from "../model/ProductListResponseModel";
import {ProductEntityResponseModel} from "../model/ProductEntityResponseModel";

const getBaseUrl = (): string => {
  const fromEnv = process.env.REACT_APP_API_BASE_URL;
  if (fromEnv) return fromEnv;
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return 'http://localhost:4000/api/unknown';
  }
  return 'https://reqres.in/api/unknown';
}

const BASE_URL = getBaseUrl();

export const fetchProducts = async (id: string, page = 1): Promise<ProductListResponseModel> => {
  const trimmed = id.trim();

  if (trimmed === '') {
    const response = await axios.get<ProductListResponseModel>(`${BASE_URL}`, {
      params: { page, per_page: 5 }
    });
    return response.data;
  }

  const response = await axios.get<ProductEntityResponseModel>(`${BASE_URL}/${trimmed}`);
  const responseData = response.data;

  return {
    page: 1,
    per_page: 1,
    total: 1,
    total_pages: 1,
    data: [responseData.data],
  };
}