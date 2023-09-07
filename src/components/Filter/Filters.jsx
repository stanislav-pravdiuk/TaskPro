import { BtnCloseBlack } from 'components/buttons/Buttons';
import {
  BtnBox,
  BtnReset,
  ColorOptionLabel,
  RadioButton,
  ResetBox,
  ResetTitle,
  Title,
  TitleBox,
  Container,
  CloseButton,
  Dot,
} from './Filters.styled';
import { useTheme } from '@mui/material';

function Filters({ onClick, onChange, filterValue }) {
  const theme = useTheme();

  return (
    <Container theme={theme}>
      <TitleBox>
        <Title>Filters</Title>
        <CloseButton type="button" onClick={onClick}>
          <BtnCloseBlack />
        </CloseButton>
      </TitleBox>
      <ResetBox theme={theme}>
        <ResetTitle>Lable color</ResetTitle>
        <BtnReset
          theme={theme}
          type="button"
          onClick={() => onChange('default')}
        >
          Show all
        </BtnReset>
      </ResetBox>
      <BtnBox theme={theme}>
        <ColorOptionLabel theme={theme} className="gray">
          <RadioButton
            type="radio"
            name="priority"
            value="without"
            checked={filterValue === 'without'}
            onChange={() => onChange('without')}
            className="gray"
          />
          <Dot className="gray"></Dot>
          Without priority
        </ColorOptionLabel>
        <ColorOptionLabel theme={theme} className="blue">
          <RadioButton
            type="radio"
            name="priority"
            value="low"
            checked={filterValue === 'low'}
            onChange={() => onChange('low')}
            className="blue"
          />
          <Dot className="blue"></Dot>
          Low
        </ColorOptionLabel>
        <ColorOptionLabel theme={theme} className="red">
          <RadioButton
            type="radio"
            name="priority"
            value="medium"
            checked={filterValue === 'medium'}
            onChange={() => onChange('medium')}
            className="red"
          />
          <Dot className="red"></Dot>
          Medium
        </ColorOptionLabel>
        <ColorOptionLabel theme={theme} className="green">
          <RadioButton
            type="radio"
            name="priority"
            value="high"
            checked={filterValue === 'high'}
            onChange={() => onChange('high')}
            className="green"
          />
          <Dot className="green"></Dot>
          High
        </ColorOptionLabel>
      </BtnBox>
    </Container>
  );
}

export default Filters;
