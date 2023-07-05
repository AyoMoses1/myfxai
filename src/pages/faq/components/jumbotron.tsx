import React from 'react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Text,
  Image,
  HStack,
  useColorMode,
} from '@chakra-ui/react';
import styled from 'styled-components';
import a1 from 'assets/avatars/a1.png';
import a2 from 'assets/avatars/a2.png';
import a3 from 'assets/avatars/a3.png';

const Jumbotron = () => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'dark' ? 'gray.800' : '#F9FAFB';
  const borderColor = colorMode === 'dark' ? '#333B43' : '#000';

  return (
    <StyledBox
      bg={bgColor}
      p={8}
      rounded="md"
      textAlign="center"
      borderColor={borderColor}
    >
      <HStack
        justify="center"
        mb={4}
        position="relative"
        width="150px"
        mx="auto"
        my={8}
      >
        <Image src={a1} position="absolute" right="100px" zIndex={1} />
        <Image
          src={a2}
          position="absolute"
          right="50px"
          top="-38px"
          zIndex={3}
        />
        <Image src={a3} position="absolute" right="12px" zIndex={1} />
      </HStack>
      <Text variant="faqQuestion" mb={4}>
        Still have questions?
      </Text>
      <Text variant="faqAnswer" mb={8}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida
        orci nec consequat consectetur.
      </Text>
      <Button variant="outline" rightIcon={<ArrowForwardIcon />}>
        Get Started
      </Button>
    </StyledBox>
  );
};

export default Jumbotron;

const StyledBox = styled(Box)`
  box-shadow: 2px 8px 26px 2px rgba(0, 0, 0, 0.08);
  border: 1.49px solid;
  border-image-slice: 1;
  border-image-width: 1px;
  border-image-outset: 0;
  border-image-repeat: stretch;
  border-image: ${(props) =>
    `linear-gradient(to top, ${props.borderColor} 28.27%, rgba(0, 0, 0, 0.1) 100%) 1`};
`;
