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
  OptionsBox,
} from './Card.styled';
import icon from '../../iconSvg/icon.svg';

const Card = ({ title, text, priority, deadline }) => {
  const colorPriority = '#8FA1D0';

  return (
    <Container style={{ borderLeft: `4px solid ${colorPriority}` }}>
      <Title>{title}</Title>
      <Description>{text}</Description>
      <BottomBar>
        <OptionsBox>
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
        </OptionsBox>
        <IconsBox>
          <button type="button">
            <TransferRight>
              <use href={icon + '#icon-arrow-circle-broken-right'}></use>
            </TransferRight>
          </button>
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
      </BottomBar>
    </Container>
  );
};

export default Card;
