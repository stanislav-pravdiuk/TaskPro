import styled from 'styled-components';
import { Field } from 'formik';

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
  margin-bottom: 4px;
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

export const RadioButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
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
  position: relative;
  width: 14px;
  height: 14px;
  margin: 0;

  input[type='radio']:checked + & {
    border: 1px solid red;
  }

  input[type='radio']:checked + ${Dot} {
    scale: 0.5;
  }
`;

export const RadioButton = styled(Field)`
  position: absolute;
  appearance: none;
  z-index: 5;
  top: 0;
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

export const DeadlineBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
