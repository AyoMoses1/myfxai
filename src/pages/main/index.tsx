import React from 'react';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import { Container } from '@chakra-ui/react';
import Features from './components/Features';

function index() {
  return (
    <>
      <Hero />
      <Container maxW='90%'>
        <Carousel />
        <Features/>
      </Container>
    </>
  );
}

export default index;
