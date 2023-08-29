import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import icon from '../../components/iconSvg/icon.svg';
import { Button } from '@mui/material';
import { BurgerIcon } from './Header.styled';

const Header = ({ click }) => {
  return (
    <AppBar
      position="fixed"
      sx={{ width: '100%', backgroundColor: '#FCFCFC', boxShadow: 'none' }}
    >
      <Toolbar sx={{ paddingRight: '32px', paddingLeft: '32px' }}>
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
