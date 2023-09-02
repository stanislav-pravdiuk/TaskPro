import Filters from 'components/filters/Filters';
import { BoardName, Container, Thumb } from './HeaderDashboard.styled';
import { BtnFilter } from 'components/buttons/buttons';
import { useState } from 'react';

const HeaderDashboard = ({ boardName }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const stroke = '#161616';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <BoardName>{boardName}</BoardName>
      <Thumb>
        <BtnFilter color={stroke} onClick={toggleMenu}></BtnFilter>
        {isMenuOpen && <Filters onClick={toggleMenu} />}
      </Thumb>
    </Container>
  );
};

export default HeaderDashboard;
