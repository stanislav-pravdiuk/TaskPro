import { useState } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { ThemeSelectWrapper } from './ThemeSelector.styled';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export const ThemeSelector = ({ currentTheme, handleThemeChange }) => {
  const [userTheme, setUserTheme] = useState('10');
  const handleChange = event => {
    setUserTheme(event.target.value);
  };
  return (
    <ThemeSelectWrapper>
      {/* <Select 
      sx={{
        outline: 'none',
      }} 
      value={currentTheme} onChange={handleThemeChange} defaultValue="light"
      >
        <MenuItem value="light">Theme light</MenuItem>
        <MenuItem value="black">Theme dark</MenuItem>
        <MenuItem value="violet">Theme violet</MenuItem>
      </Select> */}

      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="theme-label">Theme</InputLabel>
        <Select
          labelId="theme-label"
          id="simple-select-autowidth"
          value={userTheme}
          onChange={handleChange}
          autoWidth
          label="Theme"
        >
          <MenuItem value="">{/* <em>None</em> */}</MenuItem>
          <MenuItem value={10}>Light</MenuItem>
          <MenuItem value={20}>Dark</MenuItem>
          <MenuItem value={30}>Violet</MenuItem>
        </Select>
      </FormControl>
    </ThemeSelectWrapper>
  );
};
