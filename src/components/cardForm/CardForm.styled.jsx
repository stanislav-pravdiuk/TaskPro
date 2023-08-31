import styled from 'styled-components';

export const FormContainer = styled.div`
  position: relative;
  background-color: #fcfcfc;
  max-width: 350px;
  padding: 24px;
  border-radius: 8px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-family: Poppins;
  font-size: 18px;
  color: #161616;
`;

export const Input = styled.input`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  margin-top: 24px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  background-color: #fcfcfc;
  color: #161616;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;
`;

export const Textarea = styled.textarea`
  resize: none;
  padding: 14px 18px;
  width: 100%;
  height: 154px;
  margin-top: 14px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  background-color: #fcfcfc;
  color: #161616;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;
`;

export const Subtitle = styled.h3`
  margin: 0;
  margin-top: 14px;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  color: #16161680;
`;

export const Text = styled.p`
  margin-top: 4px;
  margin-bottom: 40px;
  font-family: Poppins;
  font-size: 14px;
  color: #bedbb0;
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
    background-color: #8fa1d0;
  }

  &.red::before {
    background-color: #e09cb5;
  }

  &.green::before {
    background-color: #bedbb0;
  }

  &.gray::before {
    background-color: #1616164d;
  }

  &:active::before {
    border-color: #ffffff;
  }
`;
