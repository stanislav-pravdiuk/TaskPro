import styled from 'styled-components';
import { ErrorMessage } from 'formik';

export const FormContainer = styled.div`
  position: relative;
  background-color: ${props => {
    return props.theme.palette.background.paper;
  }};
  width: 100vw;
  max-width: 400px;
  padding: 24px;
  border-radius: 8px;
`;

export const ModalTitle = styled.h6`
  margin: 0;
  font-family: Poppins;
  font-size: 18px;
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  margin-top: 24px;
`;

export const AvatarImg = styled.img`
  border-radius: 8px;
  width: 68px;
  height: 68px;
`;

export const BtnPlus = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: -12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: ${props => {
    return props.theme.palette.secondary.light;
  }};

  stroke: black;

  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.text.error};
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 25px;
`;

export const Input = styled.input`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.palette.text.info};
  background-color: inherit;
  color: ${props => props.theme.palette.text.primary};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;

  &:focus {
    border-color: ${props => props.theme.palette.text.hint};
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  width: 18px;
  height: 18px;
`;

export const Container = styled.div`
  line-height: 0;
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 0;
`;

export const Error = styled(ErrorMessage)`
  position: absolute;
  bottom: -8px;
  padding-left: 14px;
  margin: 0;
  color: var(--color-pastel);
  font-size: 12px;
  font-family: Poppins;
  font-weight: 500;
  letter-spacing: -0.36px;
`;

export const BtnForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 49px;
  margin-top: 24px;
  background-color: ${props => {
    return props.theme.palette.text.hint;
  }};
  color: ${props => {
    return props.theme.palette.primary.hint;
  }};
  border-radius: 8px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;

  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.text.error};
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;

export const Icon = styled.svg`
  stroke: ${props => props.theme.palette.text.primary};
`;
