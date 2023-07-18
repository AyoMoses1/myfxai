import React from 'react';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import CardComponent from './components/Card';
import { items } from './data';
import Cart from './components/Cart';

const index = () => {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={8}>
      <GridItem colSpan={3}>
        <Grid templateColumns="repeat(3, 1fr)" gap={4}>
          {items.map((item) => (
            <GridItem colSpan={1}>
              <CardComponent item={item} />
            </GridItem>
          ))}
        </Grid>
      </GridItem>
      <GridItem colSpan={1}>
        <Cart />
      </GridItem>
    </Grid>
  );
};

export default index;
