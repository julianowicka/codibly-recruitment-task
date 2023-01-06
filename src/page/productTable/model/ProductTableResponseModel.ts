import {ProductModel} from "./ProductModel";

export interface ProductTableResponseModel {
    data: Array<ProductModel>,
    page: number,
    per_page: number,
    total: number,
    total_pages: number
}