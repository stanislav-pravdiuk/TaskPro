import React from 'react';
import { Formik, Form, Field } from 'formik';
// import DatePicker from 'react-datepicker';
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  Input,
  Textarea,
  Subtitle,
  Text,
  CloseButton,
  ColorOptionLabel
} from './ModalCard.styled';
import icon from '../iconSvg/icon.svg';

const TaskModal = ({ isOpen, onClose, title, buttonText, onSubmit }) => {
  const initialValues = {
    title: '',
    description: '',
    labelColor: '',
  };
//   const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = values => {
    onSubmit(values);
    // onSubmit({ ...values, deadline: selectedDate });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <svg width="18" height="18">
            <use xlinkHref={icon + '#icon-x-close'} />
          </svg>
        </CloseButton>
        <ModalTitle>{title}</ModalTitle>

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
              {/* {selectedDate ? (
                <Text>{selectedDate.toLocaleDateString()}</Text>
              ) : (
                <StyledDatePicker
                  selected={selectedDate}
                  onChange={date => setSelectedDate(date)}
                />
              )} */}
            </div>
            <button type="submit">{buttonText}</button>
          </Form>
        </Formik>
      </ModalContent>
    </ModalOverlay>
  );
};

export default TaskModal;
