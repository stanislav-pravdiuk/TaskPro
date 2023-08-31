import { Container, Title, IconsBox, Icon } from './TitleColumn.styled';
import icon from '../../iconSvg/icon.svg';

import {
  useUpdateColumnMutation,
  useDeleteColumnMutation,
} from 'redux/boards/boardsApi';

const TitleColumn = ({ title, owner, columnId }) => {
  const [updateColumn] = useUpdateColumnMutation();
  const [deleteColumn] = useDeleteColumnMutation();

  const updateColumnHandler = () => {
    const data = {
      _id: '64ee346e4037699a79667c06',
      owner: '64ee053b879ad176a9c27e83',
      title: 'NewColumnName2',
    };

    updateColumn({ data });
  };

  const deleteColumnHandler = (owner, columnId) => {
    const data = {
      _id: columnId,
      owner,
    };

    deleteColumn({ data });
  };

  return (
    <Container>
      <Title>{title}</Title>

      <IconsBox>
        <button type="button" onClick={updateColumnHandler}>
          <Icon>
            <use href={icon + '#icon-pencil-01'}></use>
          </Icon>
        </button>
        <button
          type="button"
          onClick={() => deleteColumnHandler(owner, columnId)}
        >
          <Icon>
            <use href={icon + '#icon-trash-04'}></use>
          </Icon>
        </button>
      </IconsBox>
    </Container>
  );
};

export default TitleColumn;
