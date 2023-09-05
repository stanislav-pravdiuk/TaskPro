import styled from 'styled-components';

const ButtonTaskPro = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 104px;
  height: 32px;
  background-color: transparent;
  border: 1px;
`;
const ButtonTaskProIconThumb = styled.div`
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 8px;
  background-color: 'primary.light';
`;

const ButtonTaskProIconText = styled.p`
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
`;

const ButtonTaskProIcon = styled.svg`
  width: 12px;
  height: 16px;
  fill: var(--color-white);
`;

const ButtonTaskProIconSvg = styled.use`
  width: 12px;
  height: 16px;
  fill: var(--color-white);
`;

// _________________
const ButtonPlus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  background-color: ${props => {
    return props.theme.palette.secondary.info;
  }};
  border-radius: 6px;
  border: none;
`;

const ButtonPlusColumn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 36px;
  background-color: ${props => {
    return props.theme.palette.primary.error;
  }};
  border-radius: 6px;
  border: none;
`;

const ButtonPlusIcon = styled.svg`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20px;
  height: 20px;
  color: var(--color-black);
  fill: var(--color-black);
`;

const ButtonPlusSvg = styled.use`
  width: 20px;
  height: 20px;
  fill: var(--color-black);
`;

// _________________

const ButtonCreate = styled.button`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  width: 302px;
  height: 49px;
  background-color: var(--color-green);
  border: none;
  border-radius: 8px;
  &:hover {
    background-color: var(--color-hover-green);
  }
`;
const ButtonCreateThumb = styled.div`
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  border-radius: 6px;
  background-color: var(--color-black);
`;

const ButtonCreateText = styled.p`
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  color: var(--color-dark);
`;

const ButtonCreateIcon = styled.svg`
  width: 14px;
  height: 14px;
  fill: var(--color-white);
`;

const ButtonCreateSvg = styled.use`
  width: 14px;
  height: 14px;
  fill: var(--color-white);
`;

// _____________________

const ButtonLogOut = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 105px;
  height: 32px;
  background-color: transparent;
  border: none;
`;
const ButtonLogOutThumb = styled.div`
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;

  background-color: transparent;
`;

const ButtonLogOutText = styled.p`
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
`;

const ButtonLogOutIcon = styled.svg`
  width: 32px;
  height: 36px;
  &:hover {
    fill: var(--color-hover-green);
  }
`;

const ButtonLogOutSvg = styled.use`
  width: 32px;
  height: 16px;
  &:hover {
    fill: var(--color-hover-green);
  }
`;

// _________________

const ButtonTaskProIconThumbViolet = styled.div`
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 8px;
  background-color: var(--color-pale-blue);
`;

const ButtonTaskProIconTextViolet = styled.p`
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  color: var(--color-white);
`;

const ButtonTaskProIconSvgViolet = styled.use`
  width: 12px;
  height: 16px;
  fill: var(--color-purple);
`;

// _________________

const ButtonCreateViolet = styled.button`
  display: flex;
  justify-content: center;
  gap: 8px;
  align-items: center;
  width: 302px;
  height: 49px;
  background-color: var(--color-light-purple);
  border: none;
  border-radius: 8px;
  &:hover {
    background-color: var(--color-purple);
  }
`;

const ButtonCreateThumbViolet = styled.div`
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  border-radius: 6px;
  background-color: var(--color-white);
`;

const ButtonCreateTextViolet = styled.p`
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
  color: var(--color-white);
`;

const ButtonCreateIconViolet = styled.svg`
  width: 14px;
  height: 14px;
  fill: var(--color-black);
`;

const ButtonCreateSvgViolet = styled.use`
  width: 14px;
  height: 14px;
  fill: var(--color-black);
`;

// _____________________

const ButtonPlusIconViolet = styled.svg`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20px;
  height: 20px;
  fill: var(--color-black);
`;

const ButtonPlusSvgViolet = styled.use`
  width: 20px;
  height: 20px;
  fill: var(--color-black);
`;

