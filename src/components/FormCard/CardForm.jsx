import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

import {
  FormContainer,
  ModalTitle,
  Container,
  Error,
  Input,
  ErrorText,
  Textarea,
  Subtitle,
  Text,
  ColorOptionLabel,
  DeadlineBox,
  RadioButtonContainer,
  RadioButton,
  Dot,
  CloseButton,
} from './CardForm.styled';
import BtnAdd from 'components/buttons/btnAdd/BtnAdd';
import { Calendar } from 'components/calendar/Calendar';
import dayjs from 'dayjs';
import { BtnCloseBlack } from 'components/buttons/buttons';
import { useTheme } from '@mui/material';

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
    title: Yup.string()
      .min(3, 'Title must be at least 3 characters long')
      .required('Title is required'),
    text: Yup.string()
      .min(3, 'Description must be at least 3 characters long')
      .required('Description is required'),
  });

  const theme = useTheme();

  const initialValues = {
    title: title || '',
    text: text || '',
    priority: priority || 'without',
    deadline,
  };

  const handleSubmit = values => {
    const title = values.title.trim();
    const text = values.text.trim();

    if (!title || title.length < 3) {
      toast.error('Title must be at least 3 characters long');
      return;
    }

    if (!text || text.length < 3) {
      toast.error('Description must be at least 3 characters long');
      return;
    }

    const data = {
      ...values,
      deadline: formattedDate,
      owner,
    };

    onSubmit(data);
  };

  return (
    <FormContainer theme={theme}>
      <CloseButton type="button" onClick={closeModal}>
        <BtnCloseBlack />
      </CloseButton>
      <ModalTitle>{formTitle}</ModalTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
            <Container>
              <Field
                theme={theme}
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
                <Text theme={theme}>
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
