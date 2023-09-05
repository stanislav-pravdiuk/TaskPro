import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px 0 20px;
  box-sizing: border-box;
  flex-direction: row;
  margin-bottom: 39px;

  @media screen and (min-width: 768px) {
    margin-bottom: 26px;
    padding: 26px 32px 0 32px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: 10px;
    padding: 10px 24px 0 24px;
  }
`;
export const BoardName = styled.h2`
  color: ${props => {
    return props.theme.palette.text.primary;
  }};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  padding-left: 5px;
  padding-right: 5px;

  border-radius: 8px;

  background-color: ${props => {
    return props.theme.palette.background.paper;
  }};
`;

export const Thumb = styled.div`
  position: relative;
`;
