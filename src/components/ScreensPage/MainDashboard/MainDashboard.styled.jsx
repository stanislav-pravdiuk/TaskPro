import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  padding: 0 24px 16px 0;

  overflow-x: auto;

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
export const Column = styled.div``;

export const GalleryCards = styled.ul`
  list-style: none;
  padding: 0;
  padding-right: 8px;
  margin: 0;
  min-height: 70vh;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
`;