import styled from 'styled-components';

const FormContainer = styled.div`
  /* padding: 24px; */
  background: #fcfcfc;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-style: medium;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
`;

const Input = styled.input`
  width: 284px;
  height: 49px;
  left: 24px;
  top: 24px;
  padding: 0px;
  padding-left: 18px;

  color: #161616;
  background: #fcfcfc;
  /* opacity: 0.4; */
  border: 1px solid #bedbb0;
  /* padding-left: 18px; */
  border-radius: 8px;
`;

const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 14px;

  font-style: medium;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
`;

const Icon = styled.svg`
  height: 18px;
  width: 18px;
  stroke: #161616;
  margin-right: 8px;
`;

const BgColor = styled.button`
  display: inline-block;
  padding: 0px;
  height: 28px;
  width: 28px;
  margin: 2px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
`;

const ActiveOption = styled.button`
  transform: scale(1.2);
`;

const Button = styled.button`
  width: 302px;
  height: 49px;
  margin-top: 40px;
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
  BgColor,
  ActiveOption,
};
