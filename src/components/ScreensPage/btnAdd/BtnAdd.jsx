import { Container, PlusIcon, TitleButton } from './BtnAdd.styled';
import { ButtonPlus } from 'components/buttons/buttons.styled';
import icon from '../../iconSvg/icon.svg';

const BtnAdd = ({ data, btnTitle, btnColor, onClick }) => {

  return (
    <Container
      style={{ background: `${btnColor}` }}
      onClick={onClick}
    >
      <ButtonPlus style={{ backgroundColor: '#161616' }}>
        <PlusIcon>
          <use href={icon + '#icon-plus-1'}></use>
        </PlusIcon>
      </ButtonPlus>
      <TitleButton>{btnTitle}</TitleButton>
    </Container>
  );
};

export default BtnAdd;
