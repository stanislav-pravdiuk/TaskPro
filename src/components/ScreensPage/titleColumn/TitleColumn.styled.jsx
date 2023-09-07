import styled from 'styled-components';

export const Container = styled.div`
  width: 334px;
  min-height: 56px;
  border-radius: 8px;
  background: ${props => props.theme.palette.background.paper};
  color: ${props => props.theme.palette.text.primary};
  stroke: ${props => props.theme.palette.primary.info};
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h3`
  color: inherit;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;
export const IconsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

export const IconsButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Icon = styled.svg`
  width: 16px;
  height: 16px;
  stroke: inherit;
`;
