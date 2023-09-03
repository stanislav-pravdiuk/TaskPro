import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';
import { Box, Button, Typography} from '@mui/material';

export const SideBarStyled = styled(Box)`
  width: 225px;
  padding: 14px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 259px;
    max-width: 260px;
    padding: 24px;
  }
`;

export const LogoText = styled(Typography)`
  font-size: 16px;
  letter-spacing: 0.7;
  font-weight: 600;
  color: #161616;
`;

export const LogoWrap = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 60px;
`;

export const Subtitle = styled(Typography)`
  font-size: 12px;
  letter-spacing: 0.7;
  font-weight: 400;
  color: rgba(22, 22, 22, 0.5);
`;

export const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
`;

export const Wrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(22, 22, 22, 0.1);
  border-top: 1px solid rgba(22, 22, 22, 0.1);
  padding: 14px 0;
  margin-top: 8px;
  margin-bottom: 40px;
`;

export const PlusIcon = styled.svg`
  width: 20px;
  height: 20px;
  background-color: transparent;
  color: #121212;
  &:hover {
    fill: #bedbb0;
  }
`;

export const Text = styled(Typography)`
  font-size: 14px;
  letter-spacing: 0.7;
  font-weight: 500;
  max-width: 76px;
`;

export const PlusButton = styled(Button)`
  background-color: #bedbb0;
  padding: 8px 10px;
  min-width: 0;
  &:hover {
    background-color: #bedbb0;
    transform: scale(1.1);
  }
`;

export const HelpWrap = styled(Box)`
  background-color: rgba(246, 246, 247, 1);
  border-radius: 8px;
  padding: 20px;
  margin-top: calc(100vh - 575px);
`;

export const ImgWrap = styled(Box)`
  margin-bottom: 14px;
`;

export const TextWrap = styled(Box)`
  margin-bottom: 18px;
`;

export const HelpIcon = styled.svg`
  width: 20px;
  height: 20px;
`;

export const HelpText = styled(Typography)`
  font-size: 14px;
  letter-spacing: 0.7;
  font-weight: 400;
  color: rgba(22, 22, 22, 1);
`;

export const HelpTitle = styled(Typography)`
  text-transform: none;
  font-size: 12px;
  letter-spacing: 0.7;
  font-weight: 500;
  color: rgba(22, 22, 22, 1);
`;

export const HelpButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  min-width: 0;
  border: 0;
  &:hover {
    background-color: inherit;
    border: 0;
    transform: scale(1.1);
  }
`;

export const HelpTextLink = styled(Link)`
  font-size: 14px;
  letter-spacing: 0.7;
  font-weight: 400;
  color: rgba(190, 219, 176, 1);
  text-decoration: none;
`;

export const LogoutWrap = styled(Box)`
  margin-top: 24px;
  text-transform: none;
`;

export const LogoutButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0;
  min-width: 0;
  border: 0;
  &:hover {
    background-color: inherit;
    border: 0;
    transform: scale(1.1);
  }
`;
export const LogoutText = styled(Typography)`
  text-transform: none;
  font-size: 16px;
  letter-spacing: 0.7;
  font-weight: 500;
  color: rgba(22, 22, 22, 1);
`;
export const LogoutIcon = styled.svg`
  width: 32px;
  height: 32px;
`;

export const BoardsContainer = styled.div`
  position: relative;
`;

export const BoardsList = styled.ul`
  position: absolute;
  width: 120%;
  top: 0;
  left: -24px;
  gap: 4px;

  list-style: none;
  margin: 0;
  padding: 0;

  max-height: 183px;
  overflow-y: auto;

  direction: rtl;

  &::-webkit-scrollbar {
    background-color: #e8e8e8;
    width: 8px;
    border-radius: 12px;
    left: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(22, 22, 22, 0.1);
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    width: 123%;
  }
`;

export const BoardItem = styled.li`
  position: relative;
  direction: ltr;
  height: 61px;
  display: flex;
  align-items: center;
`;

export const IconTitle = styled.svg`
  width: 18px;
  height: 18px;
  fill: black;
  stroke: #16161680;
  margin-right: 8px;
`;

export const Title = styled.div`
  color: #16161680;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Edit = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #16161680;
  margin-right: 8px;
`;

export const Delete = styled.svg`
  width: 16px;
  height: 16px;
  stroke: #16161680;
`;

export const BoardLink = styled(NavLink)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 20px;

  font-size: 14px;
  color: #161616;
  transition: color 200ms linear, background-color 200ms linear;

  text-decoration: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover,
  &:focus {
    background-color: #f6f6f7;
  }

  &.active {
    pointer-events: none;
    background-color: #f6f6f7;
    ${Title} {
      color: #161616;
    }
    ${IconTitle} {
      stroke: #161616;
    }
    ${Edit}, ${Delete} {
      pointer-events: auto;
    }
  }

  &.active::after {
    position: absolute;
    top: 0;
    right: 1px;
    content: '';
    width: 4px;
    height: 100%;
    border-radius: 4px 0px 0px 4px;
    background: #bedbb0;
  }
`;

export const IconsBox = styled.div`
  position: absolute;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
