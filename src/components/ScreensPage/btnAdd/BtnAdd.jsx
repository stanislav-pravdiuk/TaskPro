import { Container, PlusIcon, TitleButton } from './BtnAdd.styled';
import { ButtonPlus } from 'components/buttons/buttons.styled';
import icon from '../../iconSvg/icon.svg';

const BtnAdd = ({ data, btnTitle, btnColor, onClick, isDisabled = false }) => {
  return (
    <Container
      style={{ background: isDisabled ? 'lightgray' : `${btnColor}` }}
      onClick={onClick}
      disabled={isDisabled}
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
