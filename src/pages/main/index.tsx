import React from 'react';
import Carousel from './components/Carousel';
import Hero from './components/Hero';
import { Container } from '@chakra-ui/react';
import Features from './components/Features';
import Reviews from './components/Reviews';

function index() {
  return (
    <>
      <Hero />
      <Container maxW='90%'>
        <Carousel />
        <Features/>
        <Reviews />
      </Container>
    </>
  );
}

export default index;
