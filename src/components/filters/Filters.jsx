import { BtnCloseBlack } from 'components/buttons/buttons';
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

function Filters({ onClick, onChange, filterValue }) {
  return (
    <Container>
      <TitleBox>
        <Title>Filters</Title>
        <CloseButton type="button" onClick={onClick}>
          <BtnCloseBlack />
        </CloseButton>
      </TitleBox>
      <ResetBox>
        <ResetTitle>Lable color</ResetTitle>
        <BtnReset type="button" onClick={() => onChange('default')}>
          Show all
        </BtnReset>
      </ResetBox>
      <BtnBox>
        <ColorOptionLabel className="gray">
          <RadioButton
            type="radio"
            name="priority"
            value="without"
            checked={filterValue === 'low'}
            onChange={() => onChange('without')}
            className="gray"
          />
          <Dot className="gray"></Dot>
          Without priority
        </ColorOptionLabel>
        <ColorOptionLabel className="blue">
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
        <ColorOptionLabel className="red">
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
        <ColorOptionLabel className="green">
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
