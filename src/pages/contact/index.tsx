import { Container, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function index() {
  return (
    <Container maxW="98%" py={4}>
      <Grid templateColumns="repeat(4, 1fr)">
        <GridItem colSpan={2}>
          <Banner />
        </GridItem>
        <GridItem colSpan={2}>
          <Form />
        </GridItem>
      </Grid>
    </Container>
  );
}

export default index;
