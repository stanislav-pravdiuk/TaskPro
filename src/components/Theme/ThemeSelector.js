import { useState } from 'react';
import {
  ThemeSelectWrapper,
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownItem,
  ButtonWrapper,
} from './ThemeSelector.styled';
import { ReactComponent as ChevronSVG } from './icon_LightVioletChevronDown.svg';
import { Button } from '@mui/material';

export const ThemeSelector = ({ currentTheme, handleThemeChange }) => {
  const themeOptions = ['Light', 'Dark', 'Violet'];
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(themeOptions[0]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = option => {
    // setSelectedOption(option);
    setIsOpen(false);
    // handleThemeChange(option);
  };

  return (
    <ThemeSelectWrapper>
      <DropdownContainer>
        <ButtonWrapper onClick={toggleDropdown}>
          <Button
            color='primary'
          >Test</Button>
          <DropdownButton>Theme</DropdownButton>
          <ChevronSVG />
        </ButtonWrapper>
        {isOpen && (
          <DropdownList>
            {themeOptions.map((option, index) => (
              <DropdownItem
                key={index}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </DropdownContainer>
    </ThemeSelectWrapper>
  );
};
