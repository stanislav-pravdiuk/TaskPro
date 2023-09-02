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
  IconButton,
  MenuMUI,
  MenuItemMUI,
} from './Card.styled';
import icon from '../../iconSvg/icon.svg';
import {
  useReplaceCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} from 'redux/boards/boardsApi';
import EllipsisText from 'react-ellipsis-text';

import MainModal from 'components/MainModal/MainModal';
import CardForm from 'components/cardForm/CardForm';
import { useParams } from 'react-router-dom';
import MenuButton from '@mui/joy/MenuButton';
import Dropdown from '@mui/joy/Dropdown';

const Card = ({ title, text, priority, deadline, card, boardId, columns }) => {
  const [openCardModal, setOpenCardModal] = useState(false);

  const [replaceCard] = useReplaceCardMutation();
  const [updateCard] = useUpdateCardMutation();
  const [deleteCard] = useDeleteCardMutation();

  const { boardName } = useParams();

  const closeCardModal = () => {
    setOpenCardModal(false);
  };

  const replaceCardHandler = newOwner => {
    const data = {
      owner: card.owner,
      _id: card._id,
      newOwner,
    };

    const boardId = boardName;

    replaceCard({ boardId, data });
  };

  const updateCardHandler = value => {
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

  const cardPriorityChecker = priority => {
    let cardBordredColor = null;

    switch (priority) {
      case 'low':
        cardBordredColor = '#8FA1D0';
        break;
      case 'medium':
        cardBordredColor = '#E09CB5';
        break;
      case 'high':
        cardBordredColor = '#BEDBB0';
        break;

      default:
        cardBordredColor = 'rgba(22, 22, 22, 0.30)';
    }

    return cardBordredColor;
  };

  return (
    <Container
      style={{ borderLeft: `4px solid ${cardPriorityChecker(priority)}` }}
    >
      <Title>{title}</Title>
      <Description>
        <EllipsisText text={text} length={'80'} />
      </Description>
      <BottomBar>
        <OptionsBox>
          <Options>
            <TextOptions>Priority</TextOptions>
            <PriorityBox>
              <Elipce
                style={{ backgroundColor: `${cardPriorityChecker(priority)}` }}
              ></Elipce>
              <Text>{priority}</Text>
            </PriorityBox>
          </Options>
          <Options>
            <TextOptions>Deadline</TextOptions>
            <Text>{deadline}</Text>
          </Options>
        </OptionsBox>
        <IconsBox>
          <Dropdown>
            <MenuButton
              size="sx"
              sx={{
                border: 'none',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
                '&:focus': {
                  outline: '2px solid #000000',
                },
              }}
            >
              <TransferRight>
                <use href={icon + '#icon-arrow-circle-broken-right'}></use>
              </TransferRight>
              <MenuMUI>
                {columns.map(columm => {
                  const currentColumn = columm._id === card.owner;

                  return (
                    <MenuItemMUI
                      key={columm._id + '1'}
                      onClick={() => replaceCardHandler(columm._id)}
                      disabled={currentColumn}
                      sx={{
                        color: currentColumn ? '#bedbb0' : '#16161680',
                        stroke: currentColumn ? '#bedbb0' : '#16161680',
                      }}
                    >
                      {columm.title}
                      <TransferRight>
                        <use
                          href={icon + '#icon-arrow-circle-broken-right'}
                        ></use>
                      </TransferRight>
                    </MenuItemMUI>
                  );
                })}
              </MenuMUI>
            </MenuButton>
          </Dropdown>
          <IconButton type="button" onClick={() => setOpenCardModal(true)}>
            <Edit>
              <use href={icon + '#icon-pencil-01'}></use>
            </Edit>
          </IconButton>
          <IconButton
            type="button"
            onClick={() => deleteCardHandler(boardId, card)}
          >
            <Delete>
              <use href={icon + '#icon-trash-04'}></use>
            </Delete>
          </IconButton>
        </IconsBox>
      </BottomBar>

      <MainModal modalIsOpen={openCardModal} closeModal={closeCardModal}>
        <CardForm
          formTitle={'Edit card'}
          btnText={'Edit'}
          title={card.title}
          text={card.text}
          priority={card.priority}
          deadline={card.deadline}
          onSubmit={updateCardHandler}
        />
      </MainModal>
    </Container>
  );
};

export default Card;
