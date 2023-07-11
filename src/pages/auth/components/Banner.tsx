import React from 'react';
import {
  Flex,
  Heading,
  Text,
  Container,
  Box,
} from '@chakra-ui/react';

function Banner() {
  return (
    <Container height="100%" px={28}>
      <Flex h="100%" align="center" justify="center">
        <Box>
          <Heading variant="primary" marginBottom={12}>
            Take your trading game to the next level.{' '}
          </Heading>
          <Text variant="body" textStyle="auth">
            Ready to get started? <br /> Sign up now and experience the power of
            AI trading for yourself. It's easy to join – simply fill out the
            form and start trading smarter today!
          </Text>
        </Box>
      </Flex>
    </Container>
  );
}

export default Banner;
