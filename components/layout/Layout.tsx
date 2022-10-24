import React, { ReactElement } from 'react';
import { Paper } from '@mui/material';
import Header from '../organisms/NavBar/Header/Header';
import Footer from '../organisms/NavBar/Footer/Footer';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Paper>
      <Header />
      <main style={{ width: '1200px' }}>{children}</main>
      <Footer />
    </Paper>
  );
};

export default Layout;
