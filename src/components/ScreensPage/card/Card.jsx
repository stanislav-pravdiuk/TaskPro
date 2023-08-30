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

const Card = ({ title, text, priority, deadline }) => {
  const colorPriority = '#8FA1D0';

  const [replaceCard] = useReplaceCardMutation();
  const [updateCard] = useUpdateCardMutation();
  const [deleteCard] = useDeleteCardMutation();

  const replaceCardHandler = () => {
    const data = {
      owner: '64ee0546879ad176a9c27e8f',
      _id: '64ee056a879ad176a9c27ea4',
      newOwner: '64eece1643dec532f6e1fb63',
    };

    const boardId = '64ee053b879ad176a9c27e83';

    replaceCard({ boardId, data });
  };

  const updateCardHandler = () => {
    const data = {
      owner: '64ee0546879ad176a9c27e8f',
      _id: '64eece1c43dec532f6e1fb9e',
      title: 'NewCardName2',
    };

    const boardId = '64ee053b879ad176a9c27e83';

    updateCard({ boardId, data });
  };

  const deleteCardHandler = () => {
    const data = {
      owner: '64ee0546879ad176a9c27e8f',
      _id: '64eece1c43dec532f6e1fb9e',
      title: 'NewCardName',
    };

    const boardId = '64ee053b879ad176a9c27e83';

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
          <button type="button" onClick={updateCardHandler}>
            <Edit>
              <use href={icon + '#icon-pencil-01'}></use>
            </Edit>
          </button>
          <button type="button" onClick={deleteCardHandler}>
            <Delete>
              <use href={icon + '#icon-trash-04'}></use>
            </Delete>
          </button>
        </IconsBox>
      </BottomBar>
    </Container>
  );
};

export default Card;
