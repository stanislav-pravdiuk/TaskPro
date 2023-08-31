import styled from 'styled-components';

export const ThemeSelectWrapper = styled.div`  
  width: 68px;
`;

export const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
  `;
  
  export const DropdownButton = styled.button`    
    color: rgba(22, 22, 22, 0.8);
    font-family: Poppins;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  `;
  
  export const DropdownList = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    width: 100px;
    color: #161616;
    background-color: #fff;
    border: 1px solid rgba(190, 219, 176, 1);
    border-radius: 5px;
    padding: 5px 0 5px 0;   
    list-style: none;
    box-shadow: 0px 2px 4px rgba(17, 17, 17, 0.1);
  `;
  
  export const DropdownItem = styled.li`    
    font-family: Poppins;
    font-size: 14px;
    line-height: 21px;
    font-weight: 400;
    padding: 4px 0 4px 18px;
    cursor: pointer;
    &:hover {
    background-color: #f2f2f2;
  }
  `;