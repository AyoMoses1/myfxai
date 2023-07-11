import React from 'react';
import {
  Container,
  Heading,
  Text,
  Flex,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Checkbox,
  Textarea,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';

function Form() {
  return (
    <StyledContainer>
      <Flex h="100%" align="center">
        <Box>
          <Heading variant="secondary" color="light.blue1" marginBottom={4}>
            Get in touch
          </Heading>
          <Text variant="quaternary">
            Our friendly team would love to hear from you.
          </Text>
          <StyledForm>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" variant="outline" autoComplete="off" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Message Title</FormLabel>
                <Input type="text" variant="outline" />
              </FormControl>
              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Textarea size="md" />
              </FormControl>
              <FormControl justifyContent="space-between">
                <Checkbox defaultChecked={false}>
                  {' '}
                  You agree to our friendly{' '}
                  <Link as={ReactRouterLink} to="/policies">
                    privacy policy
                  </Link>
                </Checkbox>
              </FormControl>
              <Link as={ReactRouterLink} to="/">
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  width="100%"
                >
                  Send Message
                </Button>
              </Link>
            </Stack>
          </StyledForm>
        </Box>
      </Flex>
    </StyledContainer>
  );
}

export default Form;

const StyledForm = styled('form')`
  margin-top: 42px;
`;

const StyledContainer = styled(Container)`
  height: 100%;
  padding-x: 20px;
  padding-bottom: 80px;
  padding-top: 20px;
`;
