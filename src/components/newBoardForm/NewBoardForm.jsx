import React from 'react';
import { useState } from 'react';
import images from '../iconSvg/images.js';

import sprite from '../iconSvg/icon.svg';
import {
  FormContainer,
  Title,
  Input,
  Text,
  Icon,
  BgColor,
  Button,
  IconList,
  BgList,
  RadioButton,
} from './NewBoardForm.styled';
import BtnAdd from 'components/ScreensPage/btnAdd/BtnAdd.jsx';
import { useAddBoardMutation } from 'redux/boards/boardsApi';

const NewBoardForm = ({ closeModal, formTitle, btnText, children }) => {
  const [title, setTitle] = useState();
  const [icon, setIcon] = useState();
  const [bgImage, setBgImage] = useState(null);

  const [addBoard] = useAddBoardMutation();

  const inputTitleHandler = e => {
    setTitle(e.target.value);
  };

  const IconChangeHandler = e => {
    setIcon(e.target.value);
  };

  const BgImageChangeHandler = data => {
    setBgImage(data);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const data = { title, background: { ...bgImage } };

    console.log(data);

    addBoard({ data });
    closeModal();
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>{formTitle}</Title>
      <Input
        type="text"
        placeholder="Title"
        name="title"
        onChange={e => inputTitleHandler(e)}
      />

      <Text>Icons</Text>
      <IconList>
        <li>
          <label>
            <RadioButton
              type="radio"
              name="icon"
              value="icon-Project"
              onChange={e => IconChangeHandler(e)}
            />
            <Icon>
              <use href={sprite + '#icon-Project'}></use>
            </Icon>
          </label>
        </li>
        <li>
          <label>
            <RadioButton
              type="radio"
              name="icon"
              value="icon-star-04"
              onChange={e => IconChangeHandler(e)}
            />
            <Icon>
              <use href={sprite + '#icon-star-04'}></use>
            </Icon>
          </label>
        </li>
        <li>
          <label>
            <RadioButton
              type="radio"
              name="icon"
              value="icon-loading-03"
              onChange={e => IconChangeHandler(e)}
            />
            <Icon>
              <use href={sprite + '#icon-loading-03'}></use>
            </Icon>
          </label>
        </li>
        <li>
          <label>
            <RadioButton
              type="radio"
              name="icon"
              value="icon-puzzle-piece-02"
              onChange={e => IconChangeHandler(e)}
            />
            <Icon>
              <use href={sprite + '#icon-puzzle-piece-02'}></use>
            </Icon>
          </label>
        </li>
        <li>
          <label>
            <RadioButton
              type="radio"
              name="icon"
              value="icon-container"
              onChange={e => IconChangeHandler(e)}
            />
            <Icon>
              <use href={sprite + '#icon-container'}></use>
            </Icon>
          </label>
        </li>
        <li>
          <label>
            <RadioButton
              type="radio"
              name="icon"
              value="icon-lightning-02"
              onChange={e => IconChangeHandler(e)}
            />
            <Icon>
              <use href={sprite + '#icon-lightning-02'}></use>
            </Icon>
          </label>
        </li>
        <li>
          <label>
            <RadioButton
              type="radio"
              name="icon"
              value="icon-colors"
              onChange={e => IconChangeHandler(e)}
            />
            <Icon>
              <use href={sprite + '#icon-colors'}></use>
            </Icon>
          </label>
        </li>
        <li>
          <label>
            <RadioButton
              type="radio"
              name="icon"
              value="icon-hexagon-01"
              onChange={e => IconChangeHandler(e)}
            />
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
            <RadioButton
              type="radio"
              name="bgImage"
              onChange={() => BgImageChangeHandler(null)}
            />
            <img src={images[0].min} alt="bgImage" />
          </label>
        </BgColor>
        {images.map(image => (
          <BgColor key={image.min}>
            <label>
              <RadioButton
                type="radio"
                name="bgImage"
                onChange={() => BgImageChangeHandler(image)}
              />
              <img src={image.min} alt="bgImage" />
            </label>
          </BgColor>
        ))}
      </BgList>
      {children}
      <BtnAdd btnTitle={btnText} btnColor={'#BEDBB0'} />
    </FormContainer>
  );
};

export default NewBoardForm;
