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

const CardForm = ({ formTitle, btnText, onSubmit }) => {
  const initialValues = {
    title: '',
    description: '',
    labelColor: '',
    deadline: '',
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
          <Field
            component={Textarea}
            as="textarea"
            name="description"
            placeholder="Description"
          />
          <div>
            <Subtitle>Label color</Subtitle>
            <div>
              <ColorOptionLabel className="blue">
                <Field type="radio" name="labelColor" value="blue" />
              </ColorOptionLabel>
              <ColorOptionLabel className="red">
                <Field type="radio" name="labelColor" value="red" />
              </ColorOptionLabel>
              <ColorOptionLabel className="green">
                <Field type="radio" name="labelColor" value="green" />
              </ColorOptionLabel>
              <ColorOptionLabel className="gray">
                <Field type="radio" name="labelColor" value="gray" />
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
