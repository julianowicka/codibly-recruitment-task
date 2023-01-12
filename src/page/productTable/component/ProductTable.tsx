import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ProductModel} from "../model/ProductModel";
import {ProductRow} from "./ProductRow";

interface Props {
  products: ProductModel[]
}

export const ProductTable: React.FC<Props> = ({products}) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}}>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((productElement) =>
            <ProductRow key={productElement.id} product={productElement}/>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}