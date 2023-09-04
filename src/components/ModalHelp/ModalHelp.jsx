import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { needHelp } from 'redux/auth/authOperations';
import Button from '@mui/material/Button';
import icon from '../iconSvg/icon.svg';
import {
  Section,
  SectionTitle,
  ModalForm,
  FormWrapper,
  Container,
  TitleInput,
  Textarea,
  ErrorSection,
  AuthFormSubmitButton,
  CloseIcon,
  CloseButton,
} from './NeedHelpModal.styled';
import { BtnCloseBlack } from 'components/buttons/buttons';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  message: Yup.string().min(7).max(230).required('Comment is required'),
});
const initialValues = {
  email: '',
  message: '',
};

const NeedHelpModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { email, message } = values;
    const credentials = { email, message };
    dispatch(needHelp(credentials));
    resetForm();
    closeModal();
  };
  return (
    <Section>
      <CloseButton type="button" onClick={closeModal}>
        <BtnCloseBlack />
      </CloseButton>
      <SectionTitle>Need help</SectionTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <Container>
              <TitleInput
                type="email"
                id="email"
                name="email"
                placeholder="Email address "
              />
              <ErrorSection name="email" component="div" />
            </Container>
            <Container>
              <Textarea
                component="textarea"
                type="text"
                id="message"
                name="message"
                placeholder="Comment"
              />
              <ErrorSection name="message" component="div" />
            </Container>
          </FormWrapper>

          <AuthFormSubmitButton type="submit">Send</AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default NeedHelpModal;
