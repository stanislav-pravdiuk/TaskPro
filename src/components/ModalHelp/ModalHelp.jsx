import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { needHelp } from 'redux/auth/authOperations';
import Button from '@mui/material/Button';

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
} from './NeedHelpModal.styled';

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
  // const [disabled, setDisabled] = useState(true);

  const handleSubmit = (values, { resetForm }) => {
    const { email, message } = values;

    // if (email.length > 0 && message.length > 0) {
    //   setDisabled(false);
    // }
    const credentials = { email, message };
    console.log(credentials);

    dispatch(needHelp(credentials));
    resetForm();
    closeModal();
  };

  // console.log(disabled);

  return (
    <Section>
      <Button
        onClick={closeModal}
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
        {formik => (
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

            <AuthFormSubmitButton
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
