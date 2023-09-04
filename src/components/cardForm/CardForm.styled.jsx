import styled from 'styled-components';

export const FormContainer = styled.div`
  position: relative;
  background-color: var(--color-cream);
  width: 100vw;
  max-width: 350px;
  padding: 24px;
  border-radius: 8px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-family: Poppins;
  font-size: 18px;
  color: var(--color-dark);
`;

export const Input = styled.input`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--color-cream);
  color: var(--color-dark);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;

  &:focus {
    border: 1px solid var(--color-green);
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  padding: 14px 18px;
  width: 100%;
  height: 154px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--color-cream);
  color: var(--color-dark);
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;

  &:focus {
    border: 1px solid var(--color-green);
  }
`;

export const Subtitle = styled.h3`
  margin: 0;
  margin-top: 14px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  color: var(--color-dark);
`;

export const Text = styled.p`
  // margin-top: 4px;
  // margin-bottom: 40px;
  font-family: Poppins;
  font-size: 14px;
  color: var(--color-green);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const ColorOptionLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  margin-right: 8px;
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
    background-color: var( --color-light);
  }

  &:active::before {
    border-color: var(--color-white);
  }
`;
export const DeadlineBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
