import React from 'react';
import { useState } from 'react';

import sprite from '../iconSvg/icon.svg';
import {
  FormContainer,
  Title,
  Input,
  Text,
  Icon,
  BgColor,
  Button,
} from './NewBoardForm.styled';

const NewBoardForm = () => {
  const colorPickerOptions = [
    { label: 'red', color: '#F44336' },
    { label: 'green', color: '#4CAF50' },
    { label: 'blue', color: '#2196F3' },
    { label: 'grey', color: '#607D8B' },
    { label: 'pink', color: '#E91E63' },
    { label: 'indigo', color: '#3F51B5' },
  ];

  const [activeOptionIdx, setActiveOptionIdx] = useState(0);
  const [bgImage, setBgImage] = useState();

  return (
    <FormContainer>
      <Title>New board</Title>
      <Input type="text" placeholder="Title" />

      <Text>Icons</Text>
      <>
        <Icon>
          <use href={sprite + '#icon-Project'}></use>
        </Icon>
        <Icon>
          <use href={sprite + '#icon-star-04'}></use>
        </Icon>
        <Icon>
          <use href={sprite + '#icon-loading-03'}></use>
        </Icon>
        <Icon>
          <use href={sprite + '#icon-puzzle-piece-02'}></use>
        </Icon>
        <Icon>
          <use href={sprite + '#icon-container'}></use>
        </Icon>
        <Icon>
          <use href={sprite + '#icon-lightning-02'}></use>
        </Icon>
        <Icon>
          <use href={sprite + '#icon-colors'}></use>
        </Icon>
        <Icon>
          <use href={sprite + '#icon-hexagon-01'}></use>
        </Icon>
      </>

      <Text>Background</Text>
      <div>
        {colorPickerOptions.map(({ label, color }, index) => (
          <BgColor
            key={label}
            aria-label={label}
            style={{
              backgroundColor: color,
              //   backgroundImage: index === activeOptionIdx ? 'color' : 'none',
              //   transform: index === activeOptionIdx ? 'scale(1.2)' : 'none',
            }}
            onClick={(() => setActiveOptionIdx(index), () => setBgImage(color))}
          ></BgColor>
        ))}
      </div>

      <Button type="submit">Create</Button>
    </FormContainer>
  );
};

export default NewBoardForm;
