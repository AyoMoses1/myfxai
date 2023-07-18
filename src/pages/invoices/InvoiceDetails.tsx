import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useColorMode,
  VStack,
} from '@chakra-ui/react';
import logo from 'assets/brand/logo.png';
import styled from 'styled-components';
import Invoice from './components/Invoice';

const InvoiceDetails = () => {
  const { colorMode } = useColorMode();
  const headingColor = colorMode === 'dark' ? 'primary.dark' : '#181c26';
  return (
    <Box px={12} py={9} bg="white">
      <Box>
        <Flex justifyContent="space-between" alignItems="center">
          <VStack>
            <Heading
              color={headingColor}
              variant="modalHeader"
              fontWeight="600"
            >
              INVOICE
            </Heading>
            <Text variant="headerCaption" color="tableHeader" fontSize='11'>#AB2324-01</Text>
          </VStack>
          <Image src={logo} height="auto" objectFit="cover" />
        </Flex>
        <Invoice/>
      </Box>
    </Box>
  );
};

export default InvoiceDetails;
