import {ProductModel} from "./ProductModel";

export interface ProductListResponseModel {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: Array<ProductModel>,
}