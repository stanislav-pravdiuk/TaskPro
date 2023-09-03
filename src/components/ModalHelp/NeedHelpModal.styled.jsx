import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: #fcfcfc;
  width: 100vw;
  max-width: 400px;
  border-radius: 8px;
  gap: 24px;
  padding: 24px;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 600;
  letter-spacing: -0.36px;
`;

export const ModalForm = styled(Form)`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  margin-bottom: 24px;

`;

export const ErrorSection = styled(ErrorMessage)`
  padding-left: 14px;
  color: #c04d4d;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const TitleInput = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  color: #161616;
  background: #fcfcfc;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  outline: none;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px #fcfcfc inset !important;
  }

  &::placeholder {
    color: #161616;
    background: #fcfcfc;
    font-size: 14px;
    font-family: 'Poppins';
    letter-spacing: -0.28px;
  }
`;

export const Textarea = styled(Field)`
  display: inline-block;
  resize: none;
  width: 100%;
  height: 120px;
  padding: 14px 18px;
  margin-top: 14px;

  font-size: 14px;
  font-family: 'Poppins';
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  color: #161616;
  background: #fcfcfc;
  border: 1px solid #bedbb0;
  outline: none;
  border-radius: 8px;

  &::placeholder {
    color: #161616;
    font-size: 14px;
  }
`;

export const AuthFormSubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 14px;

  font-family: 'Poppins';
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.28px;

  background: #bedbb0;
  border-radius: 8px;
  border: 1px solid #bedbb0;

  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
