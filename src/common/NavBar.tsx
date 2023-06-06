import React from 'react'
import { Flex, Box, Link, Text, Button } from '@chakra-ui/react';


function NavBar() {
  return (
    <Box px={8}>
        <Flex p={4} align="center">
          <Box flex={2}>
            <Text>Logo</Text>
          </Box>
          <Box flex={2}>
            <Link mx={4}>Home</Link>
            <Link mx={4}>About</Link>
            <Link mx={4}>Blog</Link>
            <Link mx={4}>Contact</Link>
            <Link mx={4}>FAQ</Link>
            <Link mx={4}>Terms</Link>
            <Link mx={4}>Privacy</Link>
          </Box>
          <Box flex={1}>
            <Button variant="outline">Log In</Button>
            <Button variant="secondary" mx={4}>
              Get Started
            </Button>
          </Box>
        </Flex>
      </Box>
  )
}

export default NavBar