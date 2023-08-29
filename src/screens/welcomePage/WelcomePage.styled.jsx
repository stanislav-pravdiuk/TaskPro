import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WelcomeImage from '../../images/welcome-mobile.png';


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

const ContentContainer = styled.div`
text-align: center;
justify-content: center;
flex-direction: column;
  @media screen and (min-width: 375px) {
  width: 335px;
}
  @media screen and (min-width: 768px) {
  width: 473px;
}`

const WelcomeImg = styled.img`
  width: 162px;
  height: 162px;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    width: 124px;
    height: 124px;
    margin-bottom: 14px;
    content: url(${WelcomeImage});
  }
`;

const WelcomeLogoContainer = styled.div`
  display: flex;
  gap: 14px;
  height: 42px;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  @media  screen and (min-width: 768px) {
    height: 60px;
  }
`;
const WelcomeLogoSvg = styled.svg`
width: 40px;
height: 40px;

@media  screen and (min-width: 768px) {
  width: 48px;
  height: 48px;
}
`;

const Title = styled.p`
color: #161616;
font-family: Poppins;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -1.6px;
margin-bottom: 24px;
    @media screen and (max-width: 768px) {
  font-size: 28px;
  line-height: 42px;

`


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
margin-block-start: 0;

@media screen and (max-width: 768px) {
  width: 335px;
  height: 54px;
  left: calc(50% - 335px/2);
}`


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
  @media screen and (min-width: 768px) {
    width: 344px;
  }
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

export {Container, WelcomeText, Title, RegistrationButton, LoginButton, RegistrationNav, ContentContainer, WelcomeImg, WelcomeLogoSvg, WelcomeLogoContainer}