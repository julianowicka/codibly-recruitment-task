import axios from "axios";
import {ProductListResponseModel} from "../model/ProductListResponseModel";
import {ProductEntityResponseModel} from "../model/ProductEntityResponseModel";

export const fetchProducts = async (id: string): Promise<ProductListResponseModel> => {
  if (id === '') {
    const response = await axios.get<ProductListResponseModel>(`https://reqres.in/api/products`)
    return response.data;
  }

  const response = await axios.get<ProductEntityResponseModel>(`https://reqres.in/api/products?id=` + id);
  const responseData = response.data;

  return {
    page: 1,
    per_page: 1,
    total: 1,
    total_pages: 1,
    data: [responseData.data],
  };
}