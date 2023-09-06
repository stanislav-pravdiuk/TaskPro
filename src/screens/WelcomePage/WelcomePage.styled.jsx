import { Link } from 'react-router-dom';
import styled from 'styled-components';
import WelcomeImage from '../../images/welcome-mobile.png';

const Container = styled.div`
  background: linear-gradient(
    180deg,
    var(--color-white) 0%,
    var(--color-white) 25%,
    var(--color-green) 92.19%
  );
  background-repeat: no-repeat;
  background-size: cover;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentContainer = styled.div`
  text-align: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 473px;
  }
`;

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

  @media screen and (min-width: 768px) {
    height: 60px;
  }
`;

const WelcomeLogoSvg = styled.svg`
  height: 48px;
  width: 48px;
  @media screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Title = styled.p`
  color: var(--color-dark);
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
  }
`;

const WelcomeText = styled.p`
  color: var(--color-dark);
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
    margin: auto;
    margin-bottom: 48px;
  }
`;

const RegistrationNav = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const RegistrationButton = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-family: Poppins;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  padding: 14px 131px 14px 130px;
  background: var(--color-dark);
  border-radius: 8px;
  color: var(--color-white);
  cursor: pointer;
  text-transform: none;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    padding: 14px 126px 14px 126px;
  }
`;

const LoginButton = styled(Link)`
  font-style: normal;
  font-family: Poppins;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  color: var(--color-dark);
  cursor: pointer;
  text-decoration: none;
`;

export {
  Container,
  WelcomeText,
  Title,
  RegistrationButton,
  LoginButton,
  RegistrationNav,
  ContentContainer,
  WelcomeImg,
  WelcomeLogoSvg,
  WelcomeLogoContainer,
};
