import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: 0;
  transform: translateX(-70%);
  z-index: 5;
  border-radius: 8px;
  background: var(--color-cream);
  box-shadow: 0px 4px 16px 0px var(--color-opacity-black);
  padding: 24px;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const Title = styled.p`
  color: var(--color-dark);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const ResetBox = styled.div`
  display: flex;
  border-top: 1px solid var(--color-dark);
  margin-bottom: 14px;
  padding-top: 14px;
`;

export const ResetTitle = styled.p`
  margin-right: 130px;
  color: var(--color-dark);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const BtnReset = styled.button`
  color: var(--color-text-dark);
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
`;

export const Dot = styled.span`
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  border-radius: 50%;

  background-color: transparent;

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
    background-color: var(--color-light);
  }
`;

export const ColorOptionLabel = styled.label`
  cursor: pointer;
  position: relative;
  display: inline-flex;
  gap: 8px;
  justify-content: center;
  align-items: center;

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
    border: 1px solid var(--color-light);
  }
`;
