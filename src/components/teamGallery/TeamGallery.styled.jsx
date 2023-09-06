import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: opacity;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background: #fff;
  padding: 18px;
  width: 200px;
`;
export const UserPhotoBox = styled.div`
  width: 68px;
  height: 68px;
  margin-bottom: 14px;
  border-radius: 8px;
  overflow: hidden;
`;
export const UserPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 14px;
`;
export const Name = styled.h3`
  color: var(--color-text-dark-main);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const Position = styled.p`
  color: var(--color-text-dark-07);
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  text-align: center;
`;
export const LinkBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Link = styled.a`
  margin: 0 8px;
`;

export const IconLink = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--color-text-dark);
`;
