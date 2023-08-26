import React from 'react';
import { Container, ContentContainer, LoginButton, RegistrationButton, RegistrationNav, Title, WelcomeText } from './WelcomePage.styled';
const WelcomePage = () => {
    return (
        <Container>
            <ContentContainer>
            {/* <img /> */}
            <div>
                <svg></svg>
                <Title>TASK PRO</Title>
            </div>
            <WelcomeText> Supercharge your productivity and take control of your tasks with Task
                Pro - Don't wait, start achieving your goals now! </WelcomeText>
            <RegistrationNav>
                <RegistrationButton to="/auth/register">Registration </RegistrationButton>
                <LoginButton to="/auth/login">Log In</LoginButton>
            </RegistrationNav>
            </ContentContainer>
        </Container>
    );
};

export default WelcomePage;