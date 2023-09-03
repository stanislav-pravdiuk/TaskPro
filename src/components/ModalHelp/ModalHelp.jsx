import React from 'react';
import {
  FormWrapper,
  Section,
  AuthFormSubmitButton,
  TitleInput,
  SectionTitle,
  Textarea,
  ModalForm,
  ErrorSection,
} from './NeedHelpModal.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { needHelp } from 'redux/auth/authOperations';
import ModalClose from '@mui/joy/ModalClose';

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
      <ModalClose
        sx={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          zIndex: 1,
        }}
      />
      <SectionTitle>Need help</SectionTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <ModalForm>
          <FormWrapper>
            <ErrorSection name="email" component="div" />
            <TitleInput
              type="email"
              id="email"
              name="email"
              placeholder="Email address "
            />

            <ErrorSection name="message" component="div" />

            <Textarea
              component="textarea"
              type="text"
              id="message"
              name="message"
              placeholder="Comment"
            />
          </FormWrapper>

          <AuthFormSubmitButton type="submit">Send</AuthFormSubmitButton>
        </ModalForm>
      </Formik>
    </Section>
  );
};

export default NeedHelpModal;
