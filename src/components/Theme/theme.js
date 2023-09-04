const lightTheme = {
  palette: {
    primary: {
      light: "rgba(246, 246, 247, 1)", //--bg-color-light
      main: '#9dc888', //--color-hover-green
      dark: "#0b5c15", //
      darker: "#08400f",
      contrastText: ''
    },
    secondary: {
      main: "rgba(255, 255, 255, 0.5)",
      light: '',
      dark: ''
    },
    background: {
      default: "#FFFFFF", //--color-white
      paper: "#F5F5F5",
    },
    text: {
      primary: "#9dc888", //--color-hover-green
      secondary: "#757575",
      disabled: '',
      hint: ''
    },
  },
};

const darkTheme = {
  palette: {
    type: "dark",
    primary: {
      light: "rgba(255, 255, 255, 0.5)", //--color-text-dark
      main: '#9dc888', //--color-hover-green
      dark: "#1b1c21",
      darker: "#1c1c1f",
    },
    secondary: {
      main: "#FF4081",
      light: '',
      dark: ''
    },
    background: {
      default: "#121212", //--color-icon-dark
      paper: "#1E1E1E",
    },
    text: {
      primary: "#9dc888", //--color-hover-green
      secondary: "rgba(255, 255, 255, 0.5)",
      disabled: '',
      hint: ''
    },
  },
};

const violetTheme = {
  palette: {
    primary: {
      light: "#ECEDFD", // --color-pale-blue
      main: '#5255BC',  //--color-purple
      dark: "#B8BCFD", //--color-light-blue
      darker: "#5255BC", //--color-purple
    },
    secondary: {
      main: "#FF4081",
      light: '',
      dark: ''
    },
    background: {
      default: "rgba(236, 237, 253, 1)", //--color-pale-blue
      paper: "#FFF", //--color-white
    },
    text: {
      primary: "#5255BC", //--color-purple
      secondary: "#161616", //--color-dark
      disabled: '',
      hint: ''
    },
  },
};


const modes = {
    lightTheme,
    darkTheme,
    violetTheme
};

export default modes;