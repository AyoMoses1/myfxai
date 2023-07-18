import { FaBuromobelexperte } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { GrNotification } from 'react-icons/gr';
import { AiOutlineClockCircle, AiOutlineFileText } from 'react-icons/ai';
import { RiMoneyDollarCircleLine, RiUserSearchLine } from 'react-icons/ri';

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
    icon: <FaBuromobelexperte />,
    borderBottom: false,
  },
  {
    name: NavNames.trade,
    path: paths.trade,
    icon: <FaBuromobelexperte />,
    borderBottom: false,
  },
  {
    name: NavNames.history,
    path: paths.history,
    icon: <AiOutlineClockCircle />,
    borderBottom: false,
  },
  {
    name: NavNames.referrals,
    path: paths.referrals,
    icon: <RiUserSearchLine/>,
    borderBottom: false,
  },
  // {
  //   name: NavNames.payments,
  //   path: paths.payments,
  //   icon: <FaWarehouse />,
  //   borderBottom: false,
  // },
  {
    name: NavNames.bonuses,
    path: paths.bonuses,
    icon: <RiMoneyDollarCircleLine />,
    borderBottom: false,
  },
  {
    name: NavNames.invoices,
    path: paths.invoices,
    icon: <AiOutlineFileText/>,
    borderBottom: true,
  },
  {
    name: NavNames.marketplace,
    path: paths.marketplace,
    icon: <FaBuromobelexperte />,
    borderBottom: true,
  },
  {
    name: NavNames.notifications,
    path: paths.notifications,
    icon: <GrNotification />,
    borderBottom: false,
  },
  {
    name: NavNames.settings,
    path: paths.settings,
    icon: <FiSettings />,
    borderBottom: true,
  },
];

export default paths;
