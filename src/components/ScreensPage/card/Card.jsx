import { useState } from 'react';
import {
  Container,
  Description,
  Title,
  BottomBar,
  Options,
  Elipce,
  PriorityBox,
  TextOptions,
  Text,
  IconsBox,
  TransferRight,
  Edit,
  Delete,
  OptionsBox,
} from './Card.styled';
import icon from '../../iconSvg/icon.svg';

import {
  useReplaceCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} from 'redux/boards/boardsApi';

import MainModal from 'components/MainModal/MainModal';
import CardForm from 'components/cardForm/CardForm';
import { useParams } from 'react-router-dom';

const Card = ({ title, text, priority, deadline, card, boardId }) => {
  const colorPriority = '#8FA1D0';
  const [openCardModal, setOpenCardModal] = useState(false);

  const [replaceCard] = useReplaceCardMutation();
  const [updateCard] = useUpdateCardMutation();
  const [deleteCard] = useDeleteCardMutation();

  const { boardName } = useParams();

  const closeCardModal = () => {
    setOpenCardModal(false);
  };

  const replaceCardHandler = () => {
    const data = {
      owner: '64ee0546879ad176a9c27e8f',
      _id: '64ee056a879ad176a9c27ea4',
      newOwner: '64eece1643dec532f6e1fb63',
    };

    const boardId = '64ee053b879ad176a9c27e83';

    replaceCard({ boardId, data });
  };

  const updateCardHandler = value => {
    console.log(value.deadline);
    const data = {
      ...value,
      owner: card.owner,
      _id: card._id,
    };

    const boardId = boardName;

    updateCard({ boardId, data });
    closeCardModal();
  };

  const deleteCardHandler = (boardId, card) => {
    const data = {
      owner: card.owner,
      _id: card._id,
    };

    deleteCard({ boardId, data });
  };

  return (
    <Container style={{ borderLeft: `4px solid ${colorPriority}` }}>
      <Title>{title}</Title>
      <Description>{text}</Description>
      <BottomBar>
        <OptionsBox>
          <Options>
            <TextOptions>Priority</TextOptions>
            <PriorityBox>
              <Elipce style={{ backgroundColor: colorPriority }}></Elipce>
              <Text>{priority}</Text>
            </PriorityBox>
          </Options>
          <Options>
            <TextOptions>Deadline</TextOptions>
            <Text>{deadline}</Text>
          </Options>
        </OptionsBox>
        <IconsBox>
          <button type="button" onClick={replaceCardHandler}>
            <TransferRight>
              <use href={icon + '#icon-arrow-circle-broken-right'}></use>
            </TransferRight>
          </button>
          <button type="button" onClick={() => setOpenCardModal(true)}>
            <Edit>
              <use href={icon + '#icon-pencil-01'}></use>
            </Edit>
          </button>
          <button
            type="button"
            onClick={() => deleteCardHandler(boardId, card)}
          >
            <Delete>
              <use href={icon + '#icon-trash-04'}></use>
            </Delete>
          </button>
        </IconsBox>
      </BottomBar>
      <MainModal modalIsOpen={openCardModal} closeModal={closeCardModal}>
        <CardForm
          formTitle={'Add card'}
          btnText={'Add'}
          onSubmit={updateCardHandler}
        />
      </MainModal>
    </Container>
  );
};

export default Card;
