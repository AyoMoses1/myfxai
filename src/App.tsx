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
import History from './pages/history';
import Referrals from './pages/referrals';
import Bonuses from './pages/bonuses';
import Invoices from './pages/invoices';
import Marketplace from './pages/marketplace'
import Checkout from './pages/marketplace/Checkout'
import OrderDetails from 'pages/marketplace/OrderDetails';
import Notifications from './pages/notifications'
import Layout from './common/Layout';
import paths from 'utils/paths';
import SignIn from './pages/auth/SignIn';
import SignUp from 'pages/auth/SignUp';
import { ColorModeProvider } from '@chakra-ui/react';
import AuthLayout from 'common/AuthLayout';
import AuthorizedLayout from 'common/AuthorizedLayout';
import InvoiceDetails from 'pages/invoices/InvoiceDetails';
import InvoicesBase from 'pages/invoices/Base'

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
            <Route path={paths.history} element={<History />} />
            <Route path={paths.referrals} element={<Referrals />} />
            <Route path={paths.bonuses} element={<Bonuses />} />
            <Route path={paths.invoices} element={<InvoicesBase />}>
              <Route index element={<Invoices />} />
              <Route path=":invoiceId" element={<InvoiceDetails />} />
            </Route>
            <Route path={paths.marketplace} element={<Marketplace />} />
            <Route path={paths.checkout} element={<Checkout />} />
            <Route path={paths.orderDetails} element={<OrderDetails />} />
            <Route path={paths.notifications} element={<Notifications />} />
          </Route>
        </Routes>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
