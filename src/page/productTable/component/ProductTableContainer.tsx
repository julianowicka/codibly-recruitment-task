import React, {useState} from "react";
import {useQuery} from "react-query";
import {ProductTable} from "./ProductTable";
import {fetchProducts} from "../util/fetchProducts";
import {TextField, Alert, CircularProgress, Box, Button, Typography} from "@mui/material";
import axios from "axios";

export const ProductTableContainer: React.FC = () => {
  const [filterId, setFilterId] = useState("");
  const [page, setPage] = useState(1);

  const {data: products, isLoading, isError, error} = useQuery(
    ['products', filterId, page],
    () => fetchProducts(filterId, page),
    { retry: 0, keepPreviousData: true }
  );

  const handleChangeFilterId = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const raw = event.target.value;
    const digitsOnly = raw.replace(/\D/g, '');
    setFilterId(digitsOnly);
    setPage(1); // Reset to first page when filtering
  }

  const handlePrevPage = () => {
    setPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    if (products && page < products.total_pages) {
      setPage(prev => prev + 1);
    }
  };

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

  const showPagination = !filterId && products.total_pages > 1;

  return (
    <Box>
      <TextField
        label="Product id"
        variant="outlined"
        value={filterId}
        onChange={handleChangeFilterId}
        type="text"
        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      />
      <Box mt={2}>
        <ProductTable products={products.data}/>
      </Box>
      {showPagination && (
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Button 
            onClick={handlePrevPage} 
            disabled={page === 1}
            variant="outlined"
          >
            Previous
          </Button>
          <Typography>
            Page {page} of {products.total_pages}
          </Typography>
          <Button 
            onClick={handleNextPage} 
            disabled={page >= products.total_pages}
            variant="outlined"
          >
            Next
          </Button>
        </Box>
      )}
    </Box>
  );
}