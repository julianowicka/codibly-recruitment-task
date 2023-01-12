import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {ProductModel} from "../model/ProductModel";

interface Props {
  product: ProductModel
}
export const ProductRow: React.FC<Props> = ({product}) => {
  return (
  <TableRow
    sx={{'&:last-child td, &:last-child th': {border: 0}}}
  >
    <TableCell>
      {product.id}
    </TableCell>
    <TableCell>{product.name}</TableCell>
    <TableCell>{product.year}</TableCell>
  </TableRow>
  );
};