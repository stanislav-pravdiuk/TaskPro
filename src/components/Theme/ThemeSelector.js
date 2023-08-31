import { useState } from 'react';
import {
  ThemeSelectWrapper,
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownItem,
} from './ThemeSelector.styled';

export const ThemeSelector = ({ currentTheme, handleThemeChange }) => {
  
  
  const themeOptions = ['Light', 'Dark', 'Violet'];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(themeOptions[0]);
console.log(selectedOption);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = option => {
    setSelectedOption(option);
    setIsOpen(false);
    // handleThemeChange(option);
  };

  return (
    <ThemeSelectWrapper>
      <DropdownContainer>
        <DropdownButton onClick={toggleDropdown}>Theme</DropdownButton>
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
