import { useDispatch } from "react-redux";
import React from 'react';
import { useFormik } from 'formik';
import RegisterSchema from "./RegisterSchema";
// import {  Link } from "react-router-dom";
import { Container, FormContainer, InputField, LinkMenu, LoginLink, RegisterBtn, RegisterLink } from "./RegisterForm.styled";
import { register } from "redux/auth/authOperations";



const RegisterForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
      initialValues: {
        name: '',
        email: '',
        password: '',
      },
      validationSchema: RegisterSchema, 
      onSubmit: values => {
        dispatch(register({ name: values.name, email: values.email, password: values.password }));
        formik.resetForm(); } 
      },);
    return (   <Container> 
      <FormContainer> 
        <form onSubmit={formik.handleSubmit}>
            <LinkMenu>
              <RegisterLink to="/auth/register" underline="none"> Registration </RegisterLink>
              <LoginLink to="/auth/login" underline="none"> Log In </LoginLink >
            </LinkMenu>
        <InputField>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            placeholder="Enter your name"
          />
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
      <div>{formik.errors.email}</div>) : null}
          <input
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Create a password"
          />
          {/* <svg> </svg> */}
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </InputField>
        <RegisterBtn type="submit">Register Now</RegisterBtn>
      </form>
      </FormContainer >
      </Container>) 
};

export default RegisterForm;