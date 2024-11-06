import React from 'react';
import { Box, Typography } from '@mui/material';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <Box className="footer-container">
      <Typography className="gradient-text">
        © {new Date().getFullYear()} Me conheça melhor. Todos os direitos reservados.
      </Typography>
    </Box>
  );
};

export default Footer;
