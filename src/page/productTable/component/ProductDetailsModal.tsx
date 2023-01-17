import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {ProductModel} from "../model/ProductModel";
import {capitalizeFirstLetter} from "../util/capitalizeFirstLetter";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface Props {
  product: ProductModel
}

export const ProductDetailsModal: React.FC<Props> = (props) => {
  const {product} = props;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{position: 'relative'}}>
      <Button sx={{position: 'absolute', width: 'calc(100vw - 16px)', height: '52px', left: '-16px', top: '-18px'}}
              onClick={handleOpen}/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {capitalizeFirstLetter(product.name)}
          </Typography>
          <Typography id="modal-modal-description" sx={{mt: 2}}>

            <ul>
              <li>id: {product.id}</li>
              <li>color: {product.color}</li>
              <li>pantone value: {product.pantone_value}</li>
              <li>year: {product.year}</li>
            </ul>


          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}
