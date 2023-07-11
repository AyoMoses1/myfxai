import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/main';
import Terms from './pages/terms';
import Policies from './pages/policies';
import Contact from './pages/contact';
import FAQ from './pages/faq';
import Dashboard from './pages/dashboard';
import Trade from './pages/trade';
import Layout from './common/Layout';
import paths from 'utils/paths';
import SignIn from './pages/auth/SignIn';
import SignUp from 'pages/auth/SignUp';
import { ColorModeProvider } from '@chakra-ui/react';
import AuthLayout from 'common/AuthLayout';
import AuthorizedLayout from 'common/AuthorizedLayout';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <Routes>
          <Route
            path={paths.signup}
            element={
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            }
          />
          <Route
            path={paths.login}
            element={
              <AuthLayout>
                <SignIn />
              </AuthLayout>
            }
          />
          <Route path={paths.home} element={<Layout />}>
            <Route path={paths.home} element={<Home />} />
            <Route path={paths.terms} element={<Terms />} />
            <Route path={paths.policies} element={<Policies />} />
            <Route path={paths.contact} element={<Contact />} />{' '}
            <Route path={paths.faq} element={<FAQ />} />{' '}
          </Route>
          <Route path={paths.home} element={<AuthorizedLayout />}>
            <Route path={paths.dashboard} element={<Dashboard />} />
            <Route path={paths.trade} element={<Trade />} />
          </Route>
        </Routes>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
