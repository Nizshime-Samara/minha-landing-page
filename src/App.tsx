import React from 'react';
import { Box } from '@mui/material';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import './index.css';

const App: React.FC = () => {
  return (
    <Box className="app-container">
      <Header />
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Body />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
