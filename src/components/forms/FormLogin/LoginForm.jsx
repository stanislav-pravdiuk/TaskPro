import { useDispatch } from "react-redux";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import LoginSchema from "./LoginSchema";
import { Container, FormContainer, InputField, LinkMenu, LoginLink, RegisterBtn, RegisterLink, ErrorText, PasswordInput, Passwordsvg, StyledWrapInputAuth } from "./LoginForm.styled";
import { logIn } from "redux/auth/authOperations";
import { toast } from "react-hot-toast";
import icon from '../../../components/iconSvg/icon.svg';

const LoginForm = () => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: LoginSchema, 
      onSubmit: async values => {
        try {
          await dispatch(logIn(
            { email: values.email, password: values.password }
          )).unwrap();
        toast.success('You have logged in successfully!!!')
        formik.resetForm();
        } catch (error) {
          toast.error("Sorry, you entered invalid email or password")
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
            placeholder="Confirm a password"
          />
          <Passwordsvg  width="18px" onClick={togglePasswordVisibility}> < use href={icon + '#icon-eye'}></use> </Passwordsvg > </PasswordInput>
          {formik.touched.password && formik.errors.password ? (
            <ErrorText>{formik.errors.password}</ErrorText>
          ) : null} </StyledWrapInputAuth>
        </InputField>
        <RegisterBtn type="submit">Log In Now</RegisterBtn>
      </form>
      </FormContainer >
      </Container>) 
};

export default LoginForm;