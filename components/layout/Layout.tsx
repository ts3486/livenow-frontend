import React, { ReactElement } from 'react';
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
      <div className='max-w-8xl flex flex-col justify-center'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default Layout;
