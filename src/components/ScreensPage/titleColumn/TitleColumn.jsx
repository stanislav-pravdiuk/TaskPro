import {
  Container,
  Title,
  IconsBox,
  IconsButton,
  Icon,
} from './TitleColumn.styled';
import icon from '../../iconSvg/icon.svg';
import { useState } from 'react';
import {
  useUpdateColumnMutation,
  useDeleteColumnMutation,
} from 'redux/boards/boardsApi';

import MainModal from 'components/MainModal/MainModal';
import ColumnForm from 'components/columnCard/ColumnCard';
import { useTheme } from '@mui/material';

const TitleColumn = ({ title, owner, columnId }) => {
  const [open, setOpen] = useState(false);

  const [updateColumn] = useUpdateColumnMutation();
  const [deleteColumn] = useDeleteColumnMutation();

  const theme = useTheme();

  const closeModal = () => {
    setOpen(false);
  };

  const updateColumnHandler = value => {
    const data = {
      _id: columnId,
      owner,
      title: value.title,
    };

    updateColumn({ data });
    closeModal();
  };

  const deleteColumnHandler = (owner, columnId) => {
    const data = {
      _id: columnId,
      owner,
    };

    deleteColumn({ data });
  };

  return (
    <Container theme={theme}>
      <Title>{title}</Title>

      <IconsBox>
        <IconsButton type="button" onClick={() => setOpen(true)}>
          <Icon>
            <use href={icon + '#icon-pencil-01'}></use>
          </Icon>
        </IconsButton>
        <IconsButton
          type="button"
          onClick={() => deleteColumnHandler(owner, columnId)}
        >
          <Icon>
            <use href={icon + '#icon-trash-04'}></use>
          </Icon>
        </IconsButton>
        <MainModal modalIsOpen={open} closeModal={closeModal}>
          <ColumnForm
            formTitle={'Edit column'}
            btnText={'Edit'}
            onSubmit={updateColumnHandler}
            columnTitle={title}
            closeModal={closeModal}
          />
        </MainModal>
      </IconsBox>
    </Container>
  );
};

export default TitleColumn;
