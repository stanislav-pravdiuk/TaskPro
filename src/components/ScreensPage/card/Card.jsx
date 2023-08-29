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
  Delete,
} from './Card.styled';
import icon from '../../iconSvg/icon.svg';

const Card = ({ title, text, priority, deadline }) => {
  const colorPriority = '#8FA1D0';

  return (
    <Container style={{ borderLeft: `4px solid ${colorPriority}` }}>
      <Title>{title}</Title>
      <Description>{text}</Description>
      <BottomBar>
        <Options>
          <TextOptions>Priority</TextOptions>
          <PriorityBox>
            <Elipce style={{ backgroundColor: colorPriority }}></Elipce>
            <Text>{priority}</Text>
          </PriorityBox>
        </Options>
        <Options>
          <TextOptions>Deadline</TextOptions>
          <Text>{deadline}</Text>
        </Options>
        <IconsBox>
          <TransferRight>
            <button type="button">
              <use href={icon + '#icon-arrow-circle-broken-right'}></use>
            </button>
          </TransferRight>
          <Edit>
            <button type="button">
              <use href={icon + '#icon-pencil-01'}></use>
            </button>
          </Edit>
          <Delete>
            <button type="button">
              <use href={icon + '#icon-trash-04'}></use>
            </button>
          </Delete>
        </IconsBox>
      </BottomBar>
    </Container>
  );
};

export default Card;
