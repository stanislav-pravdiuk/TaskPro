import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { needHelp } from 'redux/auth/authOperations';
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
  CloseButton,
} from './NeedHelpModal.styled';
import { BtnCloseBlack } from 'components/buttons/buttons';
import { useTheme } from '@mui/material';

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

  const theme = useTheme();

  const handleSubmit = (values, { resetForm }) => {
    const { email, message } = values;
    const messageTrim = message.trim();

    if (!messageTrim) {
      toast.error('Sorry, but you need to describe your problem!');
      return;
    }
    const credentials = { email, message };

    dispatch(needHelp(credentials));
    resetForm();
    closeModal();
  };

  return (
    <Section theme={theme}>
      <CloseButton type="button" onClick={closeModal}>
        <BtnCloseBlack />
      </CloseButton>
      <SectionTitle>Need help</SectionTitle>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <ModalForm>
            <FormWrapper>
              <Container>
                <TitleInput
                  theme={theme}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email address "
                />
                <ErrorSection name="email" component="div" />
              </Container>
              <Container>
                <Textarea
                  theme={theme}
                  component="textarea"
                  type="text"
                  id="message"
                  name="message"
                  placeholder="Comment"
                />
                <ErrorSection name="message" component="div" />
              </Container>
            </FormWrapper>

            <AuthFormSubmitButton
              theme={theme}
              type="submit"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Send
            </AuthFormSubmitButton>
          </ModalForm>
        )}
      </Formik>
    </Section>
  );
};

export default NeedHelpModal;
