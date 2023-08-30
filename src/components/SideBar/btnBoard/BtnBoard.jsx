import { Container, IconTitle, Title, TitleBox } from "./BtnBoard.styled";
import icon from '../../iconSvg/icon.svg'

const BtnBoard = ({title}) => {
    return (
        <Container>
            <TitleBox>
                <IconTitle>
                    <use href={icon + '#icon-Project'}></use>
                </IconTitle>
                <Title>{title}</Title>
            </TitleBox>
        </Container>
    );
};

export default BtnBoard;