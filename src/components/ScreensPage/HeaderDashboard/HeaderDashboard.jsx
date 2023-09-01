import Filters from 'components/filters/Filters';
import { BoardName, Container } from './HeaderDashboard.styled';
import { BtnFilter } from 'components/buttons/buttons';
import { useState } from 'react';

const HeaderDashboard = ({ boardName }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const stroke = '#161616'
console.log(isMenuOpen)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Container>
            <BoardName>{boardName}</BoardName>
            <BtnFilter color={stroke} onClick={toggleMenu} />
            {isMenuOpen && <Filters />}
        </Container>
    );
};

export default HeaderDashboard;