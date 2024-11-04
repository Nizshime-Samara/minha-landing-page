import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

// Seção personalizada com estilização
const Section = styled(Box)(({ theme }) => ({
  padding: '0rem 0',
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  textAlign: 'center',
  '&:nth-of-type(even)': {
    backgroundColor: '#3a434d',
  },
}));

const AboutSection = styled(Section)({
  background: 'linear-gradient(135deg, #FFC371, #FF5F6D)',
  color: '#3a434d',
  padding: '4rem 0',
  borderRadius: '10px',
});

const PortfolioItem = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

// const ContactSection = styled(Section)({
//   backgroundColor: '#3a434d',
//   color: '#ffffff',
// });

const Body: React.FC = () => {
  return (
    <Container maxWidth="lg" style={{ padding: '0 1rem' }}>
      {/* Seção Sobre */}
      <AboutSection>
        <Typography variant="h2" gutterBottom>
          Sobre Mim
        </Typography>
        <Typography variant="body1" paragraph>
          Sou uma desenvolvedora apaixonada por criar soluções criativas e eficazes. Tenho experiência em tecnologias
          como React, TypeScript, e Material-UI. Estou sempre pronta para enfrentar novos desafios e aprender coisas
          novas!
        </Typography>
      </AboutSection>

      {/* Seção Portfólio */}
      <Section>
        <Typography variant="h2" gutterBottom>
          Meu Portfólio
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <PortfolioItem>
              <Typography variant="h3">Projeto 1</Typography>
              <Typography variant="body2">Descrição breve do projeto.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                Saiba Mais
              </Button>
            </PortfolioItem>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PortfolioItem>
              <Typography variant="h3">Projeto 2</Typography>
              <Typography variant="body2">Descrição breve do projeto.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                Saiba Mais
              </Button>
            </PortfolioItem>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <PortfolioItem>
              <Typography variant="h3">Projeto 3</Typography>
              <Typography variant="body2">Descrição breve do projeto.</Typography>
              <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                Saiba Mais
              </Button>
            </PortfolioItem>
          </Grid>
        </Grid>
      </Section>

      {/* <ContactSection>
        <Typography variant="h3" gutterBottom>
          Entre em Contato
        </Typography>
        <Typography variant="body1" paragraph>
          Adoraria ouvir de você! Sinta-se à vontade para me enviar uma mensagem ou conectar-se pelas redes sociais.
        </Typography>
        <Button variant="outlined" color="secondary">
          Enviar Mensagem
        </Button>
      </ContactSection> */}
    </Container>
  );
};

export default Body;
