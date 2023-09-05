import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  CloseButton,
} from './ProfileEditModal.styled';
import { useTheme } from '@mui/material';

import { updateUserProfile } from '../../redux/auth/authOperations';

import icon from '../iconSvg/icon.svg';
import avatarLight from '../../images/userAvatarLight.jpg';
import avatarDark from '../../images/userAvatarDark.jpg';
// import Button from '@mui/material/Button';
// import avatar from '../../images/userAvatar.jpg';
import { toast } from 'react-hot-toast';
import { BtnCloseBlack } from 'components/buttons/buttons';
import { selectTheme } from 'redux/auth/authSelectors';

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

  const theme = useSelector(selectTheme);

  const themeObj = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar);

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
      const newData = {
        name: values.login,
        email: values.email,
        password: values.password,
        avatar: selectedAvatar,
      };
      console.log('newData', newData);
      await dispatch(updateUserProfile(newData)).unwrap();

      toast.success('Saved successfully!!!');
      modalClose();
    } catch (error) {
      console.error('Error:', error.message);
      toast.error(
        'Oops, but the image must be no more than 100 Kb!... Please make the image smaller!'
      );
    }
  };

  return (
    <FormContainer theme={themeObj}>
      <CloseButton type="button" onClick={modalClose}>
        <BtnCloseBlack />
      </CloseButton>
      <ModalTitle>Edit Profile</ModalTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <AvatarContainer>
            {theme === 'dark' ? (
              <AvatarImg
                src={selectedAvatar || user.avatar || avatarDark}
                alt="Avatar"
              />
            ) : (
              <AvatarImg
                src={selectedAvatar || user.avatar || avatarLight}
                alt="Avatar"
              />
            )}

            <input
              type="file"
              id="upload-avatar"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileSelect}
              style={{ display: 'none' }}
            />
            <label htmlFor="upload-avatar">
              <BtnPlus
                theme={themeObj}
                type="button"
                onClick={handleFileInputChange}
              >
                <svg width="10" height="10">
                  <use href={icon + '#icon-plus-2'}></use>
                </svg>
              </BtnPlus>
            </label>
          </AvatarContainer>
          <InputContainer>
            <Field
              theme={themeObj}
              type="text"
              id="login"
              name="login"
              placeholder="Name"
              as={Input}
            />
            <Field
              theme={themeObj}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              as={Input}
            />
            <PasswordContainer>
              <Field
                theme={themeObj}
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
          <BtnForm theme={themeObj} type="submit">
            Send
          </BtnForm>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default ProfileEditModal;
