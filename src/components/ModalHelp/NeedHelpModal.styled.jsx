import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Section = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  background: var(--color-cream);
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

  color: var(--color-dark);
  background: var(--color-cream);
  border: 1px solid var(--color-green);
  border-radius: 8px;
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

  color: var(--color-dark);
  background: var(--color-cream);
  border: 1px solid var(--color-green);
  outline: none;
  border-radius: 8px;

  &::placeholder {
    color: var(--color-dark);
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

  background: var(--color-green);
  border-radius: 8px;
  border: 1px solid var(--color-green);

  transition: all 250ms linear;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
