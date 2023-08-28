import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background:linear-gradient( 180deg, #ffffff 0%,  #ffffff 25%, #bedbb0 92.19%);
    background-repeat: no-repeat;
    background-size: cover;
`
const FormContainer = styled.div `
  text-align: center;
  background: #151515;
  border-radius: 8px;
  padding: 40px;
`
const LinkMenu = styled.div`
  display: flex;
`;

const LoginLink = styled(Link)`
  left: 160px;
  top: 40px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: #FFF;
  text-decoration: none;
`;

const RegisterLink = styled(Link)`
  margin-right: 14px;
  display: inline-block;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.30);
  text-decoration: none;
`;


const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 14px;

  input {
    width: 326px;
    height: 49px;
    left: 40px;
    top: 107px;
    color: #FFF;
    background: #1F1F1F;
    opacity: 0.4;
    border: 1px solid #BEDBB0;
    padding-left: 18px;
    box-shadow: 0px 4px 16px rgba(22, 22, 22, 0.08);
    border-radius: 8px;
  }
`;

const RegisterBtn = styled.button`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    letter-spacing: -0.02em;
    width: 100%;
    height: 49px;
    margin-top: 24px;
    background: #BEDBB0;
    border-radius: 8px;
    color: #161616;
    cursor: pointer;
`;

export  {Container, FormContainer, LinkMenu, RegisterLink, LoginLink, InputField , RegisterBtn  }
