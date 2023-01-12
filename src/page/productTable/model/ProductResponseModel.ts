import {ProductModel} from "./ProductModel";

export interface ProductResponseModel {
  page: number,
  per_page: number,
  total: number,
  total_pages: number,
  data: Array<ProductModel>,
}