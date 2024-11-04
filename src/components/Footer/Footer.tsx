import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#3a434d', // ou 'transparent'
  color: '#ffffff',
  padding: '1rem',
  textAlign: 'center',
  marginTop: 'auto',
  position: 'relative',
  bottom: 0,
  width: '100%',
}));

const SocialIcons = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '0.5rem',
  '& > *': {
    margin: '0 0.5rem',
  },
});

const GradientLinkedInIcon = styled(LinkedInIcon)({
  fontSize: '2.5rem', // Tamanho maior do ícone
  fill: 'url(#linkedinGradient)', // Aplica o gradiente
});

const GradientText = styled(Typography)({
    fontSize: '1.2rem',
    fontWeight: 'bold',
    background: '#FFF8DC',
    backgroundSize: '200% auto',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'moveGradient 3s linear infinite',
  
    '@keyframes moveGradient': {
      '0%': {
        backgroundPosition: '0% 50%',
      },
      '100%': {
        backgroundPosition: '100% 50%',
      },
    },
  });   

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <GradientText> 
        © {new Date().getFullYear()} Me conheça melhor. Todos os direitos reservados.
      </GradientText>
    </FooterContainer>
  );
};

export default Footer;
