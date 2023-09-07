import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import RegisterSchema from "./RegisterSchema";
// import {  Link } from "react-router-dom";
import { Container, ErrorText, FormContainer, InputField, LinkMenu, LoginLink, PasswordInput, Passwordsvg, RegisterBtn, RegisterLink, StyledWrapInputAuth } from "./RegisterForm.styled";
import { register } from "redux/auth/authOperations";
import { toast } from "react-hot-toast";
import icon from '../../../components/iconSvg/icon.svg';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      validationSchema: RegisterSchema, 
     onSubmit: async values => {
        try {
          await dispatch(register({ name: values.name, email: values.email, password: values.password })).unwrap();
        toast.success('You have registered successfully!!!')
        formik.resetForm();
        } catch (error) {
          toast.error("Oops, it's looks like something went wrong... Please, try again!")
        }
       } 
      },);

      const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
    return (   <Container> 
      <FormContainer> 
        <form onSubmit={formik.handleSubmit}>
            <LinkMenu>
              <RegisterLink to="/auth/register" underline="none"> Registration </RegisterLink>
              <LoginLink to="/auth/login" underline="none"> Log In </LoginLink >
            </LinkMenu>
        <InputField>
        <StyledWrapInputAuth>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Enter your name"
          />
          {formik.touched.name && formik.errors.name ? (
      <ErrorText>{formik.errors.name}</ErrorText>) : null} </StyledWrapInputAuth>
      <StyledWrapInputAuth>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          placeholder="Enter your email"
/>
      {formik.touched.email && formik.errors.email ? (
      <ErrorText>{formik.errors.email}</ErrorText>) : null} </StyledWrapInputAuth>
      <StyledWrapInputAuth>
          <PasswordInput><input
           type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Create a password"
          />
          <Passwordsvg  width="18px" onClick={togglePasswordVisibility}> < use href={icon + '#icon-eye'}></use> </Passwordsvg > </PasswordInput>
          {formik.touched.password && formik.errors.password ? (
            <ErrorText>{formik.errors.password}</ErrorText>
          ) : null} </StyledWrapInputAuth>
        </InputField>
        <RegisterBtn type="submit">Register Now</RegisterBtn>
      </form>
      </FormContainer >
      </Container>) 
};

export default RegisterForm;