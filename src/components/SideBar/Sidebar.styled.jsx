import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

export const SideBarStyled = styled(Box)`
  width: 225px;
  padding: 14px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 260px;
    max-width: 260px;
    padding: 24px;
    overflow-x: hidden; //todo
  }
`;

export const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
`;

export const PlusIcon = styled.svg`
  width: 20px;
  height: 20px;
  background-color: transparent;
  color: var(--color-icon-dark);
  &:hover {
    fill: var(--color-green);
  }
`;

export const HelpIcon = styled.svg`
  width: 20px;
  height: 20px;
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
    background-color: var(--color-pale-gray);
    width: 8px;
    border-radius: 12px;
    left: 0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-transparent-black);
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
  /* fill: var(--color-black); */
  stroke: ${props => {
      return props.theme.palette.text.disabled;
    }};
  margin-right: 8px;
`;

export const Title = styled.div`
  /* color: ${props => {
      return props.theme.palette.text.primary;
    }}; */
  width: 200px; 
  text-align: left;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Edit = styled.svg`
  width: 16px;
  height: 16px;
  stroke: inherit;
  margin-right: 8px;
`;

export const Delete = styled.svg`
  width: 16px;
  height: 16px;
  stroke: inherit;
`;

export const BoardLink = styled(NavLink)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 24px 20px;
    
  font-size: 14px;
  color: ${props => {
      return props.theme.palette.text.disabled;
    }};
  transition: color 200ms linear, background-color 200ms linear;

  text-decoration: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover,
  &:focus {
    /* background-color: var(--bg-color-light); */
    background-color: ${props => {
      return props.theme.palette.primary.paper;
    }};
  }

  &.active {
    pointer-events: none;
    background-color: ${props => {
      return props.theme.palette.primary.contrastText;
    }};
    ${Title} {
      width: 140px;
      color: ${props => {
      return props.theme.palette.secondary.dark;
    }};
    }
    ${IconTitle} {
      stroke: ${props => {
      return props.theme.palette.secondary.dark;
    }};
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
    background: var(--color-green);
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
  stroke: ${props => {
      return props.theme.palette.text.disabled;
    }};
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
