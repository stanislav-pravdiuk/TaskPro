import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 334px;
  height: 56px;
  border-radius: 8px;

  padding: 20px 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 200ms linear;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.palette.text.error};
  }

  background-color: ${props => {
    return props.theme.palette.text.hint;
  }};
`;
export const PlusIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => {
    return props.theme.palette.secondary.error;
  }};
`;

export const TitleButton = styled.p`
  color: ${props => {
    return props.theme.palette.secondary.info;
  }};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 8px;
`;

export const ContainerColumn = styled.button`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 334px;
  height: 56px;
  border-radius: 8px;

  padding: 20px 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => {
    return props.theme.palette.background.paper;
  }};
`;
export const PlusIconColumn = styled.svg`
  width: 14px;
  height: 14px;
  stroke: ${props => {
    return props.theme.palette.background.paper;
  }};
`;

export const TitleButtonColumn = styled.p`
  color: ${props => {
    return props.theme.palette.text.primary;
  }};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 8px;
`;
