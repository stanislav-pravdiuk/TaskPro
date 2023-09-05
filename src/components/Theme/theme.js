const lightTheme = {
  palette: {
    primary: {
      light: '#FCFCFC', //--bg-color-light
      main: '#BEDBB0;', //--color-text-green-main
      dark: "#0b5c15", //
      darker: "#F6F6F7",
      contrastText: 'rgba(22, 22, 22, 0.1)'
    },
    secondary: {
      main: 'rgba(22, 22, 22, 0.10)',
      light: '#BEDBB0',
      dark: '#161616',
    },
    background: {
      default: '#FFF', //--color-white
      paper: '#FCFCFC',
    },
    text: {
      primary: '#161616', //--color-text-dark-main
      secondary: 'rgba(22, 22, 22, 0.8)', //--color-text-dark-07
      disabled: 'rgba(22, 22, 22, 0.5)', //--color-text-dark-05
      hint: '#BEDBB0', //--color-text-green-main
    },
  },
};

const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      light: '#161616', //--color-text-dark
      main: '#BEDBB0', //--color-text-dark-main
      dark: "#1b1c21",
      darker: "#1F1F1F",
      contrastText: 'rgba(255, 255, 255, 0.1)'
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.10)',
      light: '#BEDBB0',
      dark: '#FFF',
    },
    background: {
      default: '#121212', //--color-icon-dark
      paper: '#161616',
    },
    text: {
      primary: '#FFFFFF;', //--color-text-white-main
      secondary: 'rgba(255, 255, 255, 0.8)', //--color-text-white-05
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: '#BEDBB0', //--color-text-green-main
    },
  },
};

const violetTheme = {
  palette: {
    primary: {
      light: "#FFF", // --color-pale-blue
      main: '#5255BC;',  //--color-text-violet-main
      dark: "#B8BCFD", //--color-light-blue      //
      darker: "#ECEDFD", //--color-purple
      contrastText: 'rgba(255, 255, 255, 0.1)'
    },
    secondary: {
      main: 'rgba(22, 22, 22, 0.10)',
      light: '#ECEDFD',
      dark: '#FFF',
    },
    background: {
      default: '#5255BC', //--color-pale-blue
      paper: '#FFF', //--color-white
    },
    text: {
      primary: '#161616', //--color-text-dark-main
      secondary: 'rgba(22, 22, 22, 0.8)', //--color-text-dark-07
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: '#5255BC', //--color-text-violet-main
    },
  },
};

const modes = {
  lightTheme,
  darkTheme,
  violetTheme,
};

export default modes;
