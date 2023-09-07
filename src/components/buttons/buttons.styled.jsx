import styled from 'styled-components';

const ButtonPlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  background-color: ${props => {
    return props.theme.palette.secondary.info;
  }};
  border-radius: 6px;
  border: none;
`;

const ButtonPlusColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  background-color: ${props => {
    return props.theme.palette.primary.error;
  }};
  border-radius: 6px;
  border: none;
`;

const ButtonUpDateSvg = styled.use`
  width: 16px;
  height: 16px;
  stroke: inherit;
  fill: inherit;
`;

const ButtonClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18px;
  height: 18px;
  padding: 0;
  background-color: transparent;
  border: none;
  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonCloseIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${props => {
    return props.theme.palette.text.primary;
  }};
  stroke: ${props => {
    return props.theme.palette.text.primary;
  }};
  cursor: pointer;
`;

const ButtonCloseSvg = styled.use`
  width: 18px;
  height: 18px;
  fill: inherit;
`;

const ButtonFilter = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 74px;
  height: 25px;
  padding: 5px;
  border-radius: 8px;
  background-color: ${props => {
    return props.theme.palette.background.paper;
  }};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  stroke: ${props => {
    return props.theme.palette.text.primary;
  }};
`;

const ButtonFilterThumb = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ButtonFilterIcon = styled.svg`
  display: flex;
  align-items: center;
  padding-top: 4px;
  width: 20px;
  height: 20px;
  stroke: inherit;
`;

export {
  ButtonFilterThumb,
  ButtonFilterIcon,
  ButtonFilter,
  ButtonCloseSvg,
  ButtonCloseIcon,
  ButtonClose,
  ButtonUpDateSvg,
  ButtonPlusColumn,
  ButtonPlus,
};