import {
  Box,
  Text,
  Button,
  Badge,
  Grid,
  GridItem,
  HStack,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { cartItems } from '../data';

const CartBox = () => {
  return (
    <Box
      bg="white"
      p={4}
      borderRadius="md"
      boxShadow="md"
      height="70vh"
      position="relative"
    >
      <Text variant="faqQuestion" mb={2}>
        Your Cart
      </Text>
      <Grid templateColumns="repeat(1, 1fr)">
        {cartItems.map((item) => (
          <GridItem>
            <HStack mb={4} justifyContent="space-between">
              <Box bg="gray.400" width="80px" height="50px"></Box>
              <VStack alignItems="start">
                VStack
                <Text variant="cardText">{item.name}</Text>
                <Heading variant="cardHeader">{`$${item.value}`}</Heading>
              </VStack>
              <FaTimes color="red" />
            </HStack>
          </GridItem>
        ))}
      </Grid>
      <Link to="/checkout">
        <Button
          variant="primary"
          width="90%"
          sx={{ position: 'absolute', bottom: 5 }}
        >
          Checkout
        </Button>
      </Link>
    </Box>
  );
};

export default CartBox;
