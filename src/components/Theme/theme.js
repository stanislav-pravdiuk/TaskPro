const { createTheme } = require('@mui/material');

const dark = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#757575',
    },
  },
});

const light = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

export const violet = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#6200ea',
    },
    secondary: {
      main: '#03a9f4',
    },
  },
});


export const theme = {
    light,
    dark,
    violet
}