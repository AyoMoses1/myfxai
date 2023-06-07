import React from 'react';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import { Container } from '@chakra-ui/react';

function index() {
  return (
    <>
      <Hero />
      <Container maxW='90%'>
        <Carousel />
      </Container>
    </>
  );
}

export default index;
