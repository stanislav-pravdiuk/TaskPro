import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';
import {
  ModalTitle,
  Container,
  Error,
  Input,
  FormContainer,
  CloseButton,
} from '../cardForm/CardForm.styled';
import BtnAdd from 'components/ScreensPage/btnAdd/BtnAdd';
import { BtnCloseBlack } from 'components/buttons/buttons';
import { useTheme } from '@mui/material';

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
    const title = values.title.trim();

    if (!title) {
      toast.error('Sorry, you entered empty title');
      return;
    }

    onSubmit(values);
  };

  const theme = useTheme();

  return (
    <FormContainer theme={theme}>
      <CloseButton type="button" onClick={closeModal}>
        <BtnCloseBlack />
      </CloseButton>
      <ModalTitle>{formTitle}</ModalTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {formik => (
          <Form>
            <Container>
              <Field
                theme={theme}
                type="text"
                name="title"
                as={Input}
                placeholder="Title"
              />
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
