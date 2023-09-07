import React from 'react';
import icon from '../../images/icons.svg';
import {
  ButtonUpDateSvg,
  ButtonClose,
  ButtonCloseIcon,
  ButtonFilter,
  ButtonFilterIcon,
  ButtonFilterThumb,
} from './buttons.styled';
import { useTheme } from '@mui/material';

export const BtnClose = () => {
  const theme = useTheme();

  return (
    <ButtonClose>
      <ButtonCloseIcon theme={theme}>
        <ButtonUpDateSvg href={icon + '#icon-x-close'}></ButtonUpDateSvg>
      </ButtonCloseIcon>
    </ButtonClose>
  );
};

export const BtnCloseBlack = () => {
  const theme = useTheme();

  return (
    <ButtonClose>
      <ButtonCloseIcon theme={theme}>
        <ButtonUpDateSvg href={icon + '#icon-x-close-2'}></ButtonUpDateSvg>
      </ButtonCloseIcon>
    </ButtonClose>
  );
};

export const BtnFilter = ({ color, onClick }) => {
  const theme = useTheme();

  return (
    <ButtonFilter onClick={onClick} theme={theme}>
      <ButtonFilterThumb>
        <ButtonFilterIcon>
          <use href={icon + '#icon-filter'}></use>
        </ButtonFilterIcon>
      </ButtonFilterThumb>
      Filters
    </ButtonFilter>
  );
};