import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Form from './Form';
import Title from './Title';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

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
  borderRadius: '1rem'
};

type ModalProps = {
  tipo: string;
  text: string;
}

export default function ModalComponents(props: ModalProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen} variant='contained' >{props.text}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box marginBottom="2rem" display="flex" justifyContent="center">
            <Title color="#003249" text="Entre em sua conta" />
          </Box>
          <Form tipo={props.tipo} />
        </Box>
      </Modal>
    </>
  );
}