import React from 'react';
import {
  Grid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import Form from './components/SignInForm';
import Banner from './components/Banner';

function SignIn() {
  return (
    <Flex>
      <Grid templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Banner />
        </GridItem>
        <GridItem px={20}>
          <Form />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default SignIn;
