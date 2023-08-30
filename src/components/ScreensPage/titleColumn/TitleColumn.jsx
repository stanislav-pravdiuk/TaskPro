import { Container, Title, IconsBox, Edit, Delete } from './TitleColumn.styled';
import icon from '../../iconSvg/icon.svg';

import {
  useUpdateColumnMutation,
  useDeleteColumnMutation,
} from 'redux/boards/boardsApi';

const TitleColumn = ({ title }) => {
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

  const deleteColumnHandler = () => {
    const data = {
      _id: '64ee346e4037699a79667c06',
      owner: '64ee053b879ad176a9c27e83',
    };

    deleteColumn({ data });
  };

  return (
    <Container>
      <Title>{title}</Title>

      <IconsBox>
        <button type="button" onClick={updateColumnHandler}>
          <Edit>
            <use href={icon + '#icon-pencil-01'}></use>
          </Edit>
        </button>
        <button type="button" onClick={deleteColumnHandler}>
          <Delete>
            <use href={icon + '#icon-trash-04'}></use>
          </Delete>
        </button>
      </IconsBox>
    </Container>
  );
};

export default TitleColumn;
