import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C7A153', 
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#5C6C7D', 
      contrastText: '#FFFFFF', 
    },
    background: {
      default: '#1C1C1E', 
      paper: '#2C2C2E', 
    },
    text: {
      primary: '#FFFFFF', 
      secondary: '#9C5D5D', 
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif, Nexa, Hexa-Heavy', 
    h1: {
      fontSize: '2.5rem',
    },
    h2: {
      fontSize: '2rem',
    },
    body1: {
      fontSize: '1rem',
    },
  },
});

export default theme;
export {};