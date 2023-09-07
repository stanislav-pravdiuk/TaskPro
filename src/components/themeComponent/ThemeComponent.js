import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import icon from '../iconSvg/icons.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserTheme } from '../../redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { SvgIcon } from '@mui/material';
import { useState } from 'react';

export const ThemeComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const [currentTheme, setCurrentTheme] = useState(user.theme);

  const handleThemeChange = async theme => {
    try {
      await dispatch(updateUserTheme(theme));
      setCurrentTheme(theme);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoSvg = user.theme === 'dark' ? '#chevron-down-white' : '#chevron-down';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        width: '100px',
      }}
    >
      <Button
        id="theme-button"
        aria-controls={open ? 'theme-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          fontFamily: 'Poppins',
          border: 'none',
          fontSize: '14px',
          fontStyle: 'normal',
          textTransform: 'capitalize',
          fontWeight: 500,
          color: 'text.secondary',
        }}
      >
        Theme
        <SvgIcon
          sx={{
            width: '16px',
            height: '16px',
            backgroundColor: 'transparent',
            marginLeft: '4px',
          }}
        >
          <use href={icon + `${logoSvg}`}></use>
        </SvgIcon>
      </Button>
      <Menu
        id="theme-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'theme-button',
        }}
        sx={{
          left: '-8px',
          fontFamily: 'Poppins',
          fontSize: '14px',
          boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.1)',
          
          zIndex: '3000',          
          '&& .Mui-selected': {
            backgroundColor: 'transparent',
            bgcolor: 'background.paper', // check !!!
          },
          '&& li.MuiMenuItem-root': {
            width: '100px',
          },
          '&& ul.MuiList-root': {
            paddingTop: '18px',
            paddingBottom: '18px',
            border: '1px solid',
            borderColor: 'secondary.light',              
            borderRadius: '8px',
          },
          '&& .MuiPopover-paper': {
            borderRadius: '8px',
          },
        }}
      >
        <MenuItem
          onClick={() => handleThemeChange('light')}
          sx={{
            fontSize: '14px',
            minHeight: '21px',
            padding: '2px 44px 2px 18px',
            fontFamily: 'Poppins',
            color: currentTheme === 'light' ? 'text.hint' : 'text.secondary',            
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          Light
        </MenuItem>
        <MenuItem
          onClick={() => handleThemeChange('dark')}
          sx={{
            fontSize: '14px',
            minHeight: '21px',
            padding: '2px 44px 2px 18px',
            fontFamily: 'Poppins',
            color: currentTheme === 'dark' ? 'text.hint' : 'text.secondary',
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          Dark
        </MenuItem>
        <MenuItem
          onClick={() => handleThemeChange('violet')}
          sx={{
            fontSize: '14px',
            minHeight: '21px',
            padding: '2px 44px 2px 18px',
            fontFamily: 'Poppins',
            color:
              currentTheme === 'violet' ? 'text.hint' : 'text.secondary',
            '&:hover': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          Violet
        </MenuItem>
      </Menu>
    </div>
  );
};