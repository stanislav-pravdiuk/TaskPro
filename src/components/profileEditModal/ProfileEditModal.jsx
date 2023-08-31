import React from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
} from '@mui/material';

import { updateUserProfile } from '../../redux/auth/authOperations';
import icon from '../iconSvg/icon.svg';

const validationSchema = Yup.object().shape({
  login: Yup.string().required('Login is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const ProfileEditModal = ({ isOpen, onClose, user }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      avatar: user.avatar || null,
      login: user.login || '',
      email: user.email || '',
      password: '',
    },
    validationSchema,
    onSubmit: async values => {
      try {
        await dispatch(updateUserProfile(values));
      } catch (error) {
        console.error('Error:', error.message);
      }

      onClose();
    },
  });

  if (!isOpen) {
    return null;
  }

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: '#151515',
          borderRadius: 2,
          p: 3,
          width: 400,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            cursor: 'pointer',
          }}
        >
          <svg
            width="18"
            height="18"
            onClick={onClose}
            style={{ cursor: 'pointer' }}
          >
            <use xlinkHref={icon + '#icon-x-close'} />
          </svg>
        </div>
        <Typography
          variant="h6"
          align="start"
          mb={3}
          sx={{
            color: '#FFFFFF',
            fontSize: '18px',
            lineHeight: '1.5',
            fontFamily: 'Poppins',
            fontWeight: '500',
          }}
        >
          Edit Profile
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <div style={{ position: 'relative' }}>
            <Avatar
              src={formik.values.avatar}
              alt="Avatar"
              sx={{
                width: 68,
                height: 68,
                margin: '0 auto',
                mb: 3,
                borderRadius: '8px',
              }}
            />
            <label
              htmlFor="upload-avatar"
              style={{
                position: 'absolute',
                bottom: '-12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#BEDBB0',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              <svg width="10" height="10">
                <use href={icon + '#icon-plus-2'}></use>
              </svg>
            </label>
          </div>
          <input
            type="file"
            id="upload-avatar"
            accept="image/*"
            style={{
              display: 'none',
            }}
          />
          <TextField
            fullWidth
            id="login"
            name="login"
            value={formik.values.login}
            onChange={formik.handleChange}
            error={formik.touched.login && Boolean(formik.errors.login)}
            helperText={formik.touched.login && formik.errors.login}
            mb={2}
            InputProps={{
              sx: {
                padding: '14px 18px',
                color: '#FFFFFF',
                border: '1px solid rgba(190, 219, 176, 0.4)',
                borderRadius: '8px',
                height: 49,
                marginBottom: '14px',
                outline: 'none',
                boxShadow: 'none',
                '&:focus': {
                  border: '1px solid #BEDBB0',
                  outline: 'none',
                },
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '1.5',
              },
            }}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            mb={2}
            InputProps={{
              sx: {
                padding: '14px 18px',
                color: '#FFFFFF',
                border: '1px solid rgba(190, 219, 176, 0.4)',
                borderRadius: '8px',
                height: 49,
                marginBottom: '14px',
                '&:focus': {
                  border: '1px solid #BEDBB0',
                },
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '1.5',
              },
            }}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            InputProps={{
              sx: {
                padding: '14px 18px',
                color: '#FFFFFF',
                border: '1px solid rgba(190, 219, 176, 0.4)',
                borderRadius: '8px',
                height: 49,
                marginBottom: '24px',
                '&:focus': {
                  border: '1px solid #BEDBB0',
                },
              },
            }}
            InputLabelProps={{
              sx: {
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '1.5',
              },
            }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: '#BEDBB0',
              color: '#161616',
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: '700',
              lineHeight: '1.5',
              height: '49px',
              borderRadius: '8px',
              textTransform: 'none',
            }}
          >
            Send
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ProfileEditModal;
