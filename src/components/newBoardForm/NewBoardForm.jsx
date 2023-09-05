import React, { useState } from 'react';
import { Formik } from 'formik';

import images from '../iconSvg/images.js';
import bgImageLight from '../../images/bgImage-light.jpg';
import bgImageDark from '../../images/bgImage-dark.jpg';

import sprite from '../iconSvg/icon.svg';
import {
  FormContainer,
  Title,
  Input,
  Text,
  Icon,
  Img,
  BgColor,
  IconList,
  BgList,
  RadioField,
  RadioFieldBg,
  FormikContainer,
  CloseButton,
} from './NewBoardForm.styled';
import BtnAdd from 'components/ScreensPage/btnAdd/BtnAdd';
import { BtnCloseBlack } from 'components/buttons/buttons.jsx';
import { useSelector } from 'react-redux';
import { selectTheme } from 'redux/auth/authSelectors.js';

const NewBoardForm = ({
  formTitle,
  boardTitle,
  boardIcon = '#icon-Project',
  btnText,
  handleSubmit,
  closeModal,
}) => {
  const [background, setbackground] = useState();
  const theme = useSelector(selectTheme)

  const formSubmit = values => {
    const data = { ...values, background };

    handleSubmit(data, formTitle);
  };

  const initialValues = {
    title: boardTitle || '',
    icon: boardIcon,
    background: 'none',
  };

  const BgImageChangeHandler = data => {
    setbackground(data);
  };

  return (
    <FormContainer>
      <CloseButton type="button" onClick={closeModal}>
        <BtnCloseBlack />
      </CloseButton>
      <Title>{formTitle}</Title>
      <Formik initialValues={initialValues} onSubmit={formSubmit}>
        <FormikContainer>
          <Input type="text" placeholder="Title" name="title" />

          <Text>Icons</Text>
          <IconList>
            <li>
              <label>
                <RadioField type="radio" name="icon" value="#icon-Project" />
                <Icon>
                  <use href={sprite + '#icon-Project'}></use>
                </Icon>
              </label>
            </li>
            <li>
              <label>
                <RadioField type="radio" name="icon" value="#icon-star-04" />
                <Icon>
                  <use href={sprite + '#icon-star-04'}></use>
                </Icon>
              </label>
            </li>
            <li>
              <label>
                <RadioField type="radio" name="icon" value="#icon-loading-03" />
                <Icon>
                  <use href={sprite + '#icon-loading-03'}></use>
                </Icon>
              </label>
            </li>
            <li>
              <label>
                <RadioField
                  type="radio"
                  name="icon"
                  value="#icon-puzzle-piece-02"
                />
                <Icon>
                  <use href={sprite + '#icon-puzzle-piece-02'}></use>
                </Icon>
              </label>
            </li>
            <li>
              <label>
                <RadioField type="radio" name="icon" value="#icon-container" />
                <Icon>
                  <use href={sprite + '#icon-container'}></use>
                </Icon>
              </label>
            </li>
            <li>
              <label>
                <RadioField
                  type="radio"
                  name="icon"
                  value="#icon-lightning-02"
                />
                <Icon>
                  <use href={sprite + '#icon-lightning-02'}></use>
                </Icon>
              </label>
            </li>
            <li>
              <label>
                <RadioField type="radio" name="icon" value="#icon-colors" />
                <Icon>
                  <use href={sprite + '#icon-colors'}></use>
                </Icon>
              </label>
            </li>
            <li>
              <label>
                <RadioField type="radio" name="icon" value="#icon-hexagon-01" />
                <Icon>
                  <use href={sprite + '#icon-hexagon-01'}></use>
                </Icon>
              </label>
            </li>
          </IconList>

          <Text>Background</Text>
          <BgList>
            <BgColor>
              <label>
                <RadioFieldBg type="radio" name="background" value="none" />
                {theme === "dark" ?
                  (<Img src={bgImageDark} alt="bgImage" />)
                  : (<Img src={bgImageLight} alt="bgImage" />)}
              </label>
            </BgColor>
            {images.map(image => (
              <BgColor key={image.min}>
                <label>
                  <RadioFieldBg
                    type="radio"
                    name="background"
                    onChange={() => BgImageChangeHandler(image)}
                  />
                  <Img src={image.min} alt="bgImage" />
                </label>
              </BgColor>
            ))}
          </BgList>
          <BtnAdd btnTitle={btnText} btnColor={'#BEDBB0'} />
        </FormikContainer>
      </Formik>
    </FormContainer>
  );
};

export default NewBoardForm;
