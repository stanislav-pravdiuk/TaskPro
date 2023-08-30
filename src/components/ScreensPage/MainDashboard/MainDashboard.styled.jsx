import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  padding: 0 24px;

  overflow-x: auto;
`;
export const Column = styled.div``;

export const GalleryCards = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  min-height: 70vh;
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
`;
