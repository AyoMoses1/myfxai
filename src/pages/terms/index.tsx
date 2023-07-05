import React from 'react';
import { termsData } from './helpers';
import {
  Heading,
  Center,
  Text,
  VStack,
  Container,
  Box,
  Image,
} from '@chakra-ui/react';
import divider from 'assets/icons/divider.png';

function index() {
  return (
    <Container maxW="70%">
      <Center>
        <VStack align="center" spacing={4}>
          <Heading variant="secondary" m={6}>
            {termsData.main.title}
          </Heading>
          <Image src={divider} alt="Header Decorator" />
          <Text variant="headerCaption" textAlign="center" marginBottom={10}>
            {termsData.main.caption}
          </Text>
        </VStack>
      </Center>
      <VStack align="start" spacing={4} py={20}>
        {termsData.sub.map((item, idx) => (
          <Box key={idx}>
            <Heading variant="quaternary" marginBottom={4}>
              {item.title}
            </Heading>
            <Text
              variant="quaternary"
              marginBottom={10}
              fontFamily="puritan sans-serif"
            >
              {item.content}
            </Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
}

export default index;
