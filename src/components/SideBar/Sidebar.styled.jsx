import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
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
  width: 123%;
  top: 0;
  left: -24px;
  gap: 4px;

  list-style: none;
  margin: 0;
  padding: 0;

  // background-color: tomato;

  min-height: 126px;
  max-height: 226px;
  overflow-y: auto;
`;

export const BoardItem = styled.li`
  height: 61px;
  display: flex;
  align-items: center;
`;

export const IconTitle = styled.svg`
  width: 18px;
  height: 18px;
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
