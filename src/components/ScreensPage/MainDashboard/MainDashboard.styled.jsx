import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 78vh;
  display: flex;
  padding: 0 20px 0 20px;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    background-color: ${props => props.theme.palette.background.disabled};
    width: 8px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.palette.background.hint};
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
    padding: 0 32px 0 32px;
    max-height: 82vh;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 24px 0 24px;
    max-height: 87vh;
  }
`;

export const ColumnsList = styled.ul`
  max-height: 100%;
  display: flex;
  gap: 20px;
  list-style: none;
  margin: 0;
  margin-right: 30px;

  @media screen and (min-width: 768px) {
    gap: 24px;
    margin-right: 34px;
  }
`;

export const ColumnsListItem = styled.li``;

export const Column = styled.div`
  display: flex;
  gap: 14px;
  flex-direction: column;
`;

export const GalleryCards = styled.ul`
  list-style: none;
  padding: 0;
  border-radius: 8px;
  padding-right: 8px;
  margin: 0;
  max-height: 58vh;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (min-width: 768px) {
    max-height: 63vh;
  }

  @media screen and (min-width: 1440px) {
    max-height: 69vh;
  }
`;
