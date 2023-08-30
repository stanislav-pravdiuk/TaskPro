import { BoardName, Container } from './HeaderDashboard.styled';
import { BtnFilter } from 'components/buttons/buttons';

const HeaderDashboard = ({ boardName }) => {
    return (
        <Container>
            <BoardName>{boardName}</BoardName>            
            <BtnFilter />
        </Container>
    );
};

export default HeaderDashboard;