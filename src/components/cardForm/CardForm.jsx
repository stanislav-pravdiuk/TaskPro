import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
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
  CloseButton,
} from './CardForm.styled';
import BtnAdd from 'components/ScreensPage/btnAdd/BtnAdd';
import { Calendar } from 'components/calendar/Calendar';
import dayjs from 'dayjs';
import { BtnCloseBlack } from 'components/buttons/buttons';

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
      <CloseButton type="button" onClick={closeModal}>
        <BtnCloseBlack />
      </CloseButton>
      <ModalTitle>{formTitle}</ModalTitle>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="title" as={Input} placeholder="Title" />
          <Field
            as={Textarea}
            type="text"
            name="text"
            placeholder="Description"
          />
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
          <BtnAdd btnTitle={btnText} btnColor={'#BEDBB0'} />
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default CardForm;
