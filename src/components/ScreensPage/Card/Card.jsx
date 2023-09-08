import EllipsisText from 'react-ellipsis-text';
import Button from '@mui/material/Button';
import MainModal from '../../mainModal/MainModal';
import CardForm from 'components/forms/cardForm/CardForm';
import icon from '../../../images/icons.svg';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material';
import {
  useReplaceCardMutation,
  useUpdateCardMutation,
  useDeleteCardMutation,
} from 'redux/boards/boardsApi';
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
  IconDeadline,
} from './Card.styled';

const Card = ({ title, text, priority, deadline, card, boardId, columns }) => {
  const [openCardModal, setOpenCardModal] = useState(false);

  const [replaceCard] = useReplaceCardMutation();
  const [updateCard] = useUpdateCardMutation();
  const [deleteCard] = useDeleteCardMutation();

  const { boardName } = useParams();
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        cardBordredColor = 'rgba(128, 128, 128, 0.7)';
    }

    return cardBordredColor;
  };

  const isDeadlineToday = deadline => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    return (
      today.getFullYear() === deadlineDate.getFullYear() &&
      today.getMonth() === deadlineDate.getMonth() &&
      today.getDate() === deadlineDate.getDate()
    );
  };

  return (
    <Container
      theme={theme}
      style={{ borderLeft: `4px solid ${cardPriorityChecker(priority)}` }}
    >
      <Title theme={theme}>{title}</Title>
      <Description>
        <EllipsisText text={text} length={80} />
      </Description>
      <BottomBar theme={theme}>
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
          {isDeadlineToday(deadline) && (
            <IconDeadline theme={theme}>
              <use href={icon + '#icon-bell-01'}></use>
            </IconDeadline>
          )}
          <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            size="small"
            sx={{
              padding: 0,
              maxWidth: '16px',
              maxHeight: '16px',
              minWidth: '16px',
              minHeight: '16px',
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
          </Button>
          <MenuMUI
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {columns.map(columm => {
              const currentColumn = columm._id === card.owner;

              return (
                <MenuItemMUI
                  theme={theme}
                  key={columm._id + '1'}
                  onClick={() => replaceCardHandler(columm._id)}
                  disabled={currentColumn}
                  sx={{
                    color: currentColumn ? '#bedbb0' : 'text.secondary',
                    stroke: currentColumn ? '#bedbb0' : 'text.secondary',
                  }}
                >
                  {columm.title}
                  <TransferRight>
                    <use href={icon + '#icon-arrow-circle-broken-right'}></use>
                  </TransferRight>
                </MenuItemMUI>
              );
            })}
          </MenuMUI>

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
          closeModal={closeCardModal}
        />
      </MainModal>
    </Container>
  );
};

export default Card;