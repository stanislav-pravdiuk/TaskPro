import { useState } from 'react';
import {
  ThemeSelectWrapper,
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownItem,
  ButtonWrapper,
  ChevronIcon,
} from './ThemeSelector.styled';
import icon from '../iconSvg/icon.svg';

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
          <DropdownButton>Theme</DropdownButton>
          <ChevronIcon>
            <use href={icon + '#chevron-down'}></use>
          </ChevronIcon>
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
