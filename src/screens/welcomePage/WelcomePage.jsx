import React from 'react';
import { Container, ContentContainer, LoginButton, RegistrationButton, RegistrationNav, Title, WelcomeImg, WelcomeText, WelcomeLogoSvg,WelcomeLogoContainer } from './WelcomePage.styled';
import WelcomeImage from '../../images/welcome-desktop.png';
import sprite from '../../components/iconSvg/icon.svg';


const WelcomePage = () => {
    return (
        <Container>
            <ContentContainer>
            <WelcomeImg src={WelcomeImage} alt="man with macbook" />
            <WelcomeLogoContainer> 
                 <WelcomeLogoSvg> < use href={`${sprite}#icon-welcome`}></use> </WelcomeLogoSvg>
                <Title>TASK PRO</Title>
            </WelcomeLogoContainer>
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