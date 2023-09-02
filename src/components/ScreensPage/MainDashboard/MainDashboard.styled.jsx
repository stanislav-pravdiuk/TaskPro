import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-height: 87vh;
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
  border-radius: 8px;
  padding-right: 8px;
  margin: 0;
  margin-bottom: 14px;
  max-height: 69vh;
  overflow-y: auto;
  overflow-x: hidden;
`;
