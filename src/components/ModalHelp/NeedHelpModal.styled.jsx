import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background-color: ${props => props.theme.palette.background.paper};
  color: ${props => props.theme.palette.text.primary};
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
  color: inherit;
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

export const Container = styled.div`
  line-height: 0;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 0;
`;

export const ErrorSection = styled(ErrorMessage)`
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

export const TitleInput = styled(Field)`
  display: inline-block;
  width: 100%;
  height: 49px;
  padding: 14px 18px;

  font-size: 14px;
  font-family: 'Poppins';
  letter-spacing: -0.28px;

  color: ${props => props.theme.palette.text.secondary};
  background: inherit;
  border: 1px solid;
  border-color: ${props => props.theme.palette.text.info};
  border-radius: 8px;
  outline: none;

  &:focus {
    border-color: ${props => props.theme.palette.text.hint};
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

  color: ${props => {
    return props.theme.palette.text.secondary;
  }};
  background: inherit;
  border: 1px solid;
  border-color: ${props => props.theme.palette.text.info};
  outline: none;
  border-radius: 8px;

  &::placeholder {
    color: ${props => {
      return props.theme.palette.text.secondary;
    }};
    font-size: 14px;
  }

  &:focus {
    border-color: ${props => props.theme.palette.text.hint};
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

  background-color: ${props => {
    return props.theme.palette.text.hint;
  }};
  color: ${props => {
    return props.theme.palette.primary.hint;
  }};
  border-radius: 8px;

  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.text.error};
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`;
