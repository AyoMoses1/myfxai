import React from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Heading,
  Text,
  Icon,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaPlay } from 'react-icons/fa';
import myImage from 'assets/images/LooperGroup.png';

function Hero() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box px={28}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem py={44}>
          <Heading variant="primary">Experience the future of trading</Heading>
          <Text variant="heroText" py={6}>
            Trade smarter with MyFXai.com - The AI-powered trading platform that
            maximizes your profits.
          </Text>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
          <ButtonGroup>
            <Button variant="secondary" rightIcon={<ArrowForwardIcon />}>
              Get Started
            </Button>
            <Button
              variant="noBg"
              color="matteGreen"
              leftIcon={
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="full"
                  bgColor="matteGreen"
                  width={12}
                  height={12}
                >
                  <Icon as={FaPlay} boxSize={6} color="white" />
                </Box>
              }
            >
              See how it works
            </Button>
          </ButtonGroup>
        </GridItem>
        <GridItem>
          <img src={myImage} alt="Hero" />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Hero;
