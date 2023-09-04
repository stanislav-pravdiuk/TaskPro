import React, { useState } from 'react';
import icon from '../../components/iconSvg/icon.svg';
import {
  BurgerIcon,
  UserImage,
  UserIcon,
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

const Header = ({ click }) => {
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <Appbar>
      <ToolBar>
        <BurgerButton aria-label="open drawer" edge="start" onClick={click}>
          <BurgerIcon>
            <use href={icon + '#icon-menu_40px-1'}></use>
          </BurgerIcon>
        </BurgerButton>
        <HeaderWrap>
          <ThemeComponent />
          <UserText variant="body2">{user.name}</UserText>
          <UserButton onClick={openModal} aria-label="open drawer">
            {currentUserData ? (
              <UserImage src={currentUserData.avatar} alt="User avatar" />
            ) : (
              <UserIcon>
                <use href={icon + '#icon-user-1'}></use>
              </UserIcon>
            )}
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
