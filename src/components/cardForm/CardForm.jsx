import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  FormContainer,
  ModalTitle,
  Input,
  Textarea,
  Subtitle,
  Text,
  ColorOptionLabel,
} from './CardForm.styled';
import BtnAdd from 'components/ScreensPage/btnAdd/BtnAdd';
import ModalClose from '@mui/joy/ModalClose';

const CardForm = ({ formTitle, btnText, owner, onSubmit }) => {
  const initialValues = {
    title: '',
    text: '',
    priority: '',
    deadline: '31/08/2023',
  };

  const handleSubmit = values => {
    const data = {
      ...values,
      owner,
    };

    onSubmit(data);
  };

  return (
    <FormContainer>
      <ModalClose
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
          <Field
            component={Textarea}
            as={Input}
            name="text"
            placeholder="Description"
          />
          <div>
            <Subtitle>Label color</Subtitle>
            <div>
              <ColorOptionLabel className="blue">
                <Field type="radio" name="priority" value="low" />
              </ColorOptionLabel>
              <ColorOptionLabel className="red">
                <Field type="radio" name="priority" value="medium" />
              </ColorOptionLabel>
              <ColorOptionLabel className="green">
                <Field type="radio" name="priority" value="high" />
              </ColorOptionLabel>
              <ColorOptionLabel className="gray">
                <Field type="radio" name="priority" value="without" />
              </ColorOptionLabel>
            </div>
          </div>
          <div>
            <Subtitle>Deadline</Subtitle>
            <Text>Today, March 8</Text>
          </div>
          <BtnAdd btnTitle={btnText} btnColor={'#BEDBB0'} />
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default CardForm;
