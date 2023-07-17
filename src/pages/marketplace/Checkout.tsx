import React from 'react';
import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import ItemBox from './components/ItemBox';
import { checkoutItems } from './data';
import CheckoutBox from './components/CheckoutBox';

const Checkout = () => {
  return (
    <Box p={12} bg="white">
      <Text variant="cartBold" mb={8}>
        Your Cart
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={16}>
        <GridItem colSpan={2}>
          {checkoutItems.map((item) => (
            <ItemBox item={item} />
          ))}
        </GridItem>
        <GridItem colSpan={1}>
          <CheckoutBox />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Checkout;
