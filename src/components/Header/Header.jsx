import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import icon from '../../components/iconSvg/icon.svg';
import { Box, Button, Typography } from '@mui/material';
import { BurgerIcon,UserImage, UserIcon } from './Header.styled';
import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import ProfileEditModal from 'components/profileEditModal/ProfileEditModal';
import MainModal from 'components/MainModal/MainModal';
import { ThemeComponent } from 'components/Theme/ThemeComponent';

const Header = ({ click }) => {
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(user.theme);

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
    <AppBar
      position="fixed"
      sx={{ width: '100%', backgroundColor: '#FCFCFC', boxShadow: 'none' }}
    >
      <Toolbar
        sx={{
          paddingRight: '32px',
          paddingLeft: '32px',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Button
          aria-label="open drawer"
          edge="start"
          onClick={click}
          sx={{
            '@media (min-width: 1440px)': {
              display: { xs: 'block', sm: 'none' },
            },
            padding: 0,
            minWidth: 0,
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          <BurgerIcon>
            <use href={icon + '#icon-menu_40px-1'}></use>
          </BurgerIcon>
        </Button>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'end',
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Box sx={{
            marginRight: '30px'            
          }}>            
            <ThemeComponent />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(22, 22, 22, 1)',
              fontFamily: 'Poppins',
              width: 'auto',
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: 0.7,
              marginRight: '8px',
            }}
          >
            {user.name}
          </Typography>
          <Button
            sx={{
              padding: 0,
              minWidth: 0,
              border: 0,
              '&:hover': {
                backgroundColor: 'inherit',
                border: 0,
                transform: 'scale(1.1)',
              },
            }}
            onClick={openModal}
            aria-label="open drawer"
          >
            {currentUserData ? (
              <UserImage src={currentUserData.avatar} alt="User avatar" />
            ) : (
              <UserIcon>
                <use href={icon + '#icon-user-1'}></use>
              </UserIcon>
            )}
          </Button>
          <MainModal modalIsOpen={isModalOpen} closeModal={closeModal}>
            <ProfileEditModal user={currentUserData} modalClose={closeModal} />
          </MainModal>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
