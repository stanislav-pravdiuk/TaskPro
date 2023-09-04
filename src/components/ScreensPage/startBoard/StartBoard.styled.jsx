import styled from 'styled-components';

export const Container = styled.div`
  min-height: 90vh;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextBox = styled.div`
  width: 486px;

  color: var(--color-text-card);

  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
`;

export const Link = styled.a`
  color: var(--color-green);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;
