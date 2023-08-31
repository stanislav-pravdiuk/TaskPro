import { useState, useEffect } from 'react';
import Modal from '@mui/joy/Modal';
import { fabClasses } from '@mui/material';

const MainModal = ({ modalIsOpen, closeModal, children }) => {
  const [open, setOpen] = useState(fabClasses);

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
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {children}
    </Modal>
  );
};

export default MainModal;
