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

const NewBoardForm = () => {
  const [title, setTitle] = useState();
  const [icon, setIcon] = useState();
  const [bgImage, setBgImage] = useState();

  const inputTitleHandler = e => {
    setTitle(e.target.value);
  };

  const IconChangeHandler = e => {
    setIcon(e.target.value);
  };

  const BgImageChangeHandler = e => {
    setBgImage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const data = { title, icon, bgImage };
    console.log(data);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Title>New board</Title>
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
        {images.map(image => (
          <BgColor>
            <label>
              <RadioButton
                type="radio"
                name="bgImage"
                value={image.min}
                onChange={e => BgImageChangeHandler(e)}
              />
              <img src={image.min} alt="bgImage" />
            </label>
          </BgColor>
        ))}
      </BgList>

      <Button type="submit">Create</Button>
    </FormContainer>
  );
};

export default NewBoardForm;
