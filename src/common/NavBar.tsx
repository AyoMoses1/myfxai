import React from 'react';
import { Flex, Box, Link, Button, Image } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import logo from 'assets/icons/logo.png';

function NavBar() {
  return (
    <Box px={5}>
      <Flex p={4} align="center" justify="space-between">
        <Box>
          <Image src={logo} />
        </Box>
        <Box>
          <Link mx={4} as={ReactRouterLink} to="/">
            Home
          </Link>
          <Link mx={4}>About</Link>
          <Link mx={4}>Blog</Link>
          <Link mx={4} as={ReactRouterLink} to="/contact">
            Contact
          </Link>
          <Link mx={4}>FAQ</Link>
          <Link mx={4} as={ReactRouterLink} to="/terms">
            Terms
          </Link>
          <Link mx={4} as={ReactRouterLink} to="/policies">
            Privacy
          </Link>
        </Box>
        <Box >
          <Link mx={4} as={ReactRouterLink} to="/login">
            <Button variant="outline">Log In</Button>
          </Link>
          <Button variant="secondary" mx={4}>
            Get Started
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
