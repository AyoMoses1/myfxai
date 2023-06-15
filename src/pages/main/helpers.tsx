import bitcoin from 'assets/icons/bitcoin.png';
import doge from 'assets/icons/doge.png';
import binance from 'assets/icons/binance.png';
import usdt from 'assets/icons/usdt.png';
import seamless from 'assets/images/seamless.png';
import trading from 'assets/images/trading.png';
import support from 'assets/images/support.png';
import security from 'assets/images/security.png';
import data1 from 'assets/images/74.png';
import data2 from 'assets/images/75.png';
import data3 from 'assets/images/76.png';
import data4 from 'assets/images/77.png';
import man from 'assets/images/9.png';
import broker from 'assets/images/Group94.png';
import avatar from 'assets/images/Avatar.png';

export const faqData = [
  {
    question: 'Is there a free trial available?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'Can other info be added to an invoice?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
  {
    question: 'How do I change my account email?',
    answer:
      'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.',
  },
];

export const reviewCardsInfo = [
  {
    comment:
      'Untitled has saved us thousands of hours of work and has unlock data insights we never thought possible.',
    name: 'Koray Okumus',
    title: 'UX Designer, Circooles',
    avatar,
  },
  {
    comment:
      'Untitled has saved us thousands of hours of work and has unlock data insights we never thought possible.',
    name: 'Koray Okumus',
    title: 'UX Designer, Circooles',
    avatar,
  },
  {
    comment:
      'Untitled has saved us thousands of hours of work and has unlock data insights we never thought possible.',
    name: 'Koray Okumus',
    title: 'UX Designer, Circooles',
    avatar,
  },
];

export const featuredCardsInfo = [
  {
    title: 'AI-Powered Trading',
    content:
      "Trade smarter with MyFXai.com's advanced AI technology. Our platform uses cutting-edge algorithms to help you make more profitable trades.",
    image: trading,
    bgColor: 'mainBlue',
    float: false,
    border: "#2A71B4"
  },
  {
    title: 'Seamless Integration with Your Broker',
    content:
      'Connect directly to your preferred stock broker and start trading in seconds. MyFXai.com makes it easy to integrate your account and start trading.',
    image: [man, broker],
    bgColor: 'mainYellow',
    float: true,
    border: "#C89A07"
  },
  {
    title: 'Real-Time Market Data',
    content:
      'Stay up-to-date with the latest market trends and insights. MyFXai.com provides real-time data and analytics to help you make informed trading decisions.',
    image: [data1, data2, data3, data4],
    bgColor: 'mainPink',
    float: false,
    border: "#882B4F"
  },
  {
    title: 'Advanced Security Features',
    content:
      'Trade with confidence knowing that your information is secure. MyFXai.com uses advanced security features to protect your data and keep your account safe',
    image: security,
    bgColor: 'mainGrey',
    float: true,
    border: "#000000"
  },
  {
    title: 'Customer Support',
    content:
      'Stay up-to-date with the latest market trends and insights. MyFXai.com provides real-time data and analytics to help you make informed trading decisions.',
    image: support,
    bgColor: 'mainGreen',
    float: false,
    border: "#1D6644"
  },
];

export const cardsInfo = [
  {
    title: 'Bitcoin',
    allias: 'BNB',
    symbol: bitcoin,
    price: 453.42,
    percentage: 60,
    bgColor: 'mattePink',
  },
  {
    title: 'USDT',
    allias: 'USDT',
    symbol: usdt,
    price: 453.42,
    percentage: 20,
    bgColor: 'lighterBlue',
  },
  {
    title: 'Doge',
    allias: 'DOGE',
    symbol: doge,
    price: 453.42,
    percentage: 30,
    bgColor: 'secondary',
  },
  {
    title: 'Binance',
    allias: 'BNB',
    symbol: binance,
    price: 453.42,
    percentage: 80,
    bgColor: 'darkGreen',
  },
];
