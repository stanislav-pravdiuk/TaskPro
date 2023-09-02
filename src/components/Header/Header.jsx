import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import icon from '../../components/iconSvg/icon.svg';
import { Box, Button, Typography } from '@mui/material';
import { BurgerIcon, UserIcon, ChevronIcon } from './Header.styled';
import { selectUser } from 'redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import ProfileEditModal from 'components/profileEditModal/ProfileEditModal';
import MainModal from 'components/MainModal/MainModal';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';

const Header = ({ click }) => {
  const user = useSelector(selectUser);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const backgroundColor = hovered ? 'transparent' : 'transparent';

  const handleListboxStyle = () => {
    const listbox = document.querySelector('[role="listbox"]');
    if (listbox) {
      listbox.style.zIndex = '9999';
      listbox.style.borderColor = 'white';
      listbox.style.minWidth = '98px';
    }
  };

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
          <Box>
            <Select
              sx={{
                marginRight: '14px',
                border: 'none',
                fontWeight: 500,
                color: 'rgba(22, 22, 22, 0.8)',
                fontSize: '14px',
                lineHeight: 0.7,
                fontFamily: 'Poppins',
                '&:hover': {
                  backgroundColor: 'transparent',
                },
                [`& .${selectClasses.indicator}`]: {
                  transition: '0.2s',
                  [`&.${selectClasses.expanded}`]: {
                    transform: 'rotate(-180deg)',
                  },
                },
              }}
              placeholder={
                <Typography
                  sx={{
                    color: '#000',
                    fontFamily: 'Poppins',
                    fontSize: '14px',
                    lineHeight: 0.7,
                  }}
                >
                  Theme
                </Typography>
              }
              indicator={
                <ChevronIcon>
                  <use href={icon + '#icon-theme'}></use>
                </ChevronIcon>
              }
              onClick={handleListboxStyle}
            >
              <Option
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                  backgroundColor: backgroundColor,
                }}
                sx={{
                  fontWeight: 500,
                  color: 'rgba(22, 22, 22, 0.8)',
                  fontSize: '14px',
                  lineHeight: 0.7,
                  fontFamily: 'Poppins',
                  '&:hover': {
                    color: 'rgba(190, 219, 176, 1)',
                  },
                }}
                value="Light"
              >
                Light
              </Option>
              <Option
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                  backgroundColor: backgroundColor,
                }}
                sx={{
                  fontWeight: 500,
                  color: 'rgba(22, 22, 22, 0.8)',
                  fontSize: '14px',
                  lineHeight: 0.7,
                  fontFamily: 'Poppins',
                  '&:hover': {
                    color: 'rgba(190, 219, 176, 1)',
                  },
                }}
                value="Dark"
              >
                Dark
              </Option>
              <Option
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                  backgroundColor: backgroundColor,
                }}
                sx={{
                  border: 'none',
                  fontWeight: 500,
                  color: 'rgba(22, 22, 22, 0.8)',
                  fontSize: '14px',
                  lineHeight: 0.7,
                  fontFamily: 'Poppins',
                  '&:hover': {
                    color: 'rgba(190, 219, 176, 1)',
                  },
                }}
                value="Violet"
              >
                Violet
              </Option>
            </Select>
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
            <UserIcon>
              <use href={icon + '#icon-user-1'}></use>
            </UserIcon>
          </Button>
          <MainModal modalIsOpen={isModalOpen} closeModal={closeModal}>
            <ProfileEditModal user={currentUserData} />
          </MainModal>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
