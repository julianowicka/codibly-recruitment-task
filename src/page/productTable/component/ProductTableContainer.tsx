import React, {useState} from "react";
import {useQuery} from "react-query";
import {ProductTable} from "./ProductTable";
import {fetchProducts} from "../util/fetchProducts";
import {TextField, Alert, CircularProgress, Box} from "@mui/material";
import axios from "axios";

export const ProductTableContainer: React.FC = () => {
  const [filterId, setFilterId] = useState("");

  const {data: products, isLoading, isError, error} = useQuery(
    ['products', filterId],
    () => fetchProducts(filterId),
    { retry: 0 }
  );

  const handleChangeFilterId = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const raw = event.target.value;
    const digitsOnly = raw.replace(/\D/g, '');
    setFilterId(digitsOnly);
  }

  if (isLoading) {
    return (
      <Box display="flex" alignItems="center" gap={1}>
        <CircularProgress size={20} /> Ładowanie…
      </Box>
    );
  }

  if (isError) {
    // Log szczegóły błędu do konsoli dla debugowania
    // eslint-disable-next-line no-console
    console.error('Błąd podczas pobierania produktów', error);

    let message = 'Wystąpił błąd podczas pobierania danych.';
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const url = error.config?.url;
      message += status ? ` (status: ${status})` : '';
      if (url) message += `\nURL: ${url}`;
    }

    return (
      <>
        <TextField
          label="Product id"
          variant="outlined"
          value={filterId}
          onChange={handleChangeFilterId}
          type="text"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />
        <Box mt={2}>
          <Alert severity="error">{message}</Alert>
        </Box>
      </>
    );
  }

  if (!products) return null;

  return (
    <>
      <TextField
        label="Product id"
        variant="outlined"
        value={filterId}
        onChange={handleChangeFilterId}
        type="text"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
      <ProductTable products={products.data}/>
    </>
  );
}