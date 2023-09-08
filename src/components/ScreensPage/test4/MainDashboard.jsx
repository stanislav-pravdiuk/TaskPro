
import TitleColumn from '../titleColumn/TitleColumn';
import Card from '../card/Card';
import MainModal from '../../mainModal/MainModal';
import ColumnForm from 'components/forms/columnForm/ColumnForm';
import CardForm from 'components/forms/cardForm/CardForm';
import BtnAdd from '../../buttons/btnAdd/BtnAdd';
import BtnAddColumn from '../../buttons/btnAdd/BtnAddColumn';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material';
import { useState } from 'react';
import {
  Container,
  ColumnsList,
  ColumnsListItem,
  Column,
  GalleryCards,
} from './MainDashboard.styled';
import {
  useAddCardMutation,
  useAddColumnMutation,
} from 'redux/boards/boardsApi';

const MainDashboard = ({ columns }) => {
  const [addCard] = useAddCardMutation();
  const [addColumn] = useAddColumnMutation();

  const [openCardModal, setOpenCardModal] = useState(false);
  const [openColumnModal, setOpenColumnModal] = useState(false);
  const [columnId, setColumnId] = useState('');

  const { boardName } = useParams();

  const theme = useTheme();

  const addCardInColumn = value => {
    const boardId = boardName;

    addCard({ boardId, data: value });
    closeCardModal();
  };

  const closeColumnModal = () => {
    setOpenColumnModal(false);
  };

  const openModalCard = columnId => {
    setColumnId(columnId);

    setOpenCardModal(true);
  };

  const closeCardModal = () => {
    setOpenCardModal(false);
  };

  const addNewColumn = value => {
    const boardId = boardName;

    addColumn({ boardId, data: value });
    closeColumnModal();
  };

  return (
    <Container theme={theme}>
      {columns && columns.length > 0 && (
        <ColumnsList>
          {columns.map(column => {
            return (
              <ColumnsListItem key={column._id}>
                <Column>
                  <TitleColumn
                    title={column.title}
                    owner={column.owner}
                    columnId={column._id}
                  />
                  <GalleryCards>
                    {column.cards.map(card => {
                      return (
                        <Card
                          key={card._id}
                          title={card.title}
                          text={card.text}
                          priority={card.priority}
                          deadline={card.deadline}
                          owner={card.ovner}
                          boardId={column.owner}
                          card={card}
                          columns={columns}
                        />
                      );
                    })}
                  </GalleryCards>
                  <BtnAdd
                    btnTitle={'Add another card'}
                    onClick={() => openModalCard(column._id)}
                  />
                </Column>
              </ColumnsListItem>
            );
          })}
        </ColumnsList>
      )}
      <BtnAddColumn
        btnTitle={'Add another column'}
        onClick={() => setOpenColumnModal(true)}
      />

      <MainModal modalIsOpen={openColumnModal} closeModal={closeColumnModal}>
        <ColumnForm
          formTitle={'Add column'}
          btnText={'Add'}
          onSubmit={addNewColumn}
          closeModal={closeColumnModal}
        />
      </MainModal>
      <MainModal modalIsOpen={openCardModal} closeModal={closeCardModal}>
        <CardForm
          formTitle={'Add card'}
          btnText={'Add'}
          owner={columnId}
          onSubmit={addCardInColumn}
          closeModal={closeCardModal}
        />
      </MainModal>
    </Container>
  );
};

export default MainDashboard;