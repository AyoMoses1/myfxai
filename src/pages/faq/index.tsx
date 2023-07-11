import React from 'react';
import { Container } from '@chakra-ui/react';
import FAQSection from './components/faq';
import Jumbotron from './components/jumbotron';

function index() {
  return (
    <Container maxW="70%" my={20}>
      <FAQSection />
      <Jumbotron />
    </Container>
  );
}

export default index;
