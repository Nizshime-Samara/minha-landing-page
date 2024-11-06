import React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Header.css';

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  background: '#3a434d',
  backgroundSize: '400% 400%',
  animation: 'gradientAnimation 6s ease infinite',
  padding: '1rem',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.4)',
  position: 'sticky',
  top: 0,
  zIndex: theme.zIndex.appBar,
}));

const CustomTypographyTitleHeader = styled(Typography)({
  flexGrow: 2,
  color: '#FFF8DC',
  textAlign: 'left',
  fontSize:40
});

const CustomButton = styled(Button)({
  color: '#FFF8DC',
  fontWeight: 700,
  fontFamily: 'Nexa, sans-serif',
  '&:hover': {
    opacity: 0.7,
  },
});

const SocialIcons = styled(Box)({
  display: 'flex',
  //justifyContent: 'center',
  flexDirection: 'column', 
  alignItems: 'center', 

});

const GradientLinkedInIcon = styled(LinkedInIcon)(({ theme }) => ({
  fontSize: '3.5rem',
  '& path': {
    fill: 'url(#linkedinGradient)',
  },
}));

const Header: React.FC = () => {
  return (
    <CustomAppBar position="static">
      <Toolbar>
        <CustomTypographyTitleHeader variant="h1" className="custom-header-title">
          Samara Scorzello
        </CustomTypographyTitleHeader>
        <CustomButton>Projetos & Contato</CustomButton>
        <SocialIcons>
          <svg width="0" height="0">
            <defs>
              <linearGradient id="linkedinGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#00A0DC" />
                <stop offset="100%" stopColor="#0077B5" />
              </linearGradient>
            </defs>
          </svg>
          <IconButton
            component="a"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <GradientLinkedInIcon />
          </IconButton>
        </SocialIcons>
      </Toolbar>
    </CustomAppBar>
  );
};

export default Header;
