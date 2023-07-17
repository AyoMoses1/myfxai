import { VscFileMedia } from 'react-icons/vsc';
import { FaWarehouse } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GrUserWorker } from 'react-icons/gr';
import { BiWallet } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';

const paths = {
  home: '/',
  about: '/about',
  login: '/login',
  signup: '/signup',
  terms: '/terms',
  policies: '/policies',
  contact: '/contact',
  faq: '/faq',
  dashboard: '/dashboard',
  trade: '/trade',
  history: '/history',
  referrals: '/referrals',
  payments: '/payments',
  bonuses: '/bonuses',
  invoices: '/invoices',
  marketplace: '/marketplace',
  orderDetails: '/order-details',
  checkout: '/checkout',
  notifications: '/notifications',
  settings: '/settings',
};

export const pageTitles = {
  dashboard: 'Dashboard',
  customers: 'Customers',
  agents: 'Agents',
  bdaOrders: 'BDA Orders',
  profile: 'Profile',
  wallet: 'Wallet',
  yourOrders: 'Your Orders',
  forgotPassword: 'Forgot Password',
  enterNewPassword: 'Enter New Password',
  transactions: 'Your Transactions',
};

export const NavNames = {
  dashboard: 'Dashboard',
  trade: 'Trade',
  history: 'History',
  referrals: 'Referrals',
  payments: 'Track Payments',
  bonuses: 'Bonuses',
  invoices: 'Invoices',
  marketplace: 'Marketplace',
  notifications: 'Notifications',
  settings: 'Settings',
  Wallet: 'Transactions',
};

export const pathObject = [
  {
    name: NavNames.dashboard,
    path: paths.dashboard,
    icon: <FaWarehouse />,
    borderBottom: false,
  },
  {
    name: NavNames.trade,
    path: paths.trade,
    icon: <FaWarehouse />,
    borderBottom: false,
  },
  {
    name: NavNames.history,
    path: paths.history,
    icon: <FaWarehouse />,
    borderBottom: false,
  },
  {
    name: NavNames.referrals,
    path: paths.referrals,
    icon: <FaWarehouse />,
    borderBottom: false,
  },
  {
    name: NavNames.payments,
    path: paths.payments,
    icon: <FaWarehouse />,
    borderBottom: false,
  },
  {
    name: NavNames.bonuses,
    path: paths.bonuses,
    icon: <FaWarehouse />,
    borderBottom: false,
  },
  {
    name: NavNames.invoices,
    path: paths.invoices,
    icon: <FaWarehouse />,
    borderBottom: true,
  },
  {
    name: NavNames.marketplace,
    path: paths.marketplace,
    icon: <FaWarehouse />,
    borderBottom: true,
  },
  {
    name: NavNames.notifications,
    path: paths.notifications,
    icon: <FaWarehouse />,
    borderBottom: false,
  },
  {
    name: NavNames.settings,
    path: paths.settings,
    icon: <FaWarehouse />,
    borderBottom: true,
  },
];

export default paths;
