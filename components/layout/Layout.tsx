import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Button as MuiButton, Typography, Paper } from '@mui/material';
import Header from '../organisms/NavBar/Header/Header';
import Footer from '../organisms/NavBar/Footer/Footer';

const Layout = ({ children }: any) => {
  return (
    <ThemeProvider>
      <Paper>
        <Header />
        <main style={{ width: '1024px' }}>{children}</main>
        <Footer />
      </Paper>
    </ThemeProvider>
  );
};

export default Layout;
