import { Container, Title, IconsBox, Edit, Delete } from './TitleColumn.styled';
import icon from '../../iconSvg/icon.svg';

const TitleColumn = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <IconsBox>
        <Edit>
          <use href={icon + '#icon-pencil-01'}></use>
        </Edit>
        <Delete>
          <use href={icon + '#icon-trash-04'}></use>
        </Delete>
      </IconsBox>
    </Container>
  );
};

export default TitleColumn;
