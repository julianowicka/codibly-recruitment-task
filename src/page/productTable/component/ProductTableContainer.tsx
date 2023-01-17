import React, {useState} from "react";
import {useQuery} from "react-query";
import {ProductTable} from "./ProductTable";
import {fetchProducts} from "../util/fetchProducts";
import {TextField} from "@mui/material";


export const ProductTableContainer: React.FC = () => {
  const [filterId, setFilterId] = useState("");

  const {data: products, isLoading, isError} = useQuery(
    ['products', filterId],
    () => fetchProducts(filterId),
  )

  const handleChangeFilterId = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const newFilterValue = event.target.value;
    console.log(newFilterValue);
    setFilterId(newFilterValue);
  }

  if (products === undefined || isLoading || isError) {
    return (
      <>
        Spinner
      </>
    );
  }

  return (
    <>
      <TextField
        label="Product id"
        variant="outlined"
        value={filterId}
        onChange={handleChangeFilterId}
        type="number"
      />
      <ProductTable products={products.data}/>
    </>
  );
}