import { useState } from 'react';
import Dropdown from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import MenuItem from '@mui/joy/MenuItem';
import icon from '../iconSvg/icon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserTheme } from '../../redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { SvgIcon } from '@mui/material';

export const ThemeComponent = () => {
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

  return (
    <Dropdown>
      <MenuButton
        sx={{
          border: 'none',
          fontFamily: 'Poppins',
          fontWeight: '500',
          color: 'rgba(22, 22, 22, 0.8)',
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
          <use href={icon + '#chevron-down'}></use>
        </SvgIcon>
      </MenuButton>
      <Menu
        sx={{          
          border: '1px solid rgba(190, 219, 176, 1)',          
          fontFamily: 'Poppins',
          fontSize: '14px',
          width: '100px',          
          boxShadow: '0px 2px 4px rgba(17, 17, 17, 0.1)',
          zIndex: '3000',
          "&& .Mui-selected": {
            backgroundColor: "transparent"
          },          
          fontWeight: '400'
        }}
      >
        <MenuItem
          {...(currentTheme === 'light' && {
            selected: true,
            sx: {                           
              color: 'rgba(190, 219, 176, 1)',
            },
          })}
          onClick={() => handleThemeChange('light')}
        >
          Light
        </MenuItem>
        <MenuItem
          {...(currentTheme === 'dark' && {
            selected: true,
            sx: {              
              color: 'rgba(190, 219, 176, 1)',
            },
          })}
          onClick={() => handleThemeChange('dark')}
        >
          Dark
        </MenuItem>
        <MenuItem
          {...(currentTheme === 'violet' && {
            selected: true,
            sx: {              
              color: 'rgba(190, 219, 176, 1)',
            },
          })}
          onClick={() => handleThemeChange('violet')}
        >
          Violet
        </MenuItem>
      </Menu>
    </Dropdown>
  );
};
