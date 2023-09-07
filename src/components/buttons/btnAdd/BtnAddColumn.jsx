import icon from '../../iconSvg/icons.svg';
import {
  ContainerColumn,
  PlusIconColumn,
  TitleButtonColumn,
} from './BtnAdd.styled';
import {
  ButtonPlusColumn,
} from 'components/buttons/Buttons.styled';
import { useTheme } from '@mui/material';

const BtnAddColumn = ({ data, btnTitle, btnColor, onClick }) => {

  const theme = useTheme();

  return (
    <ContainerColumn theme={theme} onClick={onClick}>
      <ButtonPlusColumn theme={theme}>
        <PlusIconColumn theme={theme}>
          <use href={icon + '#icon-plus-1'}></use>
        </PlusIconColumn>
      </ButtonPlusColumn>
      <TitleButtonColumn theme={theme}>{btnTitle}</TitleButtonColumn>
    </ContainerColumn>
  );
};

export default BtnAddColumn;
