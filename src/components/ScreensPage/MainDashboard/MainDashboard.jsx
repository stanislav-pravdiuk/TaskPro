import { useState } from 'react';
import TitleColumn from '../titleColumn/TitleColumn';
import Card from '../card/Card';
import { Container, Column, GalleryCards } from './MainDashboard.styled';
import BtnAdd from '../btnAdd/BtnAdd';
import {
  useAddCardMutation,
  useAddColumnMutation,
} from 'redux/boards/boardsApi';
import MainModal from 'components/MainModal/MainModal';
import ColumnForm from 'components/columnCard/ColumnCard';
import CardForm from 'components/cardForm/CardForm';
import { useParams } from 'react-router-dom';

const MainDashboard = ({ columns }) => {
  const btnTitle = 'Add another card';
  const btnColor = '#BEDBB0';
  const btnTitle2 = 'Add another column';
  const btnColor2 = '#FFFFFF';

  const [addCard] = useAddCardMutation();
  const [addColumn] = useAddColumnMutation();

  const [openCardModal, setOpenCardModal] = useState(false);
  const [openColumnModal, setOpenColumnModal] = useState(false);
  const [columnId, setColumnId] = useState('');

  const { boardName } = useParams();

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
    <Container>
      {columns &&
        columns.map(column => {
          return (
            <Column key={column._id}>
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
                    />
                  );
                })}
              </GalleryCards>
              <BtnAdd
                onClick={() => openModalCard(column._id)}
                btnTitle={btnTitle}
                btnColor={btnColor}
              />
            </Column>
          );
        })}
      <BtnAdd
        onClick={() => setOpenColumnModal(true)}
        btnTitle={btnTitle2}
        btnColor={btnColor2}
      />

      <MainModal modalIsOpen={openColumnModal} closeModal={closeColumnModal}>
        <ColumnForm
          formTitle={'Add column'}
          btnText={'Add'}
          onSubmit={addNewColumn}
        />
      </MainModal>
      <MainModal modalIsOpen={openCardModal} closeModal={closeCardModal}>
        <CardForm
          formTitle={'Add card'}
          btnText={'Add'}
          owner={columnId}
          onSubmit={addCardInColumn}
        />
      </MainModal>
    </Container>
  );
};

export default MainDashboard;
