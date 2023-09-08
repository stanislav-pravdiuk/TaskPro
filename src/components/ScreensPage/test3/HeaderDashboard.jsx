import Filters from 'components/filters/Filters';
import { BoardName, Container, Thumb } from './HeaderDashboard.styled';
import { BtnFilter } from '../../buttons/buttons'
import { useState } from 'react';
import { useBoardFilterMutation } from 'redux/boards/boardsApi';
import { useParams } from 'react-router-dom';
import { useTheme } from '@mui/material';

const HeaderDashboard = ({ boardName, filterValue }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const stroke = '#161616';

  const [boardFilter] = useBoardFilterMutation();

  const theme = useTheme();

  const { boardName: boardId } = useParams();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const boardFilterHandler = priotity => {
    boardFilter({ boardId, priotity });
  };

  return (
    <Container>
      <BoardName theme={theme}>{boardName}</BoardName>
      <Thumb>
        <BtnFilter color={stroke} onClick={toggleMenu}></BtnFilter>
        {isMenuOpen && (
          <Filters
            onClick={toggleMenu}
            onChange={boardFilterHandler}
            filterValue={filterValue}
          />
        )}
      </Thumb>
    </Container>
  );
};

export default HeaderDashboard;
