import { BtnCloseBlack } from 'components/buttons/buttons';
import {
  BtnBox,
  BtnReset,
  ColorOptionLabel,
  ResetBox,
  ResetTitle,
  Title,
  TitleBox,
  Container,
  CloseButton,
} from './Filters.styled';

function Filters({ onClick, onChange }) {
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
          <label>
            <input
              type="radio"
              name="priority"
              value="without"
              onClick={() => onChange('without')}
            />
            Without priority
          </label>
        </ColorOptionLabel>
        <ColorOptionLabel className="blue">
          <label>
            <input
              type="radio"
              name="priority"
              value="low"
              onClick={() => onChange('low')}
            />
            Low
          </label>
        </ColorOptionLabel>
        <ColorOptionLabel className="red">
          <label>
            <input
              type="radio"
              name="priority"
              value="medium"
              onClick={() => onChange('medium')}
            />
            Medium
          </label>
        </ColorOptionLabel>
        <ColorOptionLabel className="green">
          <label>
            <input
              type="radio"
              name="priority"
              value="high"
              onClick={() => onChange('high')}
            />
            High
          </label>
        </ColorOptionLabel>
      </BtnBox>
    </Container>
  );
}

export default Filters;
