import { Container, PlusIcon, TitleButton } from "./BtnAdd.styled";
import { ButtonPlus } from "components/buttons/buttons.styled";
import icon from '../../iconSvg/icon.svg'

const BtnAdd = () => {
    return (
        <Container >
            <ButtonPlus style={{ backgroundColor: '#161616' }}>
                <PlusIcon>
                    <use href={icon + '#icon-plus-1'}></use>
                </PlusIcon>
            </ButtonPlus>
            <TitleButton>Add another card</TitleButton>
        </Container>
    );
};

export default BtnAdd;