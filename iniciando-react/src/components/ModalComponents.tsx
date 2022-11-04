import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Form from './Form';
import Title from './Title';
import ButtonVariant from './Button';

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
}

export default function ModalComponents(props: ModalProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {
        props.tipo === "login" ? (
          <div>
            <ButtonVariant onClick={handleOpen} variant='contained' text="Login" />
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
                <Form tipo='login' />
              </Box>
            </Modal>
          </div>
        )
          : props.tipo === "cadastro" ? (
            <div>
              <ButtonVariant onClick={handleOpen} variant='contained' text="Cadastro" />
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Box marginBottom="2rem" display="flex" justifyContent="center">
                    <Title color="#003249" text="Crie sua conta" />
                  </Box>
                  <Form tipo='cadastro' />
                </Box>
              </Modal>
            </div>
          )
            : null
      }
    </>
  );
}