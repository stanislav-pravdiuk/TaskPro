import styled from 'styled-components';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';

export const Container = styled.div`
  width: 334px;
  height: auto;
  border-radius: 8px;
  background: #fff;
  padding: 14px 20px;
  margin-bottom: 8px;
`;
export const Title = styled.h4`
  color: #161616;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 0;
`;
export const Description = styled.div`
  color: rgba(22, 22, 22, 0.7);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 14px;
`;
export const BottomBar = styled.div`
  margin-top: 14px;
  border-top: 1px solid rgba(22, 22, 22, 0.1);
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
  color: rgba(22, 22, 22, 0.5);
  font-family: Poppins;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Text = styled.div`
  color: #161616;
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
  stroke: #16161680;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TransferRight = styled.svg`
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
  max-height: 180px;
  overflow: auto;

  direction: rtl;

  ::-webkit-scrollbar {
    background-color: #e8e8e8;
    width: 4px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(22, 22, 22, 0.1);
    border-radius: 12px;
    width: 4px;
  }
`;

export const MenuItemMUI = styled(MenuItem)`
  display: flex;
  gap: 8px;
  justify-content: space-between;
  stroke: #16161680;

  direction: ltr;

  &:hover,
  &:focus {
    color: #bedbb0;
    stroke: #bedbb0;
  }
`;
