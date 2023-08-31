import React from 'react';
import { Formik, Form, Field } from 'formik';
import { ModalTitle, Input, FormContainer } from '../cardForm/CardForm.styled';
import BtnAdd from 'components/ScreensPage/btnAdd/BtnAdd';

const ColumnForm = ({ formTitle, btnText, onSubmit }) => {
  const initialValues = {
    title: '',
  };

  const handleSubmit = values => {
    onSubmit(values);
  };

  return (
    <FormContainer>
      <ModalTitle>{formTitle}</ModalTitle>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="title" as={Input} placeholder="Title" />
          <BtnAdd btnTitle={btnText} btnColor={'#BEDBB0'} />
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default ColumnForm;
