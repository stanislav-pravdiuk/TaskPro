const lightTheme = {
  palette: {
    primary: {
      light: "#FCFCFC", //--bg-color-light
      main: '#BEDBB0;', //--color-text-green-main
      dark: "#0b5c15", //
      darker: "#08400f",
      contrastText: ''
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.5)",
      light: '#BEDBB0',
      dark: ''
    },
    background: {
      default: "#FFFFFF", //--color-white
      paper: "#FCFCFC",
    },
    text: {
      primary: "#161616", //--color-text-dark-main
      secondary: "rgba(22, 22, 22, 0.8)", //--color-text-dark-07
      disabled: '#16161680',  //--color-text-dark-05
      hint: '#BEDBB0' //--color-text-green-main
    },
  },
};

const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      light: "#161616", //--color-text-dark
      main: '#BEDBB0', //--color-text-dark-main
      dark: "#1b1c21",
      darker: "#1c1c1f",
    },
    secondary: {
      main: "#FF4081",
      light: '#BEDBB0',
      dark: ''
    },
    background: {
      default: "#121212", //--color-icon-dark
      paper: "#161616",
    },
    text: {
      primary: "#FFFFFF;", //--color-text-white-main
      secondary: "rgba(255, 255, 255, 0.8)", //--color-text-white-05
      disabled: '#FFFFFF80', //--color-text-white-05
      hint: '#BEDBB0' //--color-text-green-main
    },
  },
};

const violetTheme = {
  palette: {
    primary: {
      light: "#FFF", // --color-pale-blue
      main: '#5255BC;',  //--color-text-violet-main
      dark: "#B8BCFD", //--color-light-blue
      darker: "#5255BC", //--color-purple
    },
    secondary: {
      main: "#FFF",
      light: '#ECEDFD',
      dark: ''
    },
    background: {
      default: "rgba(236, 237, 253, 1)", //--color-pale-blue
      paper: "#FFF", //--color-white
    },
    text: {
      primary: '#161616', //--color-text-dark-main
      secondary: 'rgba(22, 22, 22, 0.8)',   //--color-text-dark-07   
      disabled: '#FFFFFF80', // --color-text-white-05
      hint: '#5255BC' //--color-text-violet-main
    },
  },
};


const modes = {
    lightTheme,
    darkTheme,
    violetTheme
};

export default modes;