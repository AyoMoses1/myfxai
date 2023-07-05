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
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';

function Form() {
  return (
    <StyledContainer height="100%" px={20} py={12}>
        <Box>
          <Heading variant="h1" color="blue2" marginBottom={4}>
            Join myFXai.com
          </Heading>
          <Text variant="quaternary" color="blue2">
            Our AI technology is here to help you succeed!
          </Text>
          <StyledForm>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Full Name</FormLabel>
                <Input type="text" variant="outline" autoComplete="off" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email Address</FormLabel>
                <Input type="email" variant="outline" autoComplete="off" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" variant="outline" />
              </FormControl>
              <Flex justifyContent="space-between" align="center">
                <Checkbox defaultChecked color="gray4">
                  Remember Me
                </Checkbox>
                <Link color="lightBlue" fontSize="sm" href="#">
                  Forgot Password?
                </Link>
              </Flex>
              <Link as={ReactRouterLink} to="/">
                <Button type="submit" variant="primary" size="lg">
                  Sign Up
                </Button>
              </Link>
              <Text variant="quaternary" color="blue2">
                Already have an account?{' '}
                <Link as={ReactRouterLink} to="/login">
                  Sign In
                </Link>
              </Text>
            </Stack>
          </StyledForm>
        </Box>
    </StyledContainer>
  );
}

export default Form;

const StyledForm = styled('form')`
  margin-top: 42px;

`;

const StyledContainer = styled(Container)`
  box-shadow: 2px 8px 26px 2px rgba(0, 0, 0, 0.08);
  border-image: linear-gradient(to left, blue 28.27%, rgba(255, 255, 255, 0) 100%);
  `;
