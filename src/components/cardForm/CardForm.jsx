import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  FormContainer,
  ModalTitle,
  Input,
  Textarea,
  Subtitle,
  Text,
  ColorOptionLabel,
  DeadlineBox,
  RadioButtonContainer,
  RadioButton,
  Dot,
  Error,
  ErrorText,
  Container,
} from './CardForm.styled';
import BtnAdd from 'components/ScreensPage/btnAdd/BtnAdd';
import Button from '@mui/material/Button';
import { Calendar } from 'components/calendar/Calendar';
import dayjs from 'dayjs';

const CardForm = ({
  title,
  text,
  priority,
  formTitle,
  btnText,
  onSubmit,
  deadline,
  owner,
  closeModal,
}) => {
  const [selectedDate, setSelectedDate] = useState();
  const formattedDate = dayjs(selectedDate).format('MM/DD/YYYY');
  const formattedDateLong = dayjs(selectedDate).format('dddd, MMMM DD');
  const deadLineDateLong = dayjs(deadline).format('dddd, MMMM DD');

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    text: Yup.string().required('Title is required'),
  });

  const initialValues = {
    title: title || '',
    text: text || '',
    priority: priority || 'without',
    deadline,
  };

  const handleSubmit = values => {
    const data = {
      ...values,
      deadline: formattedDate,
      owner,
    };

    onSubmit(data);
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
            <Container>
              <Field
                as={Textarea}
                type="text"
                name="text"
                placeholder="Description"
              />
              <ErrorText name="text" component="div" />
            </Container>

            <div>
              <Subtitle>Label color</Subtitle>
              <RadioButtonContainer>
                <ColorOptionLabel>
                  <RadioButton
                    type="radio"
                    name="priority"
                    value="low"
                    className="blue"
                  />
                  <Dot className="blue"></Dot>
                </ColorOptionLabel>
                <ColorOptionLabel>
                  <RadioButton
                    type="radio"
                    name="priority"
                    value="medium"
                    className="red"
                  />
                  <Dot className="red"></Dot>
                </ColorOptionLabel>
                <ColorOptionLabel>
                  <RadioButton
                    type="radio"
                    name="priority"
                    value="high"
                    className="green"
                  />
                  <Dot className="green"></Dot>
                </ColorOptionLabel>
                <ColorOptionLabel>
                  <RadioButton
                    type="radio"
                    name="priority"
                    value="without"
                    className="gray"
                  />
                  <Dot className="gray"></Dot>
                </ColorOptionLabel>
              </RadioButtonContainer>
            </div>
            <div>
              <Subtitle>Deadline</Subtitle>
              <DeadlineBox>
                <Text>
                  {selectedDate
                    ? formattedDateLong
                    : deadLineDateLong || `Today, ${dayjs().format('MMMM D')}`}
                </Text>
                <Calendar parentState={setSelectedDate} />
              </DeadlineBox>
            </div>
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

export default CardForm;
