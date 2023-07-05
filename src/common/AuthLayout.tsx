import React, { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import AuthNav from './AuthNav';
import AuthFooter from './AuthFooter';
import { Box } from '@chakra-ui/react';
import styled from 'styled-components'

interface AuthLayoutProps {
  children: ReactNode;
}

const StyledBox = styled(Box)`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
`
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <StyledBox>
      <AuthNav />
      <Box my="auto">{children}</Box>
      <AuthFooter />
    </StyledBox>
  );
};

export default AuthLayout;
