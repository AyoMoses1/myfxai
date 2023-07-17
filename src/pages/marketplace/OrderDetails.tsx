import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import OrderCard from './components/OrderCard';
import { checkoutItems } from './data';

const OrderDetails = () => {
  return (
    <Box px={12}>
      <HStack justifyContent="space-between">
        <Text variant="cartBold" mb={8}>
          Order Details
        </Text>
        <Text variant="faqAnswer" color="#7d7d7d">
          3 items Ordered
        </Text>
      </HStack>
      {checkoutItems.map((item) => (
        <OrderCard item={item} />
      ))}
    </Box>
  );
};

export default OrderDetails;
