import React, { ReactElement } from 'react';
import { Paper } from '@mui/material';
import Header from '../organisms/NavBar/Header/Header';
import Footer from '../organisms/NavBar/Footer/Footer';

type LayoutProps = Required<{
  readonly children: ReactElement;
}>;

interface ThemeContextInterface {
  theme: string;
}

const defaultContext = {
  theme: 'theme-default',
};

export const ThemeContext = React.createContext<ThemeContextInterface>(defaultContext);

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeContext.Provider value={defaultContext}>
      <Paper>
        <Header />
        <main style={{ width: '1200px' }}>{children}</main>
        <Footer />
      </Paper>
    </ThemeContext.Provider>
  );
};

export default Layout;
