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

export const CloseButton = styled.button`
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

export const ColorOptionLabel = styled.label`
  cursor: pointer;
  display: inline-block;

  &:not(:last-child) {
    margin-bottom: 12px;
  }
  font-size: 14px;

  input[type='radio'] {
    display: none;
  }

  &:hover {
    opacity: 0.7;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 8px;
    vertical-align: middle;
    background-color: transparent;
    border: 2px solid transparent;
  }

  &.blue::before {
    background-color: var(--color-blue);
  }

  &.red::before {
    background-color: var(--color-pink);
  }

  &.green::before {
    background-color: var(--color-green);
  }

  &.gray::before {
    background-color: var(--color-dark);
  }

  &:active::before {
    border-color: var(--color-white);
  }
`;
