import styled from 'styled-components';

export const FormContainer = styled.div`
  position: relative;
  background-color: #fcfcfc;
  min-width: 335px;
  padding: 24px;
  border-radius: 8px;
`;

export const ModalTitle = styled.h6`
  margin: 0;
  font-family: Poppins;
  font-size: 18px;
  color: #161616;
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 24px;
`;

export const AvatarImg = styled.img`
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
  background-color: #bedbb0;
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
  border: 1px solid rgba(190, 219, 176, 0.4);
  background-color: #fcfcfc;
  color: #161616;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  box-shadow: none;

  &:focus {
    border: 1px solid #bedbb0;
  }
`;

export const PasswordContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const ShowPasswordBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 18px;
  width: 18px;
  height: 18px;
`;

export const BtnForm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 49px;
  margin-top: 24px;
  background-color: #bedbb0;
  border-radius: 8px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
`;
