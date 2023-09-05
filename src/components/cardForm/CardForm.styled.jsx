import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

export const FormContainer = styled.div`
  position: relative;
  background: ${props => {
    return props.theme.palette.background.paper;
  }};
  color: ${props => {
    return props.theme.palette.text.secondary;
  }};
  width: 100vw;
  max-width: 350px;
  padding: 24px;
  border-radius: 8px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-family: Poppins;
  font-size: 18px;
`;

export const Container = styled.div`
  line-height: 0;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 0;
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: 15px;
  padding-left: 14px;
  margin: 0;
  color: var(--color-pastel);
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  bottom: -7px;
  padding-left: 14px;
  margin: 0;
  color: var(--color-pastel);
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const Input = styled.input`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid
    ${props => {
      return props.theme.palette.text.hint;
    }};
  background-color: inherit;
  color: ${props => {
    return props.theme.palette.text.primary;
  }};
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
  border: 1px solid
    ${props => {
      return props.theme.palette.text.hint;
    }};
  background-color: inherit;
  color: ${props => {
    return props.theme.palette.text.primary;
  }};
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
  color: inherit;
`;

export const Text = styled.p`
  font-family: Poppins;
  font-size: 14px;
  color: ${props => {
    return props.theme.palette.text.hint;
  }};
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
    background-color: rgba(128, 128, 128, 0.7);
  }
`;

export const ColorOptionLabel = styled.label`
  position: relative;
  width: 14px;
  height: 14px;
  margin: 0;

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
    border: 1px solid rgba(128, 128, 128, 0.7);
  }
`;

export const DeadlineBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;
