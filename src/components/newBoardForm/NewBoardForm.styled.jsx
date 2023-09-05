import styled from 'styled-components';
import { Form, Field } from 'formik';

const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: ${props => {
    return props.theme.palette.background.paper;
  }};
  color: ${props => {
    return props.theme.palette.text.secondary;
  }};
  border-radius: 8px;
  width: 100vw;
  max-width: 350px;
`;

const Title = styled.h2`
  font-style: medium;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: -0.02em;
  font-family: 'Poppins';
  margin: 0;
`;

const FormikContainer = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  padding: 18px 14px;

  color: ${props => {
    return props.theme.palette.text.primary;
  }};
  background: inherit;
  border: 1px solid
    ${props => {
      return props.theme.palette.text.hint;
    }};
  border-radius: 8px;
  outline: none;

  &:placeholder-shown {
    color: ${props => {
      return props.theme.palette.text.secondary;
    }};
    font-size: 14px;
  }
`;

const Text = styled.p`
  font-family: 'Poppins';
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
  stroke: ${props => {
    return props.theme.palette.primary.info;
  }};
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

const RadioField = styled(Field)`
  appearance: none;
  position: absolute;

  &:checked + ${Icon} {
    stroke: ${props => {
      return props.theme.palette.text.primary;
    }};
  }
`;

const RadioFieldBg = styled.input`
  appearance: none;
  position: absolute;

  &:checked + ${Img} {
    transform: scale(0.95);
    outline: 1px solid var(--color-green);
  }
`;

const Button = styled.button`
  position: relative;
  width: 100%;
  height: 49px;
  padding: 0px;

  font-family: 'Poppins';
  font-style: medium;
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.02em;

  background: var(--color-green);
  border-radius: 8px;
  border: 1px solid var(--color-green);
  cursor: pointer;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
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
  RadioField,
  FormikContainer,
  RadioFieldBg,
  CloseButton,
};
