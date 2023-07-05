import React from 'react';
import { Grid, GridItem, Flex, Box } from '@chakra-ui/react';
import Form from './components/SignUpForm';
import Banner from './components/Banner';
import AuthNav from 'common/AuthNav';
import AuthFooter from './../../common/AuthFooter';

function SignUp() {
  return (
    <Box>
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
    </Box>
  );
}

export default SignUp;
