import React, { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import { ColorModeProvider } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <ColorModeProvider>
        <NavBar />
        <Outlet />
        <Footer />
      </ColorModeProvider>
    </>
  );
};

export default Layout;
