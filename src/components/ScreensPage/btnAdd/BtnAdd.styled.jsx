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
`;
export const PlusIcon = styled.svg`
  width: 14px;
  height: 14px;
  stroke: var(--color-white);
`;

export const TitleButton = styled.p`
  color: var(--color-dark);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 8px;
`;
