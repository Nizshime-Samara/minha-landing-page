import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import './Body.css';
import HeroRunGame from '../HeroRunGame/HeroRunGame';

const Body: React.FC = () => (
  <Container className="body-container" >
    <HeroRunGame/>
    <Box className="section">
      <Box className="portfolio-container">
        {[1, 2, 3].map((project) => (
          <Box className="portfolio-item" key={project}>
            <Typography variant="h3">Projeto {project}</Typography>
            <Typography variant="body2">Descrição breve do projeto.</Typography>
            <Button variant="contained" color="primary" className="portfolio-button">
              Saiba Mais
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  </Container>
);
export default Body;
