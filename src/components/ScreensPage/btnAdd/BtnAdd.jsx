import { Container, PlusIcon, TitleButton } from './BtnAdd.styled';
import { ButtonPlus } from 'components/buttons/buttons.styled';
import icon from '../../iconSvg/icon.svg';
import { useAddCardMutation } from 'redux/boards/boardsApi';

const BtnAdd = ({ data }) => {
  const [addCard] = useAddCardMutation();

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
    <Container onClick={addCardInColumn}>
      <ButtonPlus style={{ backgroundColor: '#161616' }}>
        <PlusIcon>
          <use href={icon + '#icon-plus-1'}></use>
        </PlusIcon>
      </ButtonPlus>
      <TitleButton>Add another card</TitleButton>
    </Container>
  );
};

export default BtnAdd;
