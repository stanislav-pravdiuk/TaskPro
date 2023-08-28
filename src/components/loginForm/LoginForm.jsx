import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import LoginSchema from "./LoginSchema";
import { Container, FormContainer, InputField, LinkMenu, LoginLink, RegisterBtn, RegisterLink, ErrorText, PasswordInput, Passwordsvg } from "../loginForm/LoginForm.styled";
import { logIn } from "redux/auth/authOperations";
import sprite from '../../components/iconSvg/icon.svg';



const LoginForm = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);

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
      <ErrorText>{formik.errors.email}</ErrorText>) : null}
          <PasswordInput><input
           type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            placeholder="Create a password"
          />
          <Passwordsvg  width="18px" onClick={togglePasswordVisibility}> < use href={`${sprite}#icon-eye`}></use> </Passwordsvg > </PasswordInput>
          {formik.touched.password && formik.errors.password ? (
            <ErrorText>{formik.errors.password}</ErrorText>
          ) : null}
        </InputField>
        <RegisterBtn type="submit">Log In Now</RegisterBtn>
      </form>
      </FormContainer >
      </Container>) 
};

export default LoginForm;