import { Container, Delete, Edit, IconTitle, IconsBox, Indicator, Title, TitleBox } from "./BtnBoardActive.styled";
import icon from '../../iconSvg/icon.svg'

const BtnBoardActive = () => {

    return (
        <div style={{display: "flex"}}>
        <Container>
            <TitleBox>
                <IconTitle>
                    <use href={icon + '#icon-Project'}></use>
                </IconTitle>
                <Title>Name Board</Title>
            </TitleBox>

            <IconsBox>
                <button type="button">
                    <Edit>
                        <use href={icon + '#icon-pencil-01'}></use>
                    </Edit>
                </button>
                <button type="button">
                    <Delete>
                        <use href={icon + '#icon-trash-04'}></use>
                    </Delete>
                </button>
            </IconsBox>
        </Container>
        <Indicator />
        </div>
    );
};

export default BtnBoardActive;