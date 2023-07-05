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
  Image,
  HStack,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import styled from 'styled-components';
import google from 'assets/icons/google.png';

function Form() {
  return (
    <StyledContainer height="100%" px={20} py={4}>
      <Box>
        <Box py={4}>
          <Heading variant="h1" color="blue2" marginBottom={2}>
            Welcome Back
          </Heading>
          <Text variant="quaternary" color="blue2">
            Our AI technology is here to help you succeed!
          </Text>
        </Box>
        <StyledForm>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <Input type="email" variant="fadeBorder" autoComplete="off" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" variant="fadeBorder" />
            </FormControl>
            <Flex justifyContent="space-between" align="center">
              <Checkbox defaultChecked color="gray4">
                Remember Me
              </Checkbox>
              <Link color="lightBlue" fontSize="sm" href="#">
                Forgot Password?
              </Link>
            </Flex>
            <HStack spacing={4}>
              <Link as={ReactRouterLink} to="/">
                <Button type="submit" variant="primary" size="lg">
                  Log In
                </Button>
              </Link>
              <Image src={google} alt="google-auth" />
            </HStack>
            <Text variant="quaternary" color="blue2">
              Don't have an account?{' '}
              <Link as={ReactRouterLink} to="/signup" color="lightBlue">
                Sign Up
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
  border: 1.49px solid;
  border-image-slice: 1;
  border-image-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image: linear-gradient(
      to right,
      #aed8ff 28.27%,
      rgba(128, 128, 128, 0.5) 100%
    )
    1;
`;
