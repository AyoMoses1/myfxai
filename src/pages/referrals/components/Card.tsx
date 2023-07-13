import React from 'react';
import { Flex, Box, Heading, Text, Image, Progress } from '@chakra-ui/react';
import styled from 'styled-components';

interface CustomCardProps {
  title: string;
  value: string;
  bgColor: string;
}

const Card = ({ title, value, bgColor }: CustomCardProps) => {
  return (
    <StyledBox>
      <Box
        bg={bgColor}
        px={4}
        py={2}
        height="76px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text color="primary.light" fontSize="12px" maxW="50%">
          {title}
        </Text>
        <Heading color="primary.light" fontSize="14px" fontWeight="700">
          {value}
        </Heading>
      </Box>
    </StyledBox>
  );
};

export default Card;

const StyledBox = styled(Box)`
  border-left: 1px solid #000;
  border-bottom: 1px solid #003566;
  padding-left: 10px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  padding-bottom: 10px;
  background: ${(props) => props.bgColor} !important;
`;
