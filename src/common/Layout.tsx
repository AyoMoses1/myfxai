import React, { ReactNode } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
