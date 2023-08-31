const { createTheme } = require('@mui/material');

const dark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#757575',
    },
    text: {
        primary: '#ffffff',
        secondary: 'rgba(22,22,22,0.8)',
        disabled: 'rgba(22,22,22,0.5)',
    }
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      marginBottom: '0.8rem',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 8,
        textTransform: 'none',
      },
    },
  },
});

const light = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#2c2c2c',
      },
      secondary: {
        main: '#757575',
      },
    },
    typography: {
      fontFamily: 'Poppins, Arial, sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
        marginBottom: '1rem',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 500,
        marginBottom: '0.8rem',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.5,
      },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
      },
    },
  });

export const violet = createTheme({
  palette: {
    mode: 'dark',
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
  violet,
};
