import { BoardName, Container } from './HeaderDashboard.styled';
import { BtnFilter } from 'components/buttons/buttons';

const HeaderDashboard = ({ boardName }) => {

    const stroke = '#161616'

    return (
        <Container>
            <BoardName>{boardName}</BoardName>
            <BtnFilter color={stroke} />
        </Container>
    );
};

export default HeaderDashboard;