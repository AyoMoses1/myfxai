import {
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  HStack,
  Divider,
} from '@chakra-ui/react';
import styled from 'styled-components';

const CheckoutBox = () => {
  return (
    <StyledBox
      p={4}
      borderRadius="md"
      height="70vh"
      position="relative"
    >
      <Grid templateColumns="repeat(1, 1fr)">
        <GridItem>
          <HStack mb={4} justifyContent="space-between">
            <Text variant="cardText">Subtotal</Text>
            <Text variant="cardText">$435.65</Text>
          </HStack>
        </GridItem>
        <StyledDivider />
        <GridItem>
          <HStack mb={4} justifyContent="space-between">
            <Text variant="cardText">Tax</Text>
            <Text variant="cardText">$4.00</Text>
          </HStack>
        </GridItem>
        <StyledDivider />
        <GridItem>
          <HStack mb={4} justifyContent="space-between">
            <Text variant="cardText" fontWeight="700">
              Total
            </Text>
            <Text variant="cardText" fontWeight="700">
              $440.60
            </Text>
          </HStack>
        </GridItem>
        <StyledDivider />
      </Grid>
      <Box sx={{ position: 'absolute', bottom: 5 }}>
        <Button variant="primary" width="95%">
          Proceed to Payment
        </Button>
        <Button width="95%">Continue Shopping</Button>
      </Box>
    </StyledBox>
  );
};

export default CheckoutBox;

const StyledDivider = styled(Divider)`
  background: linear-gradient(
    0deg,
    #8c8c8c 0%,
    rgba(234, 236, 240, 0) 100%
  ) !important;
  margin: 20px 0;
`;

const StyledBox = styled(Box)`
  background: #F0F5FA;
`;
