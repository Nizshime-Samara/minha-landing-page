import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C7A153', // Cor personalizada para primary
      contrastText: '#FFFFFF', // Cor do texto para melhor contraste
    },
    secondary: {
      main: '#5C6C7D', // Cor personalizada para secondary
      contrastText: '#FFFFFF', // Cor do texto para melhor contraste
    },
    background: {
      default: '#1C1C1E', // Cor de fundo padrão
      paper: '#2C2C2E', // Cor de fundo para elementos como cards
    },
    text: {
      primary: '#FFFFFF', // Cor do texto principal
      secondary: '#9C5D5D', // Cor do texto secundário
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif, Nexa, Hexa-Heavy', // Fonte personalizada
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