import TitleColumn from '../titleColumn/TitleColumn';
import Card from '../card/Card';
import { Container, Column, GalleryCards } from './MainDashboard.styled';
import BtnAdd from '../btnAdd/BtnAdd';
import {
  useAddCardMutation,
  useAddColumnMutation,
} from 'redux/boards/boardsApi';

const MainDashboard = ({ columns }) => {
  const btnTitle = 'Add another card';
  const btnColor = '#BEDBB0';
  const btnTitle2 = 'Add another column';
  const btnColor2 = '#FFFFFF';

  const [addCard] = useAddCardMutation();
  const [addColumn] = useAddColumnMutation();

  const addNewColumn = () => {
    const data = { title: 'NewColumn1' };

    const boardId = '64ee053b879ad176a9c27e83';

    addColumn({ boardId, data });
  };

  const addCardInColumn = card => {
    const data = {
      title: 'test2',
      text: 'Text',
      deadline: '08/29/2023',
      owner: '64ee0546879ad176a9c27e8f',
      priority: 'medium',
    };

    const boardId = '64ee053b879ad176a9c27e83';

    addCard({ boardId, data });
  };

  return (
    <Container>
      {columns &&
        columns.map(column => {
          return (
            <Column key={column._id}>
              <TitleColumn title={column.title} />
              <GalleryCards>
                {column.cards.map(card => {
                  return (
                    <Card
                      key={card._id}
                      title={card.title}
                      text={card.text}
                      priority={card.priority}
                      deadline={card.deadline}
                    />
                  );
                })}
              </GalleryCards>
              <BtnAdd
                onClick={addCardInColumn}
                btnTitle={btnTitle}
                btnColor={btnColor}
              />
            </Column>
          );
        })}
      <BtnAdd
        onClick={addNewColumn}
        btnTitle={btnTitle2}
        btnColor={btnColor2}
      />
    </Container>
  );
};

export default MainDashboard;
