import React from 'react';
import { Formik, Form, Field } from 'formik';
import {
  ModalOverlay,
  ModalTitle,
  Input,
  CloseButton,
} from '../modalCard/ModalCard.styled';
import { ModalContent } from './ModalColumn.styled';
import icon from '../iconSvg/icon.svg';

const ColumnModal = ({ isOpen, onClose, title, buttonText, onSubmit }) => {
  const initialValues = {
    title: '',
  };

  const handleSubmit = values => {
    onSubmit(values);
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
            <button type="submit">{buttonText}</button>
          </Form>
        </Formik>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ColumnModal;
