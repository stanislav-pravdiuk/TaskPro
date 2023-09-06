import { useState } from 'react';
import { Container, Link, TextBox } from './StartBoard.styled';
import { useTheme } from '@mui/material';
import { useAddBoardMutation } from 'redux/boards/boardsApi';
import MainModal from 'components/MainModal/MainModal';
import NewBoardForm from 'components/newBoardForm/NewBoardForm';
import TeamGallery from 'components/teamGallery/TeamGallery';

const StartBoard = () => {
  const [openModal, setOpenModal] = useState(false);

  const [addBoard] = useAddBoardMutation();

  const closeModal = () => {
    setOpenModal(false);
  };

  const handleSubmit = data => {
    addBoard({ data });
    closeModal();
  };

  const theme = useTheme();
  return (
    <Container>
      <TextBox theme={theme}>
        Before starting your project, it is essential
        <Link theme={theme} onClick={() => setOpenModal(true)}>
          to create a board
        </Link>
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </TextBox> <TeamGallery />
      <MainModal modalIsOpen={openModal} closeModal={closeModal}>
        <NewBoardForm
          formTitle={'New board'}
          btnText={'Create'}
          handleSubmit={handleSubmit}
          closeModal={closeModal}
        ></NewBoardForm>
      </MainModal>
    </Container>
  );
};

export default StartBoard;
