import { useState, useEffect } from 'react';
import Modal from '@mui/joy/Modal';

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
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      <div>{children}</div>
    </Modal>
  );
};

export default MainModal;
