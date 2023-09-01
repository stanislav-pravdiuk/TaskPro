import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
border-radius: 8px;
background: #FCFCFC;
box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
padding: 24px;
`;

export const Title = styled.p`
color: #161616;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const TitleBox = styled.div`
display:flex;
justify-content: space-between;
margin-bottom: 14px;
`;

export const ResetBox = styled.div`
display: flex;
border-top: 1px solid #1616161A;
margin-bottom: 14px;
padding-top: 14px;
`;

export const ResetTitle = styled.p`
margin-right: 130px;
color: #161616;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
`;

export const BtnReset = styled.button`
color: rgba(22, 22, 22, 0.50);
font-family: Poppins;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.24px;
text-decoration-line: underline;
`;

export const BtnBox = styled.button`
display: flex;
flex-direction: column;
`;

export const ColorOptionLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  
      &:not(:last-child) {
    margin-bottom: 12px;
    }
  font-size: 14px;

  input[type='radio'] {
    display: none;
  }

  &:hover {
    opacity: 0.7;
  }

  &::before {
    content: '';
    display: inline-block;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin-right: 8px;
    vertical-align: middle;
    background-color: transparent;
    border: 2px solid transparent;
  }

  &.blue::before {
    background-color: #8fa1d0;
  }

  &.red::before {
    background-color: #e09cb5;
  }

  &.green::before {
    background-color: #bedbb0;
  }

  &.gray::before {
    background-color: #1616164d;
  }

  &:active::before {
    border-color: #ffffff;
  }
`;

