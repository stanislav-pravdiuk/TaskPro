import React from 'react';
import icon from '../iconSvg/icon.svg';

import {
  ButtonTaskPro,
  ButtonTaskProIcon,
  ButtonTaskProIconSvg,
  ButtonTaskProIconText,
  ButtonTaskProIconThumb,
  ButtonPlus,
  ButtonPlusSvg,
  ButtonPlusIcon,
  ButtonCreate,
  ButtonCreateIcon,
  ButtonCreateSvg,
  ButtonCreateThumb,
  ButtonCreateText,
  ButtonLogOut,
  ButtonLogOutThumb,
  ButtonLogOutIcon,
  ButtonLogOutSvg,
  ButtonLogOutText,
  ButtonTaskProIconThumbViolet,
  ButtonTaskProIconSvgViolet,
  ButtonCreateTextViolet,
  ButtonCreateThumbViolet,
  ButtonCreateIconViolet,
  ButtonCreateSvgViolet,
  ButtonCreateViolet,
  ButtonPlusViolet,
  ButtonPlusIconViolet,
  ButtonPlusSvgViolet,
  ButtonLogOutSvgViolet,
  ButtonLogOutIconViolet,
  ButtonDelete,
  ButtonDeleteIcon,
  ButtonDeleteSvg,
  ButtonUpDate,
  ButtonUpDateIcon,
  ButtonUpDateSvg,
  ButtonClose,
  ButtonCloseIcon,
  ButtonFilter,
  ButtonFilterIcon,
  ButtonFilterThumb,
} from './buttons.styled';
import { useTheme } from '@mui/material';

export const BtnLogOut = () => {
  return (
    <ButtonLogOut>
      <ButtonLogOutThumb>
        <ButtonLogOutIcon>
          <ButtonLogOutSvg href={icon + '#icon-login'}></ButtonLogOutSvg>
        </ButtonLogOutIcon>
      </ButtonLogOutThumb>
      <ButtonLogOutText>Log out </ButtonLogOutText>
    </ButtonLogOut>
  );
};

export const BtnTaskPro = () => {
  return (
    <ButtonTaskPro>
      <ButtonTaskProIconThumb>
        <ButtonTaskProIcon>
          <ButtonTaskProIconSvg
            href={icon + '#icon-Vector-3'}
          ></ButtonTaskProIconSvg>
        </ButtonTaskProIcon>
      </ButtonTaskProIconThumb>
      <ButtonTaskProIconText>Task Pro</ButtonTaskProIconText>
    </ButtonTaskPro>
  );
};

export const BtnCreate = ({ children }) => {
  return (
    <ButtonCreate>
      <ButtonCreateThumb>
        <ButtonCreateIcon>
          <ButtonCreateSvg href={icon + '#icon-plus-1'}></ButtonCreateSvg>
        </ButtonCreateIcon>
      </ButtonCreateThumb>

      <ButtonCreateText>{children}</ButtonCreateText>
    </ButtonCreate>
  );
};

export const BtnPlus = () => {
  return (
    <ButtonPlus>
      <ButtonPlusIcon>
        <ButtonPlusSvg href={icon + '#icon-plus-2'}></ButtonPlusSvg>
      </ButtonPlusIcon>
    </ButtonPlus>
  );
};

export const BtnTaskProViolet = () => {
  return (
    <ButtonTaskPro>
      <ButtonTaskProIconThumbViolet>
        <ButtonTaskProIcon>
          <ButtonTaskProIconSvgViolet
            href={icon + '#icon-Vector-3'}
          ></ButtonTaskProIconSvgViolet>
        </ButtonTaskProIcon>
      </ButtonTaskProIconThumbViolet>
      <ButtonTaskProIconText>Task Pro</ButtonTaskProIconText>
    </ButtonTaskPro>
  );
};

export const BtnCreateViolet = ({ children }) => {
  return (
    <ButtonCreateViolet>
      <ButtonCreateThumbViolet>
        <ButtonCreateIconViolet>
          <ButtonCreateSvgViolet
            href={icon + '#icon-plus-2'}
          ></ButtonCreateSvgViolet>
        </ButtonCreateIconViolet>
      </ButtonCreateThumbViolet>

      <ButtonCreateTextViolet>{children}</ButtonCreateTextViolet>
    </ButtonCreateViolet>
  );
};

export const BtnPlusViolet = () => {
  return (
    <ButtonPlusViolet>
      <ButtonPlusIconViolet>
        <ButtonPlusSvgViolet href={icon + '#icon-plus-1'}></ButtonPlusSvgViolet>
      </ButtonPlusIconViolet>
    </ButtonPlusViolet>
  );
};

export const BtnLogOutViolet = () => {
  return (
    <ButtonLogOut>
      <ButtonLogOutThumb>
        <ButtonLogOutIconViolet>
          <ButtonLogOutSvgViolet
            href={icon + '#icon-login-3'}
          ></ButtonLogOutSvgViolet>
        </ButtonLogOutIconViolet>
      </ButtonLogOutThumb>
      <ButtonLogOutText>Log out </ButtonLogOutText>
    </ButtonLogOut>
  );
};

export const BtnDelete = () => {
  return (
    <ButtonDelete>
      <ButtonDeleteIcon>
        <ButtonDeleteSvg href={icon + '#icon-trash-04'}></ButtonDeleteSvg>
      </ButtonDeleteIcon>
    </ButtonDelete>
  );
};

export const BtnUpDate = () => {
  return (
    <ButtonUpDate>
      <ButtonUpDateIcon>
        <ButtonUpDateSvg href={icon + '#icon-pencil-01'}></ButtonUpDateSvg>
      </ButtonUpDateIcon>
    </ButtonUpDate>
  );
};

export const BtnRight = () => {
  return (
    <ButtonUpDate>
      <ButtonUpDateIcon>
        <ButtonUpDateSvg
          href={icon + '#icon-arrow-circle-broken-right'}
        ></ButtonUpDateSvg>
      </ButtonUpDateIcon>
    </ButtonUpDate>
  );
};

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
