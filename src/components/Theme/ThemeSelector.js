import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {ThemeSelectWrapper} from './ThemeSelector.styled'

export const ThemeSelector = ({ currentTheme, handleThemeChange }) => {
  return (
    <ThemeSelectWrapper>
      <Select value={currentTheme} onChange={handleThemeChange}>
        <MenuItem value="light">Theme light</MenuItem>
        <MenuItem value="black">Theme dark</MenuItem>
        <MenuItem value="violet">Theme violet</MenuItem>
      </Select>
    </ThemeSelectWrapper>
  );
};
