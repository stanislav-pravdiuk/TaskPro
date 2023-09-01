import styled from 'styled-components';

const FormContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: #fcfcfc;
  border-radius: 8px;
  width: 100vw;
  max-width: 350px;
`;

const Title = styled.h2`
  font-style: medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  margin: 0;
`;

const Input = styled.input`
  display: inline-block;
  width: 100%;
  padding: 18px 14px;

  color: #161616;
  background: #fcfcfc;
  border: 1px solid #bedbb0;
  border-radius: 8px;
  &:placeholder-shown {
    color: #161616;
    font-size: 14px;
  }
`;

const Text = styled.p`
  font-style: medium;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`;

const IconList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  gap: 8px;
`;

const Icon = styled.svg`
  height: 18px;
  width: 18px;
  stroke: #16161680;
`;

const BgList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 16px;
  max-width: 256px;
`;

const Img = styled.img`
  border-radius: 6px;
`;

const BgColor = styled.li`
  display: inline-block;
  padding: 0px;
  height: 28px;
  width: 28px;
  margin: 2px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

const RadioButton = styled.input`
  appearance: none;
  position: absolute;

  &:checked + ${Icon} {
    stroke: #161616;
  }

  &:checked + ${Img} {
    transform: scale(1.1);
    transform: scale(0.95);
    outline: 1px solid #bedbb0;
  }
`;

const Button = styled.button`
  position: relative;
  width: 100%;
  height: 49px;
  padding: 0px;

  font-style: medium;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.02em;

  background: #bedbb0;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  cursor: pointer;
`;

export {
  FormContainer,
  Input,
  Title,
  Text,
  Button,
  Icon,
  Img,
  BgColor,
  IconList,
  BgList,
  RadioButton,
};
