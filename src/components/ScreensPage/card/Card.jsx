import {
    Container,
    Description,
    Title,
    BottomBar,
    Options,
    Elipce,
    PriorityBox,
    TextOptions,
    Text,
    IconsBox,
    TransferRight,
    Edit,
    Delete
} from "./Card.styled";
import icon from '../../iconSvg/icon.svg';

const Card = () => {

    const colorPriority='#8FA1D0'

    return (
        <Container style={{borderLeft: `4px solid ${colorPriority}`}}>
            <Title>Lorem, ipsum dolor.</Title>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est optio veritatis suscipit iure quas cupiditate.</Description>
            <BottomBar>
                <Options>
                    <TextOptions>Priority</TextOptions>
                    <PriorityBox>
                        <Elipce style={{backgroundColor:colorPriority}}></Elipce>
                        <Text>Low</Text>
                    </PriorityBox>

                </Options>
                <Options>
                    <TextOptions>Deadline</TextOptions>
                    <Text>12/05/23</Text>
                </Options>
                <IconsBox>
                    <TransferRight>
                        <use href={icon + '#icon-arrow-circle-broken-right'}></use>
                    </TransferRight>
                    <Edit>
                        <use href={icon + '#icon-pencil-01'}></use>
                    </Edit>
                    <Delete>
                        <use href={icon + '#icon-trash-04'}></use>
                    </Delete>
                </IconsBox>
            </BottomBar>
            
        </Container>
    );
};

export default Card;