import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/main';
import Terms from './pages/terms'
import Policies from './pages/policies'
import Contact from './pages/contact'
import Layout from './common/Layout';
import paths from 'common/paths';

function App() {
  return (
    <ChakraProvider theme={theme}>
        <Routes>
          <Route path={paths.home} element={<Layout />}>
          <Route path={paths.home} element={<Home />} />
            <Route path={paths.terms} element={<Terms />} />
            <Route path={paths.policies} element={<Policies />} />
            <Route path={paths.contact} element={<Contact />} />
          </Route>
        </Routes>
    </ChakraProvider>
  );
}

export default App;
