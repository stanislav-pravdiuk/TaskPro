import React from 'react';
import { Formik, Form, Field } from 'formik';
import { ModalTitle, Input, FormContainer } from '../cardForm/CardForm.styled';
import BtnAdd from 'components/ScreensPage/btnAdd/BtnAdd';
import Button from '@mui/material/Button';

const ColumnForm = ({
  formTitle,
  columnTitle,
  btnText,
  onSubmit,
  closeModal,
}) => {
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
