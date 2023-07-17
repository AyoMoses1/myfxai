import React from 'react';
import {
  Box,
  Button,
  Flex,
  HStack,
  VStack,
  Text
} from '@chakra-ui/react';
import styled from 'styled-components';

type Props = {
  item: {
    name: string;
    value: number;
    quantity: number;
  };
};
const OrderCard = ({ item }: Props) => {
  return (
    <StyledBox mb={6}>
      <Flex px={4} bg="#fafafa" py={4}>
        <Box mr={20}>
          <Text variant="faqAnswer" color="#7d7d7d" fontSize="14px">
            Order ID
          </Text>
          <Text variant="cartBold" fontFamily="Inter">
            #3435312123
          </Text>
        </Box>
        <Box mr={20}>
          <Text variant="faqAnswer" color="#7d7d7d" fontSize="14px">
            Order Date
          </Text>
          <Text variant="cartBold" fontFamily="Inter">
            23 Feb, 2023
          </Text>
        </Box>
        <Box>
          <Text variant="faqAnswer" color="#7d7d7d" fontSize="14px">
            Total Amount
          </Text>
          <Text variant="cartBold" fontFamily="Inter">
            $39
          </Text>
        </Box>
      </Flex>
      <Flex px={4} justifyContent="space-between" py={7}>
        <Box>
          <HStack>
            <Box bg="gray.200" width="50px" height="40px" mr={4}></Box>
            <VStack alignItems="start">
              <Text variant="cartBold">{item.name}</Text>
              <Text variant="faqAnswer" color="#7d7d7d">
                collection
              </Text>
            </VStack>
          </HStack>
        </Box>
        <Box>
          <Button variant="disabled" size="sm">
            Action
          </Button>
        </Box>
      </Flex>
    </StyledBox>
  );
};

export default OrderCard;

const StyledBox = styled(Box)`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, #7d7d7d, #d9d9d9);
    border-radius: inherit;
  }
`;
