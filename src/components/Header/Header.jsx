import React, { useState } from 'react';
import icon from '../../components/iconSvg/icon.svg';
import {
  BurgerIcon,
  UserImage,
  // UserIcon,
  Appbar,
  ToolBar,
  BurgerButton,
  HeaderWrap,
  UserText,
  UserButton,
} from './Header.styled';
import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import ProfileEditModal from 'components/profileEditModal/ProfileEditModal';
import MainModal from 'components/MainModal/MainModal';
import { ThemeComponent } from 'components/Theme/ThemeComponent';
import avatarLight from '../../images/userAvatarLight.jpg';
import avatarDark from '../../images/userAvatarDark.jpg';
import { useTheme } from '@mui/material';

const Header = ({ click }) => {
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = user.theme;

  const themeObj = useTheme();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const currentUserData = {
    avatar: user.avatar,
    login: user.name,
    email: user.email,
  };

  return (
    <Appbar
      sx={{
        bgcolor: 'background.paper',
      }}
    >
      <ToolBar>
        <BurgerButton aria-label="open drawer" edge="start" onClick={click}>
          <BurgerIcon theme={themeObj}>
            <use href={icon + '#icon-menu_40px-1'}></use>
          </BurgerIcon>
        </BurgerButton>
        <HeaderWrap>
          <ThemeComponent />
          <UserText
            variant="body2"
            sx={{
              color: 'text.primary',
            }}
          >
            {user.name}
          </UserText>
          <UserButton onClick={openModal} aria-label="open drawer">
            {theme === 'dark' ? (
              <UserImage
                src={currentUserData.avatar || avatarDark}
                alt="Avatar"
              />
            ) : (
              <UserImage
                src={currentUserData.avatar || avatarLight}
                alt="Avatar"
              />
            )}
            {/* {currentUserData.avatar ? (
              <UserImage src={currentUserData.avatar} alt="User avatar" />
            ) : (
              <UserIcon>
                <use href={icon + '#icon-user-1'}></use>
              </UserIcon>
            )} */}
          </UserButton>
          <MainModal modalIsOpen={isModalOpen} closeModal={closeModal}>
            <ProfileEditModal user={currentUserData} modalClose={closeModal} />
          </MainModal>
        </HeaderWrap>
      </ToolBar>
    </Appbar>
  );
};

export default Header;
