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
            Terms
          </Heading>
          <Image src={divider} alt="Header Decorator" />
          <Text variant="headerCaption" textAlign="center" marginBottom={10}>
            At myFXai.com, we value the privacy and security of our users'
            personal information. This privacy protection policy describes how
            we collect, use, and protect your personal information when you use
            our mentorship services. By using our website, you agree to the
            terms of this policy
          </Text>
        </VStack>
      </Center>
      <VStack align="start" spacing={4} py={20}>
        {termsData.map((item) => (
          <Box>
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
