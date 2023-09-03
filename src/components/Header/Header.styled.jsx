import styled from '@emotion/styled';
import { Box, Button, Typography, Toolbar, AppBar } from '@mui/material';

export const BurgerIcon = styled.svg`
  display: flex;
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: transparent;
  color: inherit;
  &:hover {
    fill: #bedbb0;
  }
`;

export const UserImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: transparent;
  color: inherit;
  &:hover {
    fill: #bedbb0;
  }
`;

export const UserIcon = styled.svg`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: transparent;
  color: inherit;
  &:hover {
    fill: #bedbb0;
  }
`;

export const Appbar = styled(AppBar)`
  width: 100%;
  background-color: #fcfcfc;
  box-shadow: none;
  position: relative;
`;

export const ToolBar = styled(Toolbar)`
 padding-right: 32px;
 padding-left: 32px;
 display: flex;
 justify-content: space-between;
`;

export const BurgerButton = styled(Button)`
  @media (min-width: 1440px){
 display: { xs: block; sm: none }
  } 
  min-width: 0;
  padding: 0;
  &:hover {
    background-color: transparent;
  }
`;

export const HeaderWrap = styled(Box)`
  display: flex;
  align-items: center;
 width: 100%;
 justify-content: end;
`;

export const UserText = styled(Typography)`
  margin-right: 8px;
  width: auto;
  color: rgba(22, 22, 22, 1);
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: 0.7;
  font-weight: 500;
  color: rgba(22, 22, 22, 1);
`;

export const UserButton = styled(Button)`
  min-width: 0;
  padding: 0;
  border: 0;
  &:hover {
    background-color: inherit;
    border: 0;
    transform: scale(1.1);
  }
`;