// _____________________

// const ButtonLogOutThumb = styled.div`
//   width: 32px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 32px;

//   background-color: transparent;
// `;

const ButtonLogOutTextViolet = styled.p`
  font-style: normal;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.02em;
`;

const ButtonLogOutIconViolet = styled.svg`
  width: 32px;
  height: 36px;
  fill: var(--color-black);
  background-color: transparent;
  &:hover {
    fill: var(--color-light-blue);
  }
`;

const ButtonLogOutSvgViolet = styled.use`
  width: 32px;
  height: 16px;
  fill: var(--color-black);
  &:hover {
    fill: var(--color-light-blue);
  }
`;

// _________________

const ButtonDelete = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 17px;
  height: 17px;
  padding: 0;
  background-color: transparent;
  border: none;
  &:hover .svg.use {
    fill: var(--color-white);
  }
`;

const ButtonDeleteIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--color-light-gray);
`;

const ButtonDeleteSvg = styled.use`
  width: 16px;
  height: 16px;
  fill: var(--color-light-gray);
`;

/* ____________________ */

const ButtonUpDate = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 17px;
  height: 17px;
  padding: 0;
  background-color: transparent;
  border: none;
`;

const ButtonUpDateIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--color-light-gray);
`;

const ButtonUpDateSvg = styled.use`
  width: 16px;
  height: 16px;
  stroke: inherit;
  fill: inherit;
`;

const ButtonClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18px;
  height: 18px;
  padding: 0;
  background-color: transparent;
  border: none;
  &:hover {
    transform: scale(1.1);
  }
`;

const ButtonCloseIcon = styled.svg`
  width: 18px;
  height: 18px;
  fill: ${props => {
    return props.theme.palette.text.primary;
  }};
  stroke: ${props => {
    return props.theme.palette.text.primary;
  }};
`;

const ButtonCloseSvg = styled.use`
  width: 18px;
  height: 18px;
  fill: inherit;
`;

// _____________________

const ButtonFilter = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 74px;
  height: 25px;
  padding: 5px;
  border-radius: 8px;
  background-color: ${props => {
    return props.theme.palette.background.paper;
  }};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  stroke: ${props => {
    return props.theme.palette.text.primary;
  }};
`;

const ButtonFilterThumb = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ButtonFilterIcon = styled.svg`
  display: flex;
  align-items: center;
  padding-top: 4px;
  width: 20px;
  height: 20px;
  stroke: inherit;
`;

// _________________

export {
  ButtonFilterThumb,
  ButtonFilterIcon,
  ButtonFilter,
  ButtonCloseSvg,
  ButtonCloseIcon,
  ButtonClose,
  ButtonUpDateSvg,
  ButtonUpDateIcon,
  ButtonUpDate,
  ButtonDelete,
  ButtonDeleteSvg,
  ButtonDeleteIcon,
  ButtonLogOutSvgViolet,
  ButtonLogOutIconViolet,
  ButtonLogOutTextViolet,
  ButtonPlusSvgViolet,
  ButtonPlusIconViolet,
  ButtonPlusColumn,
  ButtonCreateThumbViolet,
  ButtonCreateTextViolet,
  ButtonCreateSvgViolet,
  ButtonCreateIconViolet,
  ButtonCreateViolet,
  ButtonTaskProIconTextViolet,
  ButtonTaskProIconThumbViolet,
  ButtonTaskProIconSvgViolet,
  ButtonLogOutSvg,
  ButtonLogOutIcon,
  ButtonLogOutText,
  ButtonLogOut,
  ButtonLogOutThumb,
  ButtonTaskProIconSvg,
  ButtonTaskPro,
  ButtonTaskProIconThumb,
  ButtonTaskProIconText,
  ButtonTaskProIcon,
  ButtonPlus,
  ButtonPlusSvg,
  ButtonPlusIcon,
  ButtonCreate,
  ButtonCreateThumb,
  ButtonCreateIcon,
  ButtonCreateSvg,
  ButtonCreateText,
};
