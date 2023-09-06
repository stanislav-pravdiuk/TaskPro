import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 300px;
  left: 0;
  transform: translateX(-70%);
  z-index: 5;
  border-radius: 8px;
  background-color: ${props => {
    return props.theme.palette.background.paper;
  }};
  color: ${props => {
    return props.theme.palette.text.primary;
  }};
  box-shadow: 0px 4px 16px 0px var(--color-opacity-black);
  padding: 24px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const Title = styled.p`
  color: inherit;
  font-family: 'Poppins';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TitleBox = styled.div`
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const ResetBox = styled.div`
  display: flex;
  border-top: 1px solid;
  border-color: ${props => {
    return props.theme.palette.secondary.main;
  }};
  margin-bottom: 14px;
  padding-top: 14px;
`;

export const ResetTitle = styled.p`
  display: flex;
  flex-shrink: 0;
  margin-right: auto;
  color: inherit;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const BtnReset = styled.button`
  color: ${props => {
    return props.theme.palette.text.secondary;
  }};
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
`;

export const BtnBox = styled.button`
  display: flex;
  flex-direction: column;

  color: ${props => {
    return props.theme.palette.primary.info;
  }};
`;

export const Dot = styled.span`
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;

  &.blue {
    background-color: var(--color-blue);
  }

  &.red {
    background-color: var(--color-pink);
  }

  &.green {
    background-color: var(--color-green);
  }

  &.gray {
    background-color: rgba(128, 128, 128, 0.7);
  }
`;

export const ColorOptionLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  color: ${props => {
    return props.theme.palette.primary.info;
  }};

  font-family: 'Poppins';

  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: 14px;

  &:hover {
    opacity: 0.7;
  }

  input[type='radio']:checked + ${Dot} {
    scale: 0.5;
  }
`;

export const RadioButton = styled.input`
  position: absolute;
  appearance: none;
  z-index: 5;
  top: 4px;
  left: 0;
  border-radius: 50%;
  margin: 0;

  width: 14px;
  height: 14px;

  cursor: pointer;

  &:checked.blue {
    border: 1px solid var(--color-blue);
  }

  &:checked.red {
    border: 1px solid var(--color-pink);
  }

  &:checked.green {
    border: 1px solid var(--color-green);
  }

  &:checked.gray {
    border: 1px solid rgba(128, 128, 128, 0.7);
  }
`;
