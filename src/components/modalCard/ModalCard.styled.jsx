import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: relative;
  background-color: #151515;
  width: 355px;
  height: 522px;
  padding: 24px;
  border-radius: 8px;
  border: 1px solid #bedbb080;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-family: Poppins;
  font-size: 18px;
  color: #ffffff;
`;

export const Input = styled.input`
  padding: 14px 18px;
  width: 302px;
  height: 49px;
  margin-top: 24px;
  border-radius: 8px;
  border: 1px solid #bedbb080;
  background-color: #1f1f1f;
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;

  &:first-of-type {
    margin-top: 24px;
    height: 49px;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  padding: 14px 18px;
  width: 302px;
  height: 154px;
  margin-top: 14px;
  border-radius: 8px;
  border: 1px solid #bedbb080;
  background-color: #1f1f1f;
  color: #ffffff;
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
  color: #ffffff;
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
    background-color: #ffffff4d;
  }

  &:active::before {
    border-color: #ffffff;
  }
`;

export const StyledDatePicker = styled(DatePicker)`
  //   width: 233px;
  //   height: 254px;
  //   padding: 12px;
  //   font-family: Poppins;
  //   font-size: 16px;
  //   border: 1px solid #bedbb0;
  //   border-radius: 8px;
  //   background-color: #1f1f1f;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
`;
