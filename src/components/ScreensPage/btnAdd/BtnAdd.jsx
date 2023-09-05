import { Container, PlusIcon, TitleButton } from './BtnAdd.styled';
import { ButtonPlus } from 'components/buttons/buttons.styled';
import icon from '../../iconSvg/icon.svg';
import { useTheme } from '@mui/material';

const BtnAdd = ({ data, btnTitle, btnColor, onClick }) => {
  const theme = useTheme();

  return (
    <Container theme={theme} onClick={onClick}>
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
