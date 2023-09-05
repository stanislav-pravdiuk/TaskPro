import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const Container = styled.div`
  width: 334px;
  height: auto;
  border-radius: 8px;
  background-color: ${props => {
    return props.theme.palette.background.paper;
  }};
  color: ${props => {
    return props.theme.palette.text.secondary;
  }};
  stroke: ${props => {
    return props.theme.palette.primary.info;
  }};
  padding: 14px 24px;
  margin-bottom: 8px;
`;
export const Title = styled.h4`
  color: ${props => {
    return props.theme.palette.text.primary;
  }};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;
export const Description = styled.div`
  width: 100%;
  color: inherit;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 14px;
`;
export const BottomBar = styled.div`
  margin-top: 14px;
  border-top: 1px solid;
  border-color: ${props => {
    return props.theme.palette.secondary.main;
  }};
  padding-top: 14px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const OptionsBox = styled.div`
  display: flex;
`;

export const Options = styled.div`
  margin-right: 14px;
`;
export const PriorityBox = styled.div`
  display: flex;
  align-items: center;
`;

export const TextOptions = styled.p`
  color: inherit;
  font-family: Poppins;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Text = styled.div`
  color: inherit;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Elipce = styled.div`
  border-radius: 100%;
  width: 12px;
  height: 12px;
  margin-right: 4px;
`;
export const IconsBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  stroke: inherit;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TransferRight = styled.svg`
  margin-left: auto;
  width: 16px;
  height: 16px;
  stroke: inherit;
`;
export const Edit = styled.svg`
  width: 16px;
  height: 16px;
  stroke: inherit;
`;
export const Delete = styled.svg`
  width: 16px;
  height: 16px;
  stroke: inherit;
`;

export const MenuMUI = styled(Menu)`
  overflow: auto;

  direction: rtl;

  ::-webkit-scrollbar {
    background-color: var(--color-pale-gray);
    width: 4px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--color-transparent-black);
    border-radius: 12px;
    width: 4px;
  }
`;

export const MenuItemMUI = styled(MenuItem)`
  display: flex;
  gap: 8px;
  justify-content: space-between;

  stroke: ${props => {
    return props.theme.palette.text.secondary;
  }};

  direction: ltr;

  &:hover {
    color: var(--color-green);
    stroke: var(--color-green);
  }
`;

export const IconDeadline = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${props => {
    return props.theme.palette.text.hint;
  }};
`;
