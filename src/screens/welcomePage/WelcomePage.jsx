import { Link } from 'react-router-dom';
import React from 'react';
import { Container, LoginButton, RegistrationButton, RegistrationNav, Title, WelcomeText } from './WelcomePage.styled';
const WelcomePage = () => {
    return (
        <Container>
            <img />
            <div>
                <svg></svg>
                <Title>TASK PRO</Title>
            </div>
            <WelcomeText> Supercharge your productivity and take control of your tasks with Task
                Pro - Don't wait, start achieving your goals now! </WelcomeText>
                <RegistrationNav>
                    <RegistrationButton to="/auth/login">Log In</RegistrationButton>
                    <LoginButton to="/auth/register">Registration</LoginButton>
                </RegistrationNav>
        </Container>
      );
    }

export default WelcomePage;