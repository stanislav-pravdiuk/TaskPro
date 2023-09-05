const lightTheme = {
  palette: {
    primary: {
      light: '#FCFCFC',
      main: '#BEDBB0;',
      dark: '#0b5c15',
      darker: '#F6F6F7',
      contrastText: 'rgba(22, 22, 22, 0.1)',
      info: 'rgba(22, 22, 22, 0.5)',
    },
    secondary: {
      main: 'rgba(22, 22, 22, 0.10)',
      light: '#BEDBB0',
      dark: '#161616',
      info: '#121212',
      warning: '#BEDBB0',
    },
    background: {
      default: '#FFF',
      paper: '#FCFCFC',
    },
    text: {
      primary: '#161616',
      secondary: 'rgba(22, 22, 22, 0.8)',
      disabled: 'rgba(22, 22, 22, 0.5)',
      hint: '#BEDBB0',
    },
  },
};

const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      light: '#161616',
      main: '#BEDBB0',
      dark: '#1b1c21',
      darker: '#1F1F1F',
      contrastText: 'rgba(255, 255, 255, 0.1)',
      info: 'rgba(255, 255, 255, 0.5)',
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.10)',
      light: '#BEDBB0',
      dark: '#FFF',
      info: '#121212',
      warning: '#BEDBB0',
    },
    background: {
      default: '#121212',
      paper: '#161616',
    },
    text: {
      primary: '#FFFFFF;',
      secondary: 'rgba(255, 255, 255, 0.8)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: '#BEDBB0',
    },
  },
};

const violetTheme = {
  palette: {
    primary: {
      light: '#FFF',
      main: '#5255BC;',
      dark: '#B8BCFD',
      darker: '#ECEDFD',
      contrastText: 'rgba(255, 255, 255, 0.1)',
      info: 'rgba(22, 22, 22, 0.5)',
    },
    secondary: {
      main: 'rgba(22, 22, 22, 0.10)',
      light: '#ECEDFD',
      dark: '#FFF',
      info: '#FFFFFF',
      warning: '#B8BCFD',
    },
    background: {
      default: '#5255BC',
      paper: '#FFF',
    },
    text: {
      primary: '#161616',
      secondary: 'rgba(22, 22, 22, 0.8)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: '#5255BC',
    },
  },
};

const modes = {
  lightTheme,
  darkTheme,
  violetTheme,
};

export default modes;
