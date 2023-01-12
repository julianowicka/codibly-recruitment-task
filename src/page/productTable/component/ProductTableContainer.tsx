import React from "react";
import axios from "axios";
import {useQuery} from "react-query";
import {ProductResponseModel} from "../model/ProductResponseModel";
import {ProductTable} from "./ProductTable";


export const ProductTableContainer: React.FC = () => {

  const {data, isLoading, isError} = useQuery(
    'products',
    () => axios.get<ProductResponseModel>(`https://reqres.in/api/products`)
  )
  console.log(data);

  if(data === undefined || isLoading || isError) {
    return(
      <>
        Spinner
      </>
    );
  }

  return (
    <>
      <ProductTable  products={data.data.data}/>
    </>
  );
}