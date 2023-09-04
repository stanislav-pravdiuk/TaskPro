import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  ModalTitle,
  Input,
  FormContainer,
  Error,
  Container,
} from '../cardForm/CardForm.styled';
import BtnAdd from 'components/ScreensPage/btnAdd/BtnAdd';
import Button from '@mui/material/Button';

const ColumnForm = ({
  formTitle,
  columnTitle,
  btnText,
  onSubmit,
  closeModal,
}) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
  });

  const initialValues = {
    title: columnTitle || '',
  };

  const handleSubmit = values => {
    onSubmit(values);
  };

  return (
    <FormContainer>
      <Button
        onClick={closeModal}
        sx={{
          position: 'absolute',
          top: '8px',
          right: '8px',
          zIndex: 1,
        }}
      />
      <ModalTitle>{formTitle}</ModalTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {formik => (
          <Form>
            <Container>
              <Field type="text" name="title" as={Input} placeholder="Title" />
              <Error name="title" component="div" />
            </Container>

            <BtnAdd
              btnTitle={btnText}
              btnColor={'#BEDBB0'}
              isDisabled={!(formik.isValid && formik.dirty)}
            />
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default ColumnForm;
