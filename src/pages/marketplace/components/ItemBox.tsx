import React, { useState } from 'react';
import { FaCaretUp } from 'react-icons/fa';
import {
  Box,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  VStack,
} from '@chakra-ui/react';
import cancel from 'assets/icons/cancel.png';
import styled from 'styled-components';
import { checkoutItems } from '../data';

type Props = {
  item: {
    name: string;
    value: number;
    quantity: number;
  }
}
const ItemBox = ({item}: Props) => {
  const [value, setValue] = useState(item.quantity);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  return (
    <StyledBox px={4} py={7} mb={6}>
      <Flex justifyContent="space-between">
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
          <HStack>
            <InputGroup>
              <Input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
              />
              <InputRightElement width="4.5rem">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  onClick={handleIncrement}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.5286 5.52729C7.78895 5.26694 8.21106 5.26694 8.47141 5.52729L11.8047 8.86063C12.0651 9.12098 12.0651 9.54309 11.8047 9.80344C11.5444 10.0638 11.1223 10.0638 10.8619 9.80344L8 6.94151L5.13807 9.80344C4.87772 10.0638 4.45561 10.0638 4.19526 9.80344C3.93491 9.54309 3.93491 9.12098 4.19526 8.86063L7.5286 5.52729Z"
                    fill="#000814"
                  />
                </svg>
              </InputRightElement>
            </InputGroup>
            <Text variant="cartBold" mr={8} ml={14}>{`$24`}</Text>
            <Image src={cancel} />
          </HStack>
        </Box>
      </Flex>
    </StyledBox>
  );
};

export default ItemBox;

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
