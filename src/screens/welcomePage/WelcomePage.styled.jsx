import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
background-color:linear-gradient( 180deg, #ffffff 0%,  #ffffff 25%, #bedbb0 92.19%);
background-repeat: no-repeat;
background-size: cover;
flex-direction: column;
height: 100vh;
width: 100%;
`
const Title = styled.p`
color: #161616;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -1.6px;
`

const WelcomeText = styled.p`
color: #161616;
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 18px; /* 128.571% */
letter-spacing: -0.28px;`

export const RegistrationNav = styled.div `
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
`

const LoginButton = styled(Link)`
    font-style: normal;
    font-weight: 500;
    font-size: 14;
    line-height: 21px;
    letter-spacing: -0.02em;
    color: #161616;;
    cursor: pointer; `

export {Container, WelcomeText, Title, RegistrationButton, LoginButton, RegistrationNav}