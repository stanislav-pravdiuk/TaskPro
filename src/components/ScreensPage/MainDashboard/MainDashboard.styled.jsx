import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 87vh;
  display: flex;
  padding: 0 24px 0 0;
  gap: 24px;
  overflow-x: auto;
  overflow-y: hidden;

  ::-webkit-scrollbar {
    background-color: #e8e8e8;
    width: 8px;
    border-radius: 12px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(22, 22, 22, 0.1);
    border-radius: 12px;
  }
`;

export const ColumnsList = styled.ul`
  max-height: 100%;
  display: flex;
  gap: 24px;
  list-style: none;
  margin: 0;
  padding: 0 0 0 24px;
`;

export const ColumnsListItem = styled.li`
  height: 100%;
`;

export const Column = styled.div`
  display: flex;
  height: 100%;
  gap: 14px;
  flex-direction: column;
`;

export const GalleryCards = styled.ul`
  list-style: none;
  padding: 0;
  border-radius: 8px;
  padding-right: 8px;
  margin: 0;
  max-height: 69vh;
  overflow-y: auto;
  overflow-x: hidden;
`;
