import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {ProductModel} from "../model/ProductModel";

interface Props {
  product: ProductModel
}
export const ProductTableRow: React.FC<Props> = (props) =>{
const {product} = props;
  return(
    <TableRow
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {product.id}
      </TableCell>
      <TableCell>{product.name}</TableCell>
      <TableCell>{product.year}</TableCell>
    </TableRow>
  );
}