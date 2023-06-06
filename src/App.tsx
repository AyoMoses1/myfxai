import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/main';
import Layout from './common/Layout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
