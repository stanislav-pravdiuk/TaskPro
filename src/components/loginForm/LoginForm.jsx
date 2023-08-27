import { useDispatch } from "react-redux";
import React from 'react';
import { useFormik } from 'formik';
import LoginSchema from "./LoginSchema";
import { Container, FormContainer, InputField, LinkMenu, LoginLink, RegisterBtn, RegisterLink } from "../loginForm/LoginForm.styled";
import { logIn } from "redux/auth/authOperations";


const LoginForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: LoginSchema, 
      onSubmit: values => {
        dispatch(logIn({ email: values.email, password: values.password }));
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
            placeholder="Confirm a password"
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </InputField>
        <RegisterBtn type="submit">Log In Now</RegisterBtn>
      </form>
      </FormContainer >
      </Container>) 
};

export default LoginForm;