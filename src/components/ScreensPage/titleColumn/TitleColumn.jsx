import { Container, Title, IconsBox, Edit, Delete } from './TitleColumn.styled';
import icon from '../../iconSvg/icon.svg';

const TitleColumn = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>

      <IconsBox>
        <button type='button'>
          <Edit>
            <use href={icon + '#icon-pencil-01'}></use>
          </Edit>
        </button>
        <button type='button'>
          <Delete>
            <use href={icon + '#icon-trash-04'}></use>
          </Delete>
        </button>
      </IconsBox>
    </Container>
  );
};

export default TitleColumn;
