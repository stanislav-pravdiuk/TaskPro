import styled from 'styled-components';

export const BtnBox = styled.ul`
  border-radius: 8px;
  background: var(--color-cream);
  box-shadow: 0px 4px 16px 0px var(--color-dark-gray);
  padding: 18px;
  list-style-type: none;
  min-width: 99px;
  height: auto;

  position: absolute;
  left: 30%;
`;

export const BtnTitle = styled.p`
  color: var(--color-dark);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-right: 8px;
`;

export const Icon = styled.svg`
  stroke: var(--color-dark);
  width: 16px;
  height: 16px;
`;

export const BtnRight = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover,
  &:focus {
    ${Icon} {
      stroke: var(--color-green);
    }
    ${BtnTitle} {
      color: var(--color-green);
    }
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
