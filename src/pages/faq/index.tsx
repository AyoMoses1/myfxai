import React from 'react';

import {
  Center,
  Container,
  Heading,
  VStack,
  Text,
  Box,
} from '@chakra-ui/react';
import FAQSection from './components/faq';
import styled from 'styled-components'
import Jumbotron from './components/jumbotron';

function index() {
  return (
    <Container maxW="70%" my={20}>
      <FAQSection />
      <Jumbotron/>
    </Container>
  );
}

export default index;


const StyledBox = styled(Box)`
  background: red;
`
