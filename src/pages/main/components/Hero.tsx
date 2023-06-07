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
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FaPlayCircle } from 'react-icons/fa';
import myImage from "assets/images/LooperGroup.png";

function Hero() {
  return (
    <Box px={28}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem py={44}>
          <Heading variant="primary">Experience the future of trading</Heading>
          <Text variant="heroText" py={6}>
            Trade smarter with MyFXai.com - The AI-powered trading platform that
            maximizes your profits.
          </Text>
          <ButtonGroup>
            <Button variant="secondary" rightIcon={<ArrowForwardIcon />}>
              Get Started
            </Button>
            <Button
              variant="noBg"
              color="matteGreen"
              leftIcon={<Icon as={FaPlayCircle} boxSize={12}/>}
            >
              See how it works
            </Button>
          </ButtonGroup>
        </GridItem>
        <GridItem>
          <img src={myImage} alt="My Image" />
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Hero;
