import React from 'react';
import {
  Grid,
  GridItem,
  Flex,
  Heading,
  Text,
  Container,
  Box,
} from '@chakra-ui/react';
import Form from './components/SignUpForm';
import Banner from './components/Banner';

function SignUp() {
  return (
    <Flex height="100vh">
      <Grid templateColumns="repeat(2, 1fr)" height="100%">
        <GridItem bgColor="authBg" height="100%">
          <Banner />
        </GridItem>
        <GridItem>
          <Form />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default SignUp;
