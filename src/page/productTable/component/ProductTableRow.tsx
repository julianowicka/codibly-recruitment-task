import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {ProductModel} from "../model/ProductModel";
import {ProductDetailsModal} from "./ProductDetailsModal";

interface Props {
  product: ProductModel
}
export const ProductTableRow: React.FC<Props> = (props) =>{
const {product} = props;
  return(<>
      <TableRow
        sx={{backgroundColor: product.color}}
      >
        <TableCell>
          <ProductDetailsModal product={product}/>
          {product.id}
        </TableCell>
        <TableCell>{product.name}</TableCell>
        <TableCell>{product.year}</TableCell>
      </TableRow>
    </>
  );
}