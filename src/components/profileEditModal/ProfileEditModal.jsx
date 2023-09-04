import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import {
  FormContainer,
  ModalTitle,
  AvatarContainer,
  AvatarImg,
  BtnPlus,
  InputContainer,
  Input,
  PasswordContainer,
  ShowPasswordBtn,
  BtnForm,
} from './ProfileEditModal.styled';

import { updateUserProfile } from '../../redux/auth/authOperations';

import icon from '../iconSvg/icon.svg';
import avatar from '../../images/userAvatar.jpg';
import Button from '@mui/material/Button';
import { toast } from 'react-hot-toast';

const validationSchema = Yup.object().shape({
  login: Yup.string().required('Login is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const ProfileEditModal = ({ user, modalClose }) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const [showPassword, setShowPassword] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const initialValues = {
    avatar: user.avatar || null,
    login: user.login || '',
    email: user.email || '',
    password: '',
  };

  const handleFileInputChange = () => {
    fileInputRef.current.click();
  };

  const handleFileSelect = event => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async values => {
    try {
      await dispatch(
        updateUserProfile({
          name: values.login,
          email: values.email,
          password: values.password,
          avatar: selectedAvatar,
        })
      ).unwrap();
      toast.success('Saved successfully!!!');
      modalClose();
    } catch (error) {
      console.error('Error:', error.message);
      toast.error(
        "Oops, it's looks like something went wrong... Please, try again!"
      );
    }
  };

  return (
    <FormContainer>
      <Button
        onClick={modalClose}
        sx={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          zIndex: 1,
        }}
      />
      <ModalTitle>Edit Profile</ModalTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <AvatarContainer>
            <AvatarImg
              src={selectedAvatar || user.avatar || avatar}
              alt="Avatar"
            />
            <input
              type="file"
              id="upload-avatar"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
            <label htmlFor="upload-avatar">
              <BtnPlus type="button" onClick={handleFileInputChange}>
                <svg width="10" height="10">
                  <use href={icon + '#icon-plus-2'}></use>
                </svg>
              </BtnPlus>
            </label>
          </AvatarContainer>
          <InputContainer>
            <Field
              type="text"
              id="login"
              name="login"
              placeholder="Name"
              as={Input}
            />
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              as={Input}
            />
            <PasswordContainer>
              <Field
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="Password"
                as={Input}
              />
              <ShowPasswordBtn
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg width="18" height="18">
                  <use href={icon + '#icon-eye'}></use>
                </svg>
              </ShowPasswordBtn>
            </PasswordContainer>
          </InputContainer>
          <BtnForm type="submit">Send</BtnForm>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default ProfileEditModal;
