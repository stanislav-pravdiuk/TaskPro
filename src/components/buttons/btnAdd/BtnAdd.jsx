import icon from '../../../images/icons.svg';
import { Container, PlusIcon, TitleButton } from './BtnAdd.styled';
import { ButtonPlus } from '../buttons.styled';
import { useTheme } from '@mui/material';

const BtnAdd = ({ data, btnTitle, btnColor, onClick, isDisabled = false }) => {
  
  const theme = useTheme();
  
  return (
    <Container theme={theme} onClick={onClick} disabled={isDisabled}>
      <ButtonPlus theme={theme}>
        <PlusIcon theme={theme}>
          <use href={icon + '#icon-plus-1'}></use>
        </PlusIcon>
      </ButtonPlus>
      <TitleButton theme={theme}>{btnTitle}</TitleButton>
    </Container>
  );
};

export default BtnAdd;