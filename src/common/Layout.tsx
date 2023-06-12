import React, { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import { ColorModeProvider } from "@chakra-ui/react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <ColorModeProvider>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </ColorModeProvider>
    </>
  );
};

export default Layout;
