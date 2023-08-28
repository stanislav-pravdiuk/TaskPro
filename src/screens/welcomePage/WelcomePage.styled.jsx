import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
background: linear-gradient( 180deg, #ffffff 0%,  #ffffff 25%, #bedbb0 92.19%);
background-repeat: no-repeat;
background-size: cover;
flex-direction: column;
height: 100vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`

const Title = styled.p`
color: #161616;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -1.6px;
margin-bottom: 24px;
`

const ContentContainer = styled.div`
text-align: center;
display: flex;
justify-content: center;
flex-direction: column;`

const WelcomeText = styled.p`
color: #161616;
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; 
letter-spacing: -0.02em;
width: 473px;
height: 36px;
margin-bottom: 48px;
margin-block-start: 0;`


const RegistrationNav = styled.div `
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 14px;
    
`

const RegistrationButton = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  padding: 14px 131px 14px 130px;
  background: #161616;;
  border-radius: 8px;
  color: #FFF;
  cursor: pointer;
  text-transform: none;
  text-decoration: none;
`

const LoginButton = styled(Link)`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #161616;
    cursor: pointer; 
    text-decoration: none;`

export {Container, WelcomeText, Title, RegistrationButton, LoginButton, RegistrationNav, ContentContainer}