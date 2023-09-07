import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';

const MainModal = ({ modalIsOpen, closeModal, children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [modalIsOpen]);

  return (
    <Modal
      open={open}
      onClose={closeModal}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      }}
    >
      <>{children}</>
    </Modal>
  );
};

export default MainModal;