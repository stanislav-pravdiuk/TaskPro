import { useState } from 'react';
import { Button, Modal, ModalClose, Sheet, Typography } from '@mui/joy';
import NewBoardForm from './NewBoardForm';

const ModalComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.surface',
            }}
          />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontWeight="lg"
            mb={1}
          ></Typography>
          <Typography id="modal-desc" textColor="text.tertiary">
            <NewBoardForm />
          </Typography>
        </Sheet>
      </Modal>
    </>
  );
};

export default ModalComponent;

//  <Title>New board</Title>;
