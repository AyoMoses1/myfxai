import React from 'react';
import { Flex, Box, Link, Button, Image } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import logo from 'assets/icons/logo.png';

const AuthNav = () => {
  return (
    <Box px={5}>
      <Flex p={4} align="center" justify="space-between">
        <Box>
          <Image src={logo} />
        </Box>
        <Box>
          <Link mx={4} as={ReactRouterLink} to="/login">
            <Button variant="outline">Log In</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default AuthNav;
