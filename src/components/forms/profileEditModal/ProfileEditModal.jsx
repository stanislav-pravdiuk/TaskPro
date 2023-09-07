import React, { useRef, useState } from 'react';
import * as Yup from 'yup';
import icon from '../../iconSvg/icon.svg';
import avatarLight from '../../../images/userAvatarLight.jpg';
import avatarDark from '../../../images/userAvatarDark.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { useTheme } from '@mui/material';
import { updateUserProfile } from '../../../redux/auth/authOperations';
import { toast } from 'react-hot-toast';
import { BtnCloseBlack } from 'components/buttons/Buttons';
import { selectTheme } from 'redux/auth/authSelectors';
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
  Container,
  Error,
  Icon,
} from './ProfileEditModal.styled';

const validationSchema = Yup.object().shape({
  login: Yup.string().min(3),
  email: Yup.string().email('Invalid email'),
  password: Yup.string().min(6, 'Password must be at least 6 characters'),
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

    if (file.size > 50 * 1024) {
      toast.error('The file size must not exceed 50 KB');
      return;
    }

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
      await dispatch(updateUserProfile(newData)).unwrap();

      toast.success('Saved successfully!!!');
      modalClose();
    } catch (error) {
      toast.error(
        "Oops, it's looks like something went wrong... Please, try again!"
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
            <Container>
              <Field
                theme={themeObj}
                type="text"
                id="login"
                name="login"
                placeholder="Name"
                as={Input}
              />
              <Error name="login" component="div" />
            </Container>
            <Field
              theme={themeObj}
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              as={Input}
            />
            <Container>
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
                  <Icon theme={themeObj} width="18" height="18">
                    <use href={icon + '#icon-eye'}></use>
                  </Icon>
                </ShowPasswordBtn>
              </PasswordContainer>
              <Error name="password" component="div" />
            </Container>
          </InputContainer>
          <BtnForm theme={themeObj}>Send</BtnForm>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default ProfileEditModal;