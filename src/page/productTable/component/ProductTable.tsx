import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {ProductModel} from "../model/ProductModel";
import {ProductTableRow} from "./ProductTableRow";

interface Props {
  products: ProductModel[]
}

export const ProductTable: React.FC<Props> = (props) => {
  const {products} = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <ProductTableRow key={row.id} product={row}/>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
