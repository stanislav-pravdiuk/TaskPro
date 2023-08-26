import React from 'react';
import { Container, LoginButton, RegistrationButton, RegistrationNav, Title, WelcomeText } from './WelcomePage.styled';
import { BtnCreate, BtnCreateViolet, BtnLogOut, BtnLogOutViolet, BtnPlus, BtnPlusViolet, BtnTaskPro, BtnTaskProViolet } from 'components/button/button';



const WelcomePage = () => {
    return (
        <Container>
            {/* <img /> */}
            <div>
                <svg></svg>
                <Title>TASK PRO</Title>
            </div>
            <WelcomeText> Supercharge your productivity and take control of your tasks with Task
                Pro - Don't wait, start achieving your goals now! </WelcomeText>
            <RegistrationNav>
                <BtnLogOutViolet></BtnLogOutViolet>
                <BtnPlusViolet></BtnPlusViolet>
                <BtnCreateViolet children={"some text"} ></BtnCreateViolet>
                <BtnTaskProViolet></BtnTaskProViolet>
                < BtnLogOut></BtnLogOut>
                <BtnCreate children={"some text"}></BtnCreate>
                <RegistrationButton to="/auth/login">Log In</RegistrationButton>
                <LoginButton to="/auth/register">Registration</LoginButton>
                <BtnTaskPro></BtnTaskPro>
                < BtnPlus></BtnPlus>
            </RegistrationNav>
        </Container>
    );
};

export default WelcomePage;