import modes from "./theme";

const getThemePalette = (mode) => {
 
  switch (mode) {
    case "light":
    return (modes.lightTheme);      
    case "dark":
      return(modes.darkTheme);      
    case "violet":
      return(modes.violetTheme);      

    default:
      return(modes.lightTheme);     
  }  
};

export default getThemePalette